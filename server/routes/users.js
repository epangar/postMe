const express = require("express");
const _ = require("lodash");
const router = express.Router();
const User = require("../models/User");
const Ticket = require("../models/Ticket");

const fields = Object.keys(_.omit(User.schema.paths, ["__v", "_id"]));

// Retrive ALL
router.get("/", (req, res, next) => {
  User.find()
    .then(listOfUsers => res.json(listOfUsers))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const ph = _.pick(req.body, fields);
  User.create(ph)
    .then(list => res.json(list))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(list => res.json(list))
    .catch(e => next(e));
});

// Update
/* router.put("/:id", (req, res, next) => {
  const updates = _.pick(req.body, fields);
  console.log(updates)

  User.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(list => res.json(list))
    .catch(e => next(e));
}); */


// Update
router.patch('/:id', (req, res, next) => {
    console.log("Entra en put!!!")
    console.log(req.params.id)
    const {id} = req.params;
    const object = _.pickBy(req.body, (e,k) => paths.includes(k));
    const updates = _.pickBy(object, _.identity);
    console.log(id, object, updates);

  User.findByIdAndUpdate(id, {  $set:{updates} } , { new: true })
    .then(obj => res.status(200).json({status:'updated',obj}) )
    .catch(e => next(e));
});

// Delete
router.delete("/:id", (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});

// Retrive by UserId
router.get("/users/:id", (req, res, next) => {
  console.log(req.params.id)
  User.find({userId: req.params.id })
    .then(ticket => res.status(200).json(ticket))
    .catch(e => next(e));
});

module.exports = router;
