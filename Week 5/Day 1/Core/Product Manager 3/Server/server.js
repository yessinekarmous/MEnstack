const express = require("express");
const app = express();
const cors=require("cors")
//--Middelware--//
app.use(cors(),express.json(), express.urlencoded({ extended: true }));



require("dotenv").config();

require("./config/mongoose.config");

const Port = process.env.PORT;



require("./routes/Product.routes")(app)

app.listen(Port, () => {
  console.log(`>>>>>>>Server is locked and loaded on port ${Port} 🥢🥢🥢🥢`);
});
