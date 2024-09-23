import React, { ChangeEvent, useState, useEffect } from 'react';

import style from './CustomInput.module.css';

export default function CustomInput() {

  const [InputValue, setInputValue] = useState(50);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(event.target.value));
  };

  useEffect(() => {
    const fill = document.getElementById("slider-fill");
    const input = document.getElementById("slider-input")!;
    const tag = document.getElementById("tag");

    const value: string = input.getAttribute('value')!;
    const valueFloat: number = parseFloat(value)
    
    const max: string = input.getAttribute('max')!;
    const maxFloat: number = parseFloat(max)

    const finalValue: number = (valueFloat / maxFloat) * 100;

    if (fill && tag) {
      fill.style.transform = `scaleX(${finalValue}%)`;
      tag.style.left = `${finalValue}%`; 
      tag.style.transform = `translate(-${finalValue}%, 0%)`;
    }
    
  }, [InputValue]); 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      <div className="flex flex-col gap-8 row-start-2 items-center">
        
        <h1 className={style.title}>Custom Slider</h1>
        
        <div className={style.slider} id="slider">
          <div className={style.tag} id="tag" style={{ '--content': `"${InputValue}"` } as React.CSSProperties}></div>
          <input type="range" className={style.sliderInput} id="slider-input" step="1" value={InputValue} onChange={handleInputChange} max={100} />
          <div className={style.sliderFill} id="slider-fill"></div>
        </div>

      </div>
      
    </div>
  );
}