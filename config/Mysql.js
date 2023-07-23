// RETUNS MYSQL DATABASE

const mysql = require('mysql'),
  { error } = require('handy-log'),
  { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env


var db = mysql.createPool({
  connectonLimit : 100,
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  charset: 'utf8mb4',
});

// CREATES A DB CONNECTION
// const db = mysql.createConnection({
//   host: MYSQL_HOST,
//   user: MYSQL_USER,
//   password: MYSQL_PASSWORD,
//   database: MYSQL_DATABASE,
//   charset: 'utf8mb4',
// })

//console.log("connection param : "+JSON.parse(db));
// CONNECTS DB
// Attempt to catch disconnects 
db.on('connection', function (connection) {
  console.log('DB Connection established');

  connection.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  connection.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err);
  });
// db.connect(err => {
//   console.log("connection init");
//   if (err) {
//     error("db connection error : "+err.message)
//   }
//   console.log("connection success");
 })

module.exports = db;
