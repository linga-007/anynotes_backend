import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db/dbconfig.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import notesRoutes from './routes/notesRoutes.js';
import session from 'express-session';
import { auth } from './middlewares/auth.js';

const app = express();

app.use(session({
    secret: "TOPSECRET",
    resave: false,
    saveUninitialized: true,
    cookie : {
        maxAge: 3600000, 
        httpOnly: true,
        secure: false, 
        sameSite: true 
    }
    
}));

auth(app);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

dotenv.config('./env');

app.use('/user', userRoutes);
app.use('/notes', notesRoutes);

app.get('/test', (req, res) => {
    res.send('Hello from server!');
});

app.get('/notes', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Notes Page: You are logged in!');
    } else {
        res.redirect('/login');
    }
});

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
