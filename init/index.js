const mongoose = require("mongoose");
const Listing = require("../models/listing.js")
const initData = require("./data.js")

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust'

main().then(() =>{
    console.log("Connected to MongoDb") 
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

}

const initDb = async () => {
    await Listing.deleteMany({});
    initData.data =  initData.data.map((obj) => ({...obj,owner:"688f3e59edd24f4b6487cc99"}))
    await Listing.insertMany(initData.data);
    console.log("Sample Data Added");
}
initDb();


