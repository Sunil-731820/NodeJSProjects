const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: 'root', // Your MySQL password
    database: 'express_crud', // The database we created earlier
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.log('Error connecting to database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

// Create - Add a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    
    db.execute(query, [name, email], (err, result) => {
        if (err) {
            return res.status(500).send('Error inserting user');
        }
        res.status(201).send({ id: result.insertId, name, email });
    });
});

// Read - Get all users
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    
    db.execute(query, (err, results) => {
        if (err) {
            return res.status(500).send('Error retrieving users');
        }
        res.status(200).json(results);
    });
});

// Read - Get a single user by ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    
    db.execute(query, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error retrieving user');
        }
        if (results.length === 0) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(results[0]);
    });
});

// Update - Modify an existing user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    
    db.execute(query, [name, email, id], (err, result) => {
        if (err) {
            return res.status(500).send('Error updating user');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('User not found');
        }
        res.status(200).send({ id, name, email });
    });
});

// Delete - Remove a user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    
    db.execute(query, [id], (err, result) => {
        if (err) {
            return res.status(500).send('Error deleting user');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('User deleted');
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
