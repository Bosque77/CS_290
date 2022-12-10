import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState('lbs');
  const [date, setDate] = useState( '');

useEffect(()=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy+'-'+mm + '-' + dd ;
    setDate(today)
},[])


  const history = useHistory();

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    console.log(newExercise)
    const response = await fetch("/exercise", {
      method: "post",
      body: JSON.stringify(newExercise),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the movie!");
    } else {
      console.log(response)
      alert(`Failed to add movie, status code = ${response.status} `);
    }
    history.push("/");
  };

  return (
    <>
      <article>
        <h2>Add to the collection</h2>
        <p>Add your exercises here! If you think of any new good workouts enter it here to view later and track your progress.
          </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>Which exercise are you adding?</legend>
            <div>
              <label for="name">Exercise Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
              />

              <label for="reps">Number of Reps</label>
              <input
                type="number"
                value={reps}
                placeholder="Number of Reps"
                min="0"
                max="1000"
                onChange={(e) => setReps(e.target.value)}
                id="reps"
              />

              <label for="weight">Weight</label>
              <input
                type="number"
                value={weight}
                placeholder="Weight"
                onChange={(e) => setWeight(e.target.value)}
                id="weight"
              />

              <label for="unit">Unit</label>
              <select
                type="text"
                id="unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
                <option value="miles">miles</option>
              </select>

              <label for="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange = {(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <label for="submit">
                <button type="submit" onClick={addExercise} id="submit">
                  Add
                </button>{" "}
                to the collection
              </label>
            </div>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddExercisePage;
