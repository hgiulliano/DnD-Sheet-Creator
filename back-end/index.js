const express = require('express')//import express
const cors = require('cors')//import cors
const {Client} = require('pg')//from pg import client

const client = new Client({ //acessing our database, everything is on the docker compose
    user:'cleric',
    password:'cleric',
    host:'localhost',
    port:5432,
    database:'postgres',
})

client.connect() // connecting to the database
const app = express() //initializing express
const port = 3000 // listening on port 3000. We'll use it on the localhost

app.use(cors("*"))//let everyone get access to our localhost, removing the security locks
app.use(express.json()) // transforms the text to an json object, so we can access it's values


//i've created an endpoint, so i can access it on my localhost:3000
app.get('/sheets', async (req, res) => { 
  const allSheets = await client.query(`select * from public.sheets`)
  res.send(allSheets.rows)
})

//params goes on the url
//query goes on the ?

//req.body -> what the front sends to the back-end 
app.post('/sheets', async (req, res) => { // creating our endpoint
  const id_stats = (await client.query(`
    INSERT INTO stats ("strength","dexterity","constitution","intelligence","wisdom","charisma")
    values (15,14,13,12,10,8) returning id`)).rows[0].id //sheets doesn't accept null values on the column stats_id, so we need to define our stats table values
    //and catch the id that it returns, everytime we create a new stats sheet it generates a new id for us

    const insertSheetValues = [req.body.name,req.body.charspecie,req.body.charclass,req.body.level,req.body.ac,req.body.hp,req.body.speed,id_stats]
    //we do this to avoid sql injection.
    
    //in js we use query to insert things too.
    
  const returnSheet = await client.query(`
    INSERT INTO sheets ("name","species","class","level","armor","hp","speed","stats_id") 
    values ($1,$2,$3,$4,$5,$6,$7,$8) 
    RETURNING *`,insertSheetValues); //we replace our $number with our variables on insertSheetValues.
    //the $ avoids every special character so its impossible to sql injection.

  const completeSheet = (await client.query(`
    SELECT * FROM sheets sh join stats st on sh.stats_id=st.id where st.id='${id_stats}' 
    `)).rows

  res.send(completeSheet)
  console.log(`Sheets : ${JSON.stringify(completeSheet)}`)
})

//get = read only mode, only send the answer
app.get('/sheets/:id', async (req, res) => {//sheets/:id express understand that everything that comes
  //after the / is an id, so its like an variable.
  //async is necessary because we'll use await ()
  //await says to the computer "dont focus on me, i'll take time to get ready" so wait, before sending anything
  
  const myId = req.params.id//catch the id that is on the url

  //express puts any value that the user wrote on url in an object called req.params
  const result = await client.query(`select * from public.sheets sh join public.stats st on sh.stats_id=st.id where sh.id = '${myId}'`)
  //await stops the code on this line untill the db receives the command

  res.send(result.rows)
  //rows is an list with the data that the user asked for
})

//opening the doors , now the server can receive requests, is like initializating the server.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  


//filtrar as fichas, ordenar as fichas, adicionar nova ficha, remover ficha, alterar uma ficha, buscar uma ficha por id CRUD 
