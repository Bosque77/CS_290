import React from "react";
import GroceryTable from "../components/GroceryTable";
import items from "../data/items";

const OrderPage = () => {

    return(
        <>
        <article>
            <h2>Order Page</h2>
            <p>
                Place your orders here. Let us know if there is anything we do not have
            </p>
            <GroceryTable items={items }/>
        </article>
        </>
    )

}


export default OrderPage