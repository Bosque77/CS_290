import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import exerciseRouter from './controllers/exercise-controller.mjs';


// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,

    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Exercises collection using Mongoose.');
    }
});

const PORT = process.env.PORT;
const app = express();
app.use(express.json());



app.use('/exercise', exerciseRouter)

app.get('/', (req,res) => {
    res.send('you made it. now time for a treat')
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});