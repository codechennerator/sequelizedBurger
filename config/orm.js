let connection = require('../config/connection.js');

let orm = {
    selectAll: (tableInput, cb) =>{
        let queryString = "SELECT * FROM ??";
        connection.query(queryString,[tableInput], (err, result) =>{
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: (tableInput, burgerName, isEaten, cb) =>{
        let post = {burger_name: burgerName, devoured: isEaten};
        let queryString = "INSERT INTO ?? SET ?";
        connection.query(
            queryString,
            [tableInput, post],
            (err, result) =>{
                if(err) throw err;
                console.log(result);
                cb(result);
            }
        );
    },
    updateOne: (tableInput, burgerId, cb) =>{
        let toUpdate = {devoured: 1};
        let condition = {id: burgerId};
        let queryString = "UPDATE ?? SET ? WHERE ?"
        let query = connection.query(
            queryString,
            [tableInput, toUpdate, condition],
            (err, result) => {
                if(err) throw err;
                console.log(result);
                cb(result);
            }
        );
        console.log(query.sql);
    }
}

module.exports = orm;
