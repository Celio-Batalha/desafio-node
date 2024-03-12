const express = require('express')
const app = express()
const port = 3000

const config = {
   host: 'db',
   user: 'root',
   password: 'root',
   database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

let result = '';
const sql_add = `INSERT INTO people(name) values('Celio Batalha')`
connection.query(sql_add)
const sql_list = `SELECT * FROM people`
connection.query(sql_list, (err, rows) => {
   if(rows.length){
      result = '<span style="font-size: 20px;">Parabêns você conseguiu! ' + rows[1].name + '</span>';
   }else{
      result = '<h3>Nenhum usuário encontrado!</h3>';
   }
})
connection.end()

app.get('/', (req,res) => {
   res.send('<div style="text-align: center"><h1>Full Cycle Rocks!</h1>' + result +'</div>')
})

app.listen(port, () => {
   console.log(`Up on ${port}`)
})

