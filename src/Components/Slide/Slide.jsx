import React, { useEffect, useCallback, useState } from 'react';
import './Slide.scss';

let intervalstatus = null;

function Slide(props) {
    const {memberArr} = props;
    const [margin,setMargin] = useState(0);
    const [count ,setCount] = useState(0);
    const arrLength = memberArr.length;
    const moveMargin = 24.68;
    const moveBtnToNext = useCallback(() => {
        if(count > arrLength-5) {
            setMargin(0);
            setCount(0)
        } else {
            setMargin(margin + moveMargin);
            setCount(count + 1);
        }
    }, [setMargin, setCount, count])

    const moveBtnToPrev = useCallback(() => {
        if(count <= 0){
            setMargin(moveMargin*(arrLength-4));
            setCount(arrLength-5);
        } else {
            setMargin(margin - moveMargin);
            setCount(count-1);
        }
    }, [setCount, setMargin, count]);

    useEffect(() => {
        if (intervalstatus) {
            clearInterval(intervalstatus);
        }

        intervalstatus = setInterval(moveBtnToNext, 2000);
    }, [moveBtnToNext]);

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