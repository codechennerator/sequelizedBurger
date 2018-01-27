const db = require("../models");
const express = require("express");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then( (data) => {
        let hbsObject = {
          burgers: data
        };
        res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function(req, res) {

    db.Burger.create({
      burger_name: req.body.name,
      devoured: false
    }).then(results =>{
      res.end();
    });

  });

  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function(dbTodo) {
      res.json(dbTodo);
    });

  });
};
