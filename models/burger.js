const orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: (burgerName, isDevoured, cb) => {
      orm.insertOne("burgers", burgerName, isDevoured, (res) => {
        cb(res);
      });
    },
    updateOne: (burgerId, cb) => {
      orm.updateOne("burgers", burgerId, (res) => {
        cb(res);
      });
    }
  };

module.exports = burger;