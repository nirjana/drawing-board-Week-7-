const {MongoClient} = require('mongodb');
// const { mainModule } = require("process");
const uri ="mongodb://localhost:27017"

async function InsertDoc (data) {
   const client = new MongoClient(uri); 
   try {


const database = client.db("Pixel-art");
const collectionName = database.collection("ColloredPixels "); 
const doc = [data]
console.log("data", data)
const result = await collectionName.insertMany (doc);
console.log("insert", result) 
console.log(`inserted with the id :${result}`)
await client.close(); 
return result; 
}
catch(err){
console.log("error")
console.log(err)
return err;
}
}

module.exports={InsertDoc}
// InsertDoc().catch(console.error);
