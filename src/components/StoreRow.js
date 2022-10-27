import React from "react";


const StoreRow = ({item}) => {
    return(
        <>
            <tr>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.zipCode}</td>
            </tr>
        </>
    )
}


export default StoreRow