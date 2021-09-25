import React, { useState } from 'react';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';


const Slider = ({props, slides, color}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return(
        <section className="slider">
            <FaArrowUp className="arrows up" onClick={prevSlide}/>
                <div class="backing" style={{backgroundColor: color}}>
                    {slides.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                <div>
                                    <img src={slide.image} key={slide.index} alt="scooter" className="image-home" />
                                </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            <FaArrowDown className="arrows down" onClick={nextSlide} />
        </section>
    )
}

export default Slider;