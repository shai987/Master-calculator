import express from 'express';
import router from './src/routes/route.js';
import mongoose from 'mongoose';
import { log_schema } from './src/models/log.js';
import { } from 'dotenv/config';
// module for styling the terminal text 
import chalk from 'chalk';

const log_model = mongoose.model('log', log_schema);

const uri = process.env.MONGODB_URI_LOCAL;
const port = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static('./src/public'));

app.set('view engine', 'pug');

// The next function will document user's loggings
const my_log = async (req, res, next) => {
        const method = req.method;
        const path = req.path;
        const body = req.body;
        const log = new log_model({ method, path, body });
        await log.save(); // Fill the logDB
        next();
}

// my_log function will be relevent for every path
app.use(my_log);

// router mounts on '/tasks' path
app.use('/tasks', router);


app.use((req, res) => {
        res.status(404).render('404');
});

const connection = async () => {
        await mongoose.connect(uri);
        app.listen(port, () => console.log(chalk.green.bgGreen.bold(`Listen on port ${port}`)));
}

connection().catch(err => console.log(err.message));