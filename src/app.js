console.log("this should work");




let count = 0;


const addOne = () => {
    count++;
    console.log(count)
    renderCounter();
};

const minusOne = () => {
    count--;
    console.log(count)
    renderCounter();
};


const reset = () => {
    count = 0;
    console.log(count)
    renderCounter();
};

const appRoot = document.getElementById('appRoot');


const renderCounter = () => {
    
    const template = (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={addOne}>Add One</button>
            <button onClick={minusOne}>Subtract One</button>
            <button onClick={reset}>Reset All</button>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
    
 };



 renderCounter();
    
