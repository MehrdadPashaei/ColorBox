import React from 'react';
import "./style.css"

const Select = ({onColorChange}) => {
    const handleColorChange = (event) =>{
        onColorChange(event.target.value)
    }
    return (
        <div>
            <h4> Select Color!</h4>
        <select className="select"  onChange={handleColorChange}>
            <option value="#f06d06"> FogDog :) </option>
            <option value="Red"> Red </option>
            <option value="Yellow"> Yellow </option>
            <option value="Blue"> Blue </option>
            <option value="Green"> Green </option>
        </select>
        </div>
    );
}


export default Select;