const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'studentdb'
});

db.connect(err => {
  if (err) throw err;
  console.log('Da ket noi MySQL');
});

module.exports = db;
