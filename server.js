// Add your name here

// Stay in strict mode.
'use strict';


// Define the local port 
const PORT = 3000;

// Require the stocks.js data file.
// The variable 'stocks', below, has the same value as the object 'stocks' in the file `stocks.js`
const stocks = require('./stocks.js').stocks;

// Require the Express package and call its function.
const express = require("express");
const app = express();

// Parse the data in the HTTP body with UTF-8.
app.use(express.urlencoded({
    extended: true
}));

// Define the directory "public' that will render HTML on localhost.
app.use(express.static('public'));


// ----------- Code for the Stock Order -------------------
/*  Define a helper function 'findStockBySymbol' 
    that returns a stock 
    if, when compared to the user's selected option value, 
    it matches data provided in the stocks.js object.
*/

const findStockBySymbol = (symbol) =>{
    const stock_info = stocks.find( stock_obj => stock_obj.symbol === symbol)
    return stock_info
}



/*  Post the app user's request for the company symbol and amount, 
    along with a response,
    to a virtual address that matches the form's action address. 
    Pass in the HTML body's select option value to the helper function 
        to create a new variable to be used in the response. 
    Pass in the HTML body's input value 
        to create a new variable that can be used in the response.
*/
app.get('/order-stock',(req,res)=>{
    const stock_symbol = req.query.stock_symbol
    const quantity = req.query.amount
    const stock_info = findStockBySymbol(stock_symbol)
    // const stock_info = findStockBySymbol(stock_symbol)
    const response_string = `You placed an order to buy ${quantity} stocks of ${stock_info.company}. The price of one stock is ${stock_info.price} and the total price for this order is ${parseFloat(stock_info.price*quantity).toFixed(2)}`
    res.send(response_string)
})


// ----------- Code for the Stock Search -------------------
/*  Define a helper function 'findStockByPrice' 
    that initializes a variable then 
    loops through the stock data to compare the user's requested choice
    with the highest- or lowest-priced stock,
    then returns that choice.
*/

const findStockByPrice = ( search_criteria) => {

    const lower_reducer = (previous_stock, current_stock) => {
        if (previous_stock.price < current_stock.price){
            return previous_stock
        }else{
            return current_stock
        }
    }

    const higher_reducer = (previous_stock, current_stock) => {
        if (previous_stock.price > current_stock.price){
            return previous_stock
        }else{
            return current_stock
        }
    }

    switch(search_criteria){
        case 'lowest':
            return stocks.reduce(lower_reducer)
        case 'highest':
            return stocks.reduce(higher_reducer)
        default:
            console.log('search criteria input not accepted')
    }


}



/*  Post the app user's request for the search result,
    along with a response,
    to a virtual address that matches the HTML body's form action address. 
    Pass in the HTML body's input radio value to the helper function 
        to create a new variable to be used in the response. 
*/
app.get("/search-stocks", (req,res) => {
    const search_criteria = req.query.search
    const stock = findStockByPrice(search_criteria)
    res.send(stock)
})




// Listen for data requests and responses using the port provided above.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});