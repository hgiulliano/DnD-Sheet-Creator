function isUUIDInvalid(id){
  const uuidModel = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
  return !uuidModel.test(id)
}//here we test if our uuid is a valid id

const express = require('express')//import express
const cors = require('cors')//import cors
const { Client } = require('pg')//from pg import client

const client = new Client({ //acessing our database, everything is on the docker compose
  user: 'cleric',
  password: 'Cajado@2026!Mestre',
  host: 'localhost',
  port: 5433,
  database: 'postgres',
})

client.connect() // connecting to the database
const app = express() //initializing express
const port = 3000 // listening on port 3000. We'll use it on the localhost

app.use(cors("*"))//let everyone send requests to our back-end.
app.use(express.json()) // transforms the text to an json object, so we can access it's values


//i've created an endpoint, so i can access it on my localhost:3000
app.get('/api/sheets', async (req, res) => {
  const offset = (req.query.page - 1) * req.query.limit
  const allSheets = await client.query(`
    select * from public.sheets order by initcap(name) ASC
    limit $1 offset $2
    `,[req.query.limit,offset])
  const characterCount = await client.query(`
    select count(name)
    from public.sheets
    `)
  const totalPages = Math.ceil((characterCount.rows[0].count) / req.query.limit)
  res.send({
    "items": allSheets.rows,
    "totalPages": totalPages
  })
})

//params goes on the url
//query goes on the ?

//req.body -> what the front sends to the back-end 
app.post('/api/sheets', async (req, res) => { // creating our endpoint
  const id_stats = (await client.query(`
    INSERT INTO stats ("strength","dexterity","constitution","intelligence","wisdom","charisma")
    values (15,14,13,12,10,8) returning id`)).rows[0].id //sheets doesn't accept null values on the column stats_id, so we need to define our stats table values
  //and catch the id that it returns, everytime we create a new stats sheet it generates a new id for us
  const insertSheetValues = [req.body.name, req.body.charspecie, req.body.charclass, req.body.level, req.body.ac, req.body.hp, req.body.speed, id_stats]
  //we do this to avoid sql injection.

  //in js we use query to insert things too.

  const returnSheet = await client.query(`
    INSERT INTO sheets ("name","species","class","level","armor","hp","speed","stats_id") 
    values ($1,$2,$3,$4,$5,$6,$7,$8) 
    RETURNING *`, insertSheetValues); //we replace our $number with our variables on insertSheetValues.
  //the $ avoids every special character so its impossible to sql injection.

  const completeSheet = (await client.query(`
    SELECT sh.id as sheetID,sh.hp,sh.name,sh.level,sh.speed,sh.class,sh.species,sh.armor, st.id as statsID,st.strength,st.dexterity,st.constitution,st.intelligence,st.wisdom,st.charisma FROM sheets sh join stats st on sh.stats_id=st.id where st.id='${id_stats}' 
    `)).rows

  res.send(completeSheet)
})

//get = read only mode, only send the answer
app.get('/api/sheets/:id', async (req, res) => {//sheets/:id express understand that everything that comes
  //after the / is an id, so its like an variable.
  //async is necessary because we'll use await ()
  //await says to the computer "dont focus on me, i'll take time to get ready" so wait, before sending anything
  const myId = req.params.id//catch the id that is on the url


  if (isUUIDInvalid(myId)){
    return res.status(400).send({
      message : "Invalid Character ID"
    });
  }

  //express puts any value that the user wrote on url in an object called req.params
  const result = await client.query(`
    select sh.id as sheetID,sh.hp,sh.name,sh.level,sh.speed,sh.class,sh.species,sh.armor, st.id as statsID,st.strength,st.dexterity,st.constitution,st.intelligence,st.wisdom,st.charisma from public.sheets sh join public.stats st on sh.stats_id=st.id where sh.id = $1`,[myId])
  //we had a trouble because ID and statsID had the same name, so one was overwritting the value of the other
  //because of it, we had to "change" the column name locally.
  //await stops the code on this line untill the db receives the command

    if (result.rows.length == 0){
      return res.status(400).send({
        message : "Invalid Character ID"
      });
    }

  res.send(result.rows)
  //rows is an list with the data that the user asked for
})

app.get('/api/sheets/search/:name',async (req,res) => {
  const charName = `${req.params.name}%`
  const actualLimit = Number(req.query.limit)
  const actualOffset = Number((req.query.page-1)*req.query.limit)
  const totalCharsArrays = await client.query(`select count(name) from sheets where name ilike $1`,[charName])
  const totalChars = totalCharsArrays.rows[0].count
  const nameSearch = await client.query(`
    select * from sheets where name ilike $1 limit $2 offset $3;`,[charName,actualLimit,actualOffset])
  const totalPages = Math.ceil(Number(totalChars)/actualLimit)
  res.send({  
    "items" : nameSearch.rows,
    "totalPages" : totalPages
  })
})

app.delete('/api/sheets/:statsid', async (req,res) => {
  const statsId = req.params.statsid
  if(isUUIDInvalid(statsId)){
    return res.status(400).send({
      message : "The character ID is invalid."
    })
  }

  await client.query('DELETE FROM stats WHERE id = $1;',[statsId]) // cant use `${}` it crashes nodemon, and nee to use [var] into the $1
  //if you dont use [] , it'll crash nodemon
  res.send('Character deleted.')//if you dont send a res.send, the localhost will wait forever and return an error
})

app.patch('/api/sheets/:id', async (req,res) => {
  const idPatch = req.params.id
  if(isUUIDInvalid(idPatch)){
    return res.status(400).send({ // res.status because is a bad request. 
      message : "Your ID is not valid." 
    })
  
  }
    const updateQuery = await client.query(`
      UPDATE sheets
      SET
      name = $1,
      species = $2,
      class = $3,
      level = $4,
      armor = $5,
      speed = $6,
      hp = $7
      where
      id = $8
      `,[req.body.name,req.body.species,req.body.class,req.body.level,req.body.armor,req.body.speed,req.body.hp,idPatch])
    res.send({
      message : "Character updated successfully.s"
    })
  }
)

//opening the doors , now the server can receive requests, is like initializating the server.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/', express.static('../front-end/')) //serve static files on the localhost

//filtrar as fichas, ordenar as fichas, adicionar nova ficha, remover ficha, alterar uma ficha, buscar uma ficha por id CRUD 
