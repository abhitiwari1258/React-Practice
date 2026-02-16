const {useState, useContext,createContext} = React;

const ThemeContext = createContext("light");

function ThemeBox(){
    const theme = useContext(ThemeContext);

    const style = {
        width: "200px",
        height: "100px",
        margin: "20px",
        textAlign: "center",
        lineHeight: "100px",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",   
        color: theme === "light" ? "#000" : "#fff",  
        border: "1px solid #000",
    }
    return <div style={style}> {theme} : Current theme</div>
}

const Theme = () => {
    const [theme, setTheme] = useState("light");

    function toggleTheme(){
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

  return (
    <div>
        <ThemeContext.Provider value={theme}>
            <button onClick={toggleTheme}>Toggle</button>
            <ThemeBox />
             <ThemeBox />
        </ThemeContext.Provider>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Theme />
  </React.StrictMode>
);