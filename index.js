import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db/dbconfig.js'
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import notesRoutes from './routes/notesRoutes.js'

const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());

   
dotenv.config('./env')

app.use('/user' , userRoutes)
app.use('/notes' , notesRoutes)
const port = process.env.PORT || 5000;

app.get('/test', (req, res) => {
    res.send('Hello from server!');
}
)
connectDB();
app.listen(port , () =>{
    console.log('listening on port ' + port);   
});