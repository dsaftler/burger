var connection = require("../config/connection.js");
function printQs(num) {
  var arr = [];
  for (let i=0; i<num; i++){
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(obj){
  var arr =[];
  for (var key in obj) {
    var value = obj[key];
    if (Object.hasOwnProperty.call(obj,key)) {
      value = "'" + value + "'";
    }
    arr.push(key + "=" + value);
  }
  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var qry = "SELECT * FROM  "+ tableInput + ";";
    connection.query(qry, function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
  insertOne: function(tableInput, cols, vals, cb) {
    var qry = "INSERT INTO " + tableInput ;
    qry = qry + " (" + cols.toString() + ") ";
    qry = qry + "VALUES (" + printQs(vals.length)+ ")" ;
    // console.log(qry);

    connection.query(qry, vals, function(err, data){
      if (err) {
        throw err;
      }
      cb(data);
    });
    
  },
  updateOne: function(tableInput, cols, condition, cb) {
    var qry = "UPDATE " + tableInput;
    var qry = qry + " SET " + objToSql(cols);
    var qry = qry + " WHERE " + condition;
    // console.log(qry);

    connection.query(qry, function(err,data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  }
};

module.exports = orm;