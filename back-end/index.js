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
app.get('/sheets', (req, res) => { 
  res.send("Test")
})

app.post('/sheets', (req, res) => { // creating our endpoint
  console.log(req.body) //we print on the console our things like body etc.
  console.log(req.body.name)
  console.log(req.body.hp)
  console.log(req.body.ac)
  console.log(req.body.speed)
  res.send({
    value : req.body.ac + req.body.hp // print on the "site" our information
  })
})

//get = read only mode, only send the answer
app.get('/sheets/:id', async (req, res) => {//sheets/:id express understand that everything that comes
  //after the / is an id, so its like an variable.
  //async is necessary because we'll use await ()
  //await says to the computer "dont focus on me, i'll take time to get ready" so wait, before sending anything
  const myId = req.params.id
  //express puts any value that the user wrote on url in an object called req.params
  const result = await client.query(`select * from public.sheets where id = '${myId}'`)
  //await stops the code on this line untill the db receives the command
  res.send(result.rows)
  //rows is an list with the data that the user asked for
})

//opening the doors , now the server can receive requests, is like initializating the server.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  


//filtrar as fichas, ordenar as fichas, adicionar nova ficha, remover ficha, alterar uma ficha, buscar uma ficha por id CRUD 
