import React, { useState, useRef, useEffect } from "react";
import { inputContainer, dropdownList } from "../../styles/componentStyle";

//*** value - value of selected item
//*** data - list of option
//*** onChange - callback function to store value

export const Dropdown = (props) => {

    const { placeholder, value, data, onChange } = props

    const [showItem, setShowItem] = useState(false)
    const newRef = useRef(null);
    
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    const handleClick = () => {
        setShowItem(!showItem);
    };
  
    const handleOutsideClick = (e) => {
        if (newRef.current && !newRef.current.contains(e.target)) {
            setShowItem(false);
        }
    };

    return (
        <div ref={newRef}>
            <div style={inputContainer} onClick={handleClick}>
                { value?.type || placeholder}
            </div>
            {
                showItem &&
                data && data.map((obj) => {
                    return (
                        <div 
                            key={obj.code}
                            style={dropdownList}
                            onClick={() => {
                                onChange(obj);
                                handleClick();
                            }}
                        >
                            {obj.type}
                        </div>
                    )
                })
            }
        </div>
    )
}