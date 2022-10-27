import React from "react";
import { useState } from "react";

const ZipSearch = () => {

    const [zipCode, setZip] = useState(30338)


    const onSubmit = (e) => {
        alert(`the zipcode you entered is ${zipCode}`);
        e.preventDefault();
    }

    return(
        <>
        <form>
        <fieldset>
            <legend>Your Details</legend>
            <label>Please enter your name
              <input type="text" value={zipCode}
                onChange={e => setZip(e.target.value)} />
            </label>
            
          </fieldset>
          <button onClick={e => onSubmit(e)}>Submit</button>
        </form>
        </>
    )

}

export default ZipSearch