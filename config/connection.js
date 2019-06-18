var mysql = require("mysql");

var connection;
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);\
if ((process.env.PORT || 8080) != 8080) {
  connection = {
    host: "op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "uxcfljx1hsoovz9a",
    password: "j413rbj4z782az40",
    database: "ba3fb2erltrvc4ec"
  }
} else {
  connection =mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "user",
  password: "MockTurb0Stu#ing",
  database: "burgers_db"
  });
};
connection.connect(function(err){
  if (err) {
    console.log("error connecting: "+err.stack);
    return;    
  }
  console.log("connected as id: "+connection.threadId);  
});
module.exports = connection;
