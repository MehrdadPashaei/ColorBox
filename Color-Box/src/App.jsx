import {useState} from 'react'
import './style.css'
import Select from "./Select.jsx";
import Box from "./Box.jsx";

function App() {
    const [color, setColor] = useState("#f06d06")

    const handleColorChange = (e) => {
        setColor(e.target.value)
    };
    return (
        <div className="colorBox">
            <Select onColorChange = {handleColorChange}/>
            <Box color = {color}/>
        </div>
    )
}

export default App
