// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001; // Choose any port you want

app.use(bodyParser.json());

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Route to add a doctor
app.post('/api/addDoctor', (req, res) => {
  const { doctorName, specialization, qualification, contact } = req.body;

  // Call the stored procedure to insert doctor details
  const query = 'CALL InsertDoctor(?, ?, ?, ?)';
  connection.query(query, [doctorName, specialization, qualification, contact], (err, result) => {
    if (err) {
      console.error('Error adding doctor:', err);
      res.status(500).send('Error adding doctor');
      return;
    }
    console.log('Doctor added successfully');
    res.status(200).send('Doctor added successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
