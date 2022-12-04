import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExercise }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [exercises, setExercises] = useState([]);

    // RETRIEVE the list of movies
    const loadExercises = async () => {
        const response = await fetch('/exercise');
        const exercises = await response.json();
        setExercises(exercises);
    } 
    

    // UPDATE a movie
    const onEditMovie = async exercise => {
        setExercise(exercise);
        history.push("/edit-exercise");
    }


    // DELETE a movie  
    const onDeleteExercise = async _id => {
        const response = await fetch(`/exercise/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercise');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD the movies
    useEffect(() => {
        loadExercises();
    }, []);

    // DISPLAY the movies
    return (
        <>
            <article>
                <h2>List of Movies</h2>
                <p>Paragraph about this page.</p>
                <ExerciseList 
                    exercises={exercises} 
                    onEdit={onEditMovie} 
                    onDelete={onDeleteExercise} 
                />
            </article>
        </>
    );
}

export default HomePage;