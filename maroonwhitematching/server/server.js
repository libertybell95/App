const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all students data from the database
app.get('/', (req, res) => {
    db.select('*')
        .from('student')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch student by studentId from the database
app.get('/:student_id', (req, res) => {
    const studentId = req.params.movieId;
    db.select('*')
        .from('student')
        .where('id', '=', studentId)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// POST: Create movies and add them to the database
app.post('/uploadFile', (req, res) => {
    const { name, major } = req.body;
    db('student')
        .insert({
            name: name,
            major: major,
        })
        .then(() => {
            console.log('Student Added');
            return res.json({ msg: 'Student Added' });
        })
        .catch((err) => {
            console.log(err);
        });
});

// DELETE: Delete movie by movieId from the database
app.delete('/delete-student', (req, res) => {
    const studentId = req.body;
    const studentIdToDelete = Number(studentId.studentID);
    console.log(studentIdToDelete);
    db('student')
        .where('student_id', '=', studentIdToDelete)
        .del()
        .then(() => {
            console.log('student Deleted');
            return res.json({ msg: 'Student Deleted' });
        })
        .catch((err) => {
            console.log(err);
        });
});

// PUT: Update movie by movieId from the database
app.put('/update-student', (req, res) => {
    db('student')
        .where('student_id', '=', 1)
        .update({ name: 'thien' })
        .then(() => {
            console.log('Student Updated');
            return res.json({ msg: 'Student Updated' });
        })
        .catch((err) => {
            console.log(err);
        });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));
