const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json()), express.urlencoded({ extended: true });

require("./config/mongoose.config");

// app.get("/api/Students",(req,res)=>{

// }

app.listen(PORT, () => {
  console.log(`>>>>> the server is locked and loaded on ${PORT} `);
});
