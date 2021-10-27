const db = require('./_database')  
async function dropTables(){
  await db.connect();
  await db.query(`DROP TABLE tb_veiculos CASCADE`)  
  await db.end()
  console.log("Tabelas Removidas")
} 
dropTables()