var express = require('express');
var router  = express.Router();
//var url = require('url');

// pegando lista

router.get('/', function(req,res, next ){ 
    res.header('Access-Control-Allow-Origin',"*");

    const db = require('./_database')  
    async function selectTables(){
    await db.connect();

     result = await db.query("SELECT * FROM tb_veiculos")
     
     console.log("EVENTOS:")
     console.log(result.rows);    

    }   
    selectTables() 
})