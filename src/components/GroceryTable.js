import React from "react";
import GroceryRow from "./GroceryRow";

const GroceryTable = ({ items }) => {
  return (
    <>
      <table className = 'center-middle'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <GroceryRow item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GroceryTable;
