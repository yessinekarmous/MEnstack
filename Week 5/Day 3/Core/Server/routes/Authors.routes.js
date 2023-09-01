const AuthorsControllers = require("../controllers/Authors.controllers");

module.exports = (app) => {
  app.post("/api/create", AuthorsControllers.CreateAuthor);
  app.get("/api/Find", AuthorsControllers.FindAll);
  app.get("/api/Find/:id", AuthorsControllers.FindOne);
  app.delete("/api/delete/:id", AuthorsControllers.Delete);
  app.put("/api/edit/:id", AuthorsControllers.Update);
};
