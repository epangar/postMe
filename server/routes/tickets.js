const express = require("express");
const _ = require("lodash");
const router = express.Router();
const Ticket = require("../models/Ticket");

const fields = Object.keys(_.omit(Ticket.schema.paths, ["__v", "_id"]));

// Retrive ALL
router.get("/", (req, res, next) => {
  Ticket.find()
    .then(tickets => res.json(tickets))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const ph = _.pick(req.body, fields);
  Ticket.create(ph)
    .then(ticket => res.json(ticket))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  console.log(req.params.id)
  Ticket.findById(req.params.id)
    .then(ticket => res.json(ticket))
    .catch(e => next(e));
});

// Update
router.put("/:id", (req, res, next) => {
  const updates = _.pick(req.body, fields);

  Ticket.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(ticket => res.json(ticket))
    .catch(e => next(e));
});

// Delete
router.delete("/:id", (req, res, next) => {
  Ticket.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});


// Retrive by UserId
router.get("/tickets/:id", (req, res, next) => {
  console.log(req.params.id)
  Ticket.find({listId:req.params.id})
    .then(ticket => res.status(200).json(ticket))
    .catch(e => next(e));
}); 


module.exports = router;