import React from "react";
import ReactDOM from "react-dom";

// const element = <h1>Hello World</h1>;

// React.createElement
// ReactDOM.render(element, document.getElementById('root'));

const address = {
    street: 'my street',
    city: 'my city',
    country: 'my country'
}

const { city } = address;
console.log(city);