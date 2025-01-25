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


// Adding the New Features for Search Users by Name 

// Search - Find users by name (Partial match)
app.get('/users/search', (req, res) => {
    const { name } = req.query; // Query parameter for name

    if (!name) {
        return res.status(400).send('Name query parameter is required');
    }

    const query = 'SELECT * FROM users WHERE name LIKE ?';
    const searchTerm = `%${name}%`; // Add wildcard characters for partial match

    db.execute(query, [searchTerm], (err, results) => {
        if (err) {
            return res.status(500).send('Error searching for users');
        }
        res.status(200).json(results);
    });
});


// Adding the New Features here Count the Number of Users

// Count - Get the number of users
app.get('/users/count', (req, res) => {
    const query = 'SELECT COUNT(*) AS count FROM users';
    
    db.execute(query, (err, results) => {
        if (err) {
            return res.status(500).send('Error counting users from Database ');
        }
        res.status(200).json({ count: results[0].count });
    });
});

// Adding the New Features of Get Users with Pagination 
// Get users with pagination
app.get('/users/paginate', (req, res) => {
    const { page = 1, limit = 10 } = req.query; // Default to page 1 and 10 items per page

    const offset = (page - 1) * limit; // Calculate the offset based on the page and limit
    const query = 'SELECT * FROM users LIMIT ? OFFSET ?';

    db.execute(query, [parseInt(limit), offset], (err, results) => {
        if (err) {
            return res.status(500).send('Error retrieving paginated users');
        }
        res.status(200).json(results);
    });
});


// Adding the new Features for Bulk Insert Users 

// Bulk Insert - Add multiple users
app.post('/users/bulk', (req, res) => {
    const users = req.body; // Expecting an array of user objects
    
    if (!Array.isArray(users) || users.length === 0) {
        return res.status(400).send('Please provide an array of users');
    }

    const query = 'INSERT INTO users (name, email) VALUES ?';
    const values = users.map(user => [user.name, user.email]); // Convert array of objects into array of arrays

    db.query(query, [values], (err, result) => {
        if (err) {
            return res.status(500).send('Error inserting bulk users');
        }
        res.status(201).json({ insertedCount: result.affectedRows });
    });
});



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
