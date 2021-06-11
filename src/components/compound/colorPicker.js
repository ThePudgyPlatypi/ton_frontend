/* eslint-disable newline-after-var */
import React, {useEffect} from 'react';
import colors from '../../styles/_variables.module.scss';

const ColorPicker = () => {
    const colorPickerTitleText = `< change color`;

    function changeColor(e, color) {
        e.preventDefault();
        let elements = document.querySelectorAll(".color-changer");
        let textElements = document.querySelectorAll(".text-color-changer");
        
        elements.forEach((value) => {
            value.style.backgroundColor = color;
        });

        textElements.forEach((value) => {
            value.style.color = color;
        });
    }

    function expandColors(e) {
        e.preventDefault();
        let colorPicker = document.querySelector('.color-picker-container');
        let colorPickerTitle = document.querySelector('.color-picker-title');

        colorPicker.classList.toggle('open');

        if(colorPicker.classList.contains('open')) {
            colorPickerTitle.innerHTML = "x close";
        } else  {
            colorPickerTitle.innerHTML = colorPickerTitleText;
        }
    }
    
    return (
        <div className="color-picker">
            <div className="color-picker-title" onClick={expandColors}>
                {colorPickerTitleText}
            </div>
            <div className="color-picker-container">
                { Object.keys(colors).map((name, index) => {
                    let styles =  {
                        backgroundColor: colors[name]
                    };

                    return (
                        <div key={index} className="color-picker-item" 
                            onClick={(e) => { changeColor(e, colors[name]); } }>
                            <span className="color-picker-color" style={styles}></span>
                            <span className="color-picker-name">
                                {name}
                            </span>
                        </div>
                    );
                    }              
                )}
             </div>
        </div>
    );
};

export default ColorPicker;