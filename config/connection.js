var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "user",
  password: "MockTurb0Stu#ing",
  database: "burgers_db"
});

connection.connect(function(err){
  if (err) {
    console.log("error connecting: "+err.stack);
    return;    
  }
  console.log("connected as id: "+connection.threadId);  
});
module.exports = connection;