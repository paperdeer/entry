import React, { useEffect, useRef, useState } from 'react';
import './Slide.scss';

function Slide(props) {
    const {memberArr} = props;
    const [margin,setMargin] = useState(0);
    const [count ,setCount] = useState(0);
    const arrLength = memberArr.length;
    const moveBtnToNext = () => {
        if(count > arrLength-5) {
            setMargin(0);
            setCount(0)
        }
        else {
            setMargin(margin + 24.68);
            setCount(count+1);
        }
    }
    console.log(margin);
    const moveBtnToPrev = () => {
        if(count <= 0){
            setMargin(246.80000000000004);
            setCount(arrLength-5);
        } else {
            setMargin(margin - 24.68);
            setCount(count-1);
        }
    }
    console.log(margin);
    // useEffect(()=>(
    //     setInterval(moveBtnToNext,5000)
    // ),[count])
  return (
      <div>
        <div className="Slide">
            <div className="slideContainer" style={{
                marginLeft:`-${margin}vw`
            }}>
                <button className="moveBtnToPrev" onClick={moveBtnToPrev}>{'<<'}</button>
                <button className="moveBtnToNext" onClick={moveBtnToNext}> {'>>'} </button>
                {memberArr.map((slide) =>
                <div className="eachSlideContainer">
                    <div className="eachProfile">
                        <div className="imgInSlide" ><img src={slide.img} alt="img" /></div>
                        <div className="nameInSlide"><p>{slide.name}</p></div>
                        <div className="developTypeInSlide"><p>{slide.develop}</p></div>
                        <div className="gradeInSlide"><p>{slide.grade}학년</p></div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
  );
}

export default Slide;