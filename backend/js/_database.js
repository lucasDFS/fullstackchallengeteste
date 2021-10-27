const pg = require('pg') 
const pool = new pg.Pool();

const client = new pool.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432, 
})    
client.connect()  
module.exports = client