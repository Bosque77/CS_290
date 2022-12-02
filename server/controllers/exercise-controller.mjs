
import express from 'express';
import * as exercise from '../models/exercise-model.mjs'

const exerciseRouter = express.Router()


// CREATE controller ******************************************
exerciseRouter.post ('/', (req,res) => { 
    exercise.createExercise(
        req.body.title, 
        req.body.year, 
        req.body.language
        )
        .then(movie => {
            res.status(201).json(movie);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Creation of a document failed due to invalid syntax.' });
        });
});


// RETRIEVE controller ****************************************************
// GET exercise by ID
exerciseRouter.get('/:_id', (req, res) => {
    const movieId = req.params._id;
    exercise.findExerciseById(movieId)
        .then(movie => { 
            if (movie !== null) {
                res.json(movie);
            } else {
                res.status(404).json({ Error: 'Document not found' });
            }         
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request to retrieve document failed' });
        });

});


// GET exercise filtered by year or language
exerciseRouter.get('/', (req, res) => {
    let filter = {};
    // filter by year
    if(req.query.year !== undefined){
        filter = { year: req.query.year };
    }
    // filter by language
    if(req.query.language !== undefined){
        filter = { language: req.query.language };
    }
    exercise.findExercises(filter, '', 0)
        .then(exercise => {
            res.send(exercise);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request to retrieve documents failed' });
        });

});

// DELETE Controller ******************************
exerciseRouter.delete('/:_id', (req, res) => {
    exercise.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Document not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request to delete a document failed' });
        });
});

// UPDATE controller ************************************
exerciseRouter.put('/:_id', (req, res) => {
    exercise.replaceExercise(
        req.params._id, 
        req.body.title, 
        req.body.year, 
        req.body.language
    )

    .then(numUpdated => {
        if (numUpdated === 1) {
            res.json({ 
                _id: req.params._id, 
                title: req.body.title, 
                year: req.body.year, 
                language: req.body.language 
            })
        } else {
            res.status(404).json({ Error: 'Document not found' });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(400).json({ Error: 'Request to update a document failed' });
    });
});

export default exerciseRouter