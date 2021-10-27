const { query } = require('express');
const db = require('./_database')  
async function insertTables(){
  await db.connect();  
  const queryEvento = "INSERT INTO tb_veiculos (nome) VALUES ($1)" 
  await db.query(queryEvento, ['Fiesta']) 
  await db.end() 
  console.log("Dados Inseridos"); 
  
} 
insertTables()