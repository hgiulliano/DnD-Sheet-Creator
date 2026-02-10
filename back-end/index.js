const express = require('express')//import express
const cors = require('cors')//import cors
const {Client} = require('pg')//from pg import client
const util = require('util')
const fs = require('fs')

const client = new Client({
    user:'cleric',
    password:'cleric',
    host:'localhost',
    port:5432,
    database:'postgres',
})

client.connect()
const app = express()
const port = 3000

app.use(cors("*"))
app.use(express.json())

app.get('/:id', async (req, res) => {
  const myId = req.params.id
  const result = await client.query(`select * from public.sheets where id = '${myId}'`)
  res.send(result.rows)
  
})
app.post('/sheets', (req, res) => {
  // fs.writeFileSync("req.txt",util.inspect(req))
  console.log(req.body)
  console.log(req.body.name)
  console.log(req.body.hp)
  console.log(req.body.ac)
  console.log(req.body.speed)
  res.send({
    value : req.body.ac + req.body.hp
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  
 

//filtrar as fichas, ordenar as fichas, adicionar nova ficha, remover ficha, alterar uma ficha, buscar uma ficha por id CRUD 
