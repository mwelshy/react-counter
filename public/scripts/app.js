"use strict";

console.log("this should work");

var count = 0;

var addOne = function addOne() {
    count++;
    console.log(count);
    renderCounter();
};

var minusOne = function minusOne() {
    count--;
    console.log(count);
    renderCounter();
};

var reset = function reset() {
    count = 0;
    console.log(count);
    renderCounter();
};

var appRoot = document.getElementById('appRoot');

var renderCounter = function renderCounter() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Counter"
        ),
        React.createElement(
            "p",
            null,
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "Add One"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "Subtract One"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset All"
        )
    );

    ReactDOM.render(template, appRoot);
};

renderCounter();
