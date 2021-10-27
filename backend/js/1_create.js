const db = require('./_database')  
async function createTables(){
  await db.connect(); 
  await db.query(`CREATE TABLE tb_veiculos(
      veiculos_id serial PRIMARY KEY,
      nome TEXT
  )`)  
  await db.end()
  console.log("Tabelas Criadas")
} 
createTables()