const { useRef,useEffect,useState } = React
function App() {
    const [count,setCount] = useState(0)

    // holding prvious value of count
    const inputRef = useRef()
    
    useEffect(()=>{
        console.log(inputRef.count);
        console.log(count);
        inputRef.current = count;
    },[ count ])


    // DOM manipulation

    const inputElement = useRef()

    function focusInput(){
        console.log(inputElement.current);
        
        inputElement.current.focus()
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>UseRef Demo</h1>
            <h2>Current Count: {count}</h2>
            <h2>Previous Count: {inputRef.current ?? "N/A"}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>

            <hr />

            <input ref={inputElement} placeholder="enter text"/>
            <button onClick={focusInput}>Click</button>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<App />)