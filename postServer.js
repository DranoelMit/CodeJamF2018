const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var fs = require('fs');

const port = 8001;
const separator = "///////////////////////////";
const ender ="__________________________________";

app.use(bodyParser.json());
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/loadLeets', (req, res, next)=>{

        fs.readFile('PINF', 'utf-8' ,function(err, buf) {
                let split = buf.toString().split(ender);
                console.log(split);
                res.send(split);
        });

});

app.post('/addLeet', (req, res, next)=>{
        console.log(req.body);
        res.send("POST recieved");

        fs.appendFile('PINF',req.body.text+separator+req.body.style+ender, function(err, data){
                if (err) console.log(err);
        });

});

app.listen(port, ()=>{
        console.log(`postServer listening on port: ${port}`);
});
