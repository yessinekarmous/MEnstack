const { Author } = require("../models/Authors.model");

module.exports.CreateAuthor = (req, res) => {
  Author.create(req.body)

    .then((CreatedOne) => {
      res.status(200).json({ CreatedOne });
    })
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong📛📛", err });
    });
};

module.exports.FindAll = (req, res) => {
  Author.find()
    .then((AllAuthors) => {
      res.status(200).json({ AllAuthors });
    })
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong📛📛", err });
    });
};
module.exports.FindOne = (req, res) => {
  const { params } = req;
  Author.findOne({ _id: params.id })
    .then((OneAuthor) => {
      res.status(200).json({ OneAuthor });
    })
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong📛📛", err });
    });
};

module.exports.Delete = (req, res) => {
  const { params } = req;
  Author.deleteOne({ _id: params.id })
    .then((AuthorDeleted) => {
      res.status(200).json({ AuthorDeleted });
    })
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong📛📛", err });
    });
};

module.exports.Update = (req, res) => {
  const { params } = req;
  Author.findOneAndUpdate(
    { _id: params.id },
    req.body,
    { runValidators: true },
    { new: true }
  )
    .then((UpdatedOne) => {
      res.status(200).json({ UpdatedOne });
    })
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong📛📛", err });
    });
};
