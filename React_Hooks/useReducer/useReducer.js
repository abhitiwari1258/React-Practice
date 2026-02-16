const { useReducer, useState } = React;

function counterReducer(state, action) {
    console.log(state)
    console.log(action)
    console.log(action.type);

    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        case "default":
            throw new Error("Unknown action type");
    }
}

function App(){
    const [state,dispatch] = useReducer(counterReducer,{count: 0})
    return (
        <div style={{ padding: "20px" }}>
            <h2>useReducer demo</h2>
            <p>Count {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

            <button onClick={() => dispatch({ type: "default" })}>Default</button>
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />)