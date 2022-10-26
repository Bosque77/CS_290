import React from "react";


const GroceryRow = ({item}) => {

    return(
        <>
            <tr>
                <td>{item.name}</td>
                <td className="numeric-order-data">{item.price}</td>
                <td className="numeric-order-data"> 5 </td>
            </tr>
        </>
    )

}

export default GroceryRow