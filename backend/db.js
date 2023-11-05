// const mongoose = require("mongoose");
// const mongoURL = "mongodb://localhost:27017/mydb";

// async function connectToMongo() {
//   mongoose.connect(mongoURL);
//   const db = mongoose.connection;

//   db.on("connected", () => {
//     console.log("Connected to MongoDB successfully");
//   });

//   db.on("error", (err) => {
//     console.error("MongoDB conn");
//   });
// }

// module.exports = connectToMongo;

const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/mydb";

const connectToMongo = ()=> {  
  mongoose.connect(mongoURL) 
  console.log("connection done successfully......");
}
module.exports = connectToMongo;