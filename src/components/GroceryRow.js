import React from "react";
import SelectQuantity from "./SelectQuantity";


const GroceryRow = ({item}) => {

    return(
        <>
            <tr>
                <td>{item.name}</td>
                <td className="numeric-order-data">{item.price}</td>
                <td className="numeric-order-data"><SelectQuantity /> </td>
            </tr>
        </>
    )

}

export default GroceryRow