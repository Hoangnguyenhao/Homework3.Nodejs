const db = require('../db');

exports.addStudent = (req, res) => {
  const { name, email, age, address } = req.body;
  const sql = 'INSERT INTO students (name, email, age, address) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, age, address], (err) => {
    if (err) return res.status(500).json({ error: 'Loi server' });
    res.json({ message: 'Them thanh cong' });
  });
};
