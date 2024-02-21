const mongoose = require('mongoose');
require('dotenv').config({ path: '../env' });

const dbURI = process.env.DB_URI;
mongoose.connect(dbURI, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Successfully Connected to MongoDB Atlas');
}).catch((err) => {
    console.log('Error: ', err.message);
});