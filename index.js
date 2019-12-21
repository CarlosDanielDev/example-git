const express = require('express');

const app = express();

app.get('/exemplo', (req, res)=> {
  return res.json({ex: 'Este é um exemplo'})
})
app.get('/teste', (req, res)=> {
  return res.json({ex: 'Este é um teste'})
})


app.listen(3333, ()=>{
  console.log('Servidor rodando na porta 3333')
})