import 'dotenv/config';
import express from 'express';
import exerciseRouter from './controllers/exercise-controller.mjs';


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