const express = require("express");
const cors = require("cors");
const app = express();

//--Middelware--//
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

require("dotenv").config();

require("./config/mongoose.config");

require("./routes/Authors.routes")(app);

const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`>>>>>>>Server is locked and loaded on port ${Port} 🥢🥢🥢🥢`);
});
