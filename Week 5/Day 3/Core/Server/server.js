const express = require("express");
const app = express();

//--Middelware--//
app.use(express.json(), express.urlencoded({ extended: true }));

require("dotenv").config();

require("./config/mongoose.config");

const Port = process.env.PORT;



require("./routes/name.routes")(app)

app.listen(Port, () => {
  console.log(`>>>>>>>Server is locked and loaded on port ${Port} 🥢🥢🥢🥢`);
});
