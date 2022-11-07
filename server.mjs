import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT
const app = express();

let num_of_visits = 0

app.use(express.static('public'));
// Note: Don't add or change anything above this line.


/* Add your code below this line. It will:
   Define variables for the middleware counting.
   Count the calls.
   Get the random person data.
   Respond using an error handler middleware function when it doesn't work.
*/




app.use('/random-person', (req,res,next) => {
    num_of_visits += 1
    if ((num_of_visits % 10) === 0){
        console.log(`Total requests for random person: ${num_of_visits}`)
    }
    next()
})

app.get('/random-person', asyncHandler( async (req,res) => {
    const response = await fetch('https://randomuser.me/api/')
    
    if(response.status === 200){
        const content = await response.json()
        const first_name = content['results'][0]['name']['first']
        const last_name = content['results'][0]['name']['last']
        const phone_number = content['results'][0]['phone']
        const email = content['results'][0]['email']

        const data = {
            first_name,
            last_name,
            phone_number,
            email
        }

        res.json(data)
    }
}))



const errorHandler = (error,req,res,next) => {
    console.log(`Unhandled error ${error}. URL = ${req.originalUrl}, method = ${req.method}`);
    res.status(500).send(error.message);
}

app.use(errorHandler)



// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});