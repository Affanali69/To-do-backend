const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

const todoRouter = require('../routes/todo');
app.use('/api/todos', todoRouter);

app.get('/', (req, res) => {
    res.send('Todo App API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});