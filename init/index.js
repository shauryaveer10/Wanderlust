if(process.env.NODE_EVN !='production'){
    require('dotenv').config()
}


const mongoose = require("mongoose");
const Listing = require("../models/listing.js")
const initData = require("./data.js")

const DB_URL = 'mongodb+srv://shauryaveer10_db_user:yRzcdmiObf7W0VuQ@cluster0.z76gm0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

main().then(() =>{
    console.log("Connected to MongoDb") 
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(DB_URL);

}

const initDb = async () => {
   const listingsWithOwner = initData.map((obj) => ({
  ...obj,
  owner: "68b6da32f95fba638716b73d"
}));

await Listing.deleteMany({});
await Listing.insertMany(listingsWithOwner);
console.log("✅ Sample Data Added");

}
initDb();


