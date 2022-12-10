import express from "express";
import * as exercise from "../models/exercise-model.mjs";

const exerciseRouter = express.Router();

// CREATE controller ******************************************
exerciseRouter.post("/", (req, res) => {
  if (req.body.reps < 0 || req.body.weight < 0) {
    res
      .status(400)
      .json({
        Error:
          "Request to update a document failed. Make sure your input is valid",
      });
  } else {
    exercise
      .createExercise(
        req.body.name,
        req.body.reps,
        req.body.weight,
        req.body.unit,
        req.body.date
      )
      .then((exercise) => {
        res.status(201).json(exercise);
      })
      .catch((error) => {
        console.log(error);
        res
          .status(400)
          .json({
            error: `Creation of a document failed due to invalid syntax. ${error}`,
          });
      });
  }
});

// GET all exercises
exerciseRouter.get("/", (req, res) => {
  exercise
    .findExercises()
    .then((exercises) => {
      res.status(200).json(exercises);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "Request to retrieve document failed" });
    });
});

// RETRIEVE controller ****************************************************
// GET exercise by ID
exerciseRouter.get("/:_id", (req, res) => {
  const exerciseId = req.params._id;
  exercise
    .findExerciseById(exerciseId)
    .then((exercise) => {
      if (exercise !== null) {
        res.status(200).json(exercise);
      } else {
        res.status(404).json({ Error: "Document not found" });
      }
    })
    .catch((error) => {
      res.status(400).json({ Error: "Request to retrieve document failed" });
    });
});

// UPDATE controller ************************************
exerciseRouter.put("/:_id", (req, res) => {
  if (req.body.reps < 0 || req.body.weight < 0) {
    res
      .status(400)
      .json({
        Error:
          "Request to update a document failed. Make sure your input is valid",
      });
  } else {
    exercise
      .replaceExercise(
        req.params._id,
        req.body.name,
        req.body.reps,
        req.body.weight,
        req.body.unit,
        req.body.date
      )
      .then((numUpdated) => {
        console.log("it was replaced");
        console.log(numUpdated);
        if (numUpdated === 1) {
          res.status(200).json({
            _id: req.params._id,
            name: req.body.name,
            reps: req.body.reps,
            weight: req.body.weight,
            unit: req.body.unit,
            date: req.body.date,
          });
        } else {
          res.status(404).json({ Error: "Document not found" });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(400).json({ Error: "Request to update a document failed" });
      });
  }
});

// DELETE Controller ******************************
exerciseRouter.delete("/:_id", (req, res) => {
  exercise
    .deleteById(req.params._id)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        res.status(204).send();
      } else {
        res.status(404).json({ Error: "Document not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.send({ error: "Request to delete a document failed" });
    });
});

export default exerciseRouter;
