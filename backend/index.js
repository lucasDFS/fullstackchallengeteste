const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server Ok!')
})
 
app.get('/vehicles', function(req,res, next ){ 
      res.header('Access-Control-Allow-Origin',"*");  
      const client = require('./js/_database')   
      async function selectTables(){    
      result = await client.query("SELECT * FROM tb_veiculos") 
  
      var array = []; 
      const arr = result.rows;  
      var result = [];
      for(var i in arr)
        result.push(arr[i]);   
      var count = 0;
      var total = result.length; 
      var texto =  '{"data":['; 
      result.forEach(element => {  
        texto += '{"type":"vehicles","id":"'+element.veiculos_id+'","attributes":';
        texto += JSON.stringify(element); 
        count++;
        if(total != count){
          texto += '},';   
        }else{
          texto += '}';   
        }     
      });   
      texto +=  ']}';  
      res.send(texto)    
    }   
    selectTables() 
})


app.get('/posts/:id', function(req,res, next ){ 
    res.header('Access-Control-Allow-Origin',"*");  
    const client = require('./js/_database')    
    async function selectTables(){   
       result = await client.query("DELETE FROM tb_veiculos where veiculos_id = '"+req.params.id+"' ") 
      
       var json =  {
          "data": {
              "type":"post",
              "id": req.params.id  
            }
         }  
       res.send(json);   
    }  
    selectTables() 
})





app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})