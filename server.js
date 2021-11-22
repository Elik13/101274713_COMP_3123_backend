const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./src/routes/EmployeeRoutes');

const DB_URL = "mongodb://mongoadmin:secret@localhost:27017/local-mongodb?authSource=admin"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/v1/', router);

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/api/v1/', (req, res) => {
    res.send("Employee management system");
});

app.use(express.json());


app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});