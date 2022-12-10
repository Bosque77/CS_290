import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const EditExercisePage = ({ exercise }) => {
  const [name, setName] = useState(exercise.name);
  const [reps, setReps] = useState(exercise.reps);
  const [weight, setWeight] = useState(exercise.weight);
  const [unit, setUnit] = useState(exercise.unit);
  const [date, setDate] = useState(exercise.date.slice(0,10));


  const history = useHistory();

  const editMovie = async () => {
    const response = await fetch(`/exercise/${exercise._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        reps,
        weight,
        unit,
        date,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Successfully edited document!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to update document. Status ${response.status}. ${errMessage.Error}`
      );
    }
    history.push("/");
  };

  return (
    <>
      <article>
        <h2>Edit a exercise in the collection</h2>
        <p>If you need to make any changes to your exercise to it here!</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>Which movie are you adding?</legend>
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
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <label for="submit">
              <button onClick={editMovie} id="submit">
                Save
              </button>{" "}
              updates to the collection
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default EditExercisePage;
