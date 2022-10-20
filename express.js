
const {InsertDoc} = require('./Mongo')
const express = require("express");
const app = express();
// const mongoose = require("mongoose")
var bodyParser = require("body-parser");
app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));



// app.get('/board',(req,res)=>{
    

//     const result= findDoc({});
//     result.then(doc =>{
//         res.send(doc)
//       }).catch(err=>{
//             res.send(err)
//         })
//     })


app.post('/board',(req,res)=>{
    

    const result= InsertDoc(req.body);
    result.then(doc =>{
        res.send(doc.insertedID)
      }).catch(err=>{
            res.send(err)
        })

    console.log(req.body)
    })

    
    app.listen(4000,(err)=>{
        if (err){
            console.log(" port 4000")
        }
       
    })

