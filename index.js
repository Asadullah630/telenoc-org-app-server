const express= require("express");
const cors = require("cors");
const connectToMongodb = require("./db");
require('dotenv').config();
connectToMongodb();
const app = express();

const port = 8000;
app.use(cors());
app.use(express.json());

app.use("/api/contact", require("./routes/contact.route"))

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})