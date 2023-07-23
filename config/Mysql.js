// RETUNS MYSQL DATABASE

const mysql = require('mysql'),
  { error } = require('handy-log'),
  { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

// CREATES A DB CONNECTION
const db = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  charset: 'utf8mb4',
})

console.log("connection param : "+db)
// CONNECTS DB
db.connect(err => {
  console.log("connection init");
  if (err) {
    error("db connection error : "+err.message)
  }
  console.log("connection success");
})

module.exports = db
