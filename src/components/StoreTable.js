import React from "react";
import StoreRow from "./StoreRow";
import stores from "../data/stores";

const StoreTable = () => {
  return (
    <>
      <table className="center-middle">
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>

            {stores.map( item => <StoreRow item={item} key={item.id} /> )}

        </tbody>
      </table>
    </>
  );
};

export default StoreTable;
