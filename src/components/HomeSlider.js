import React, { useState } from 'react';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const HomeSlider = ({slides, color}) => {
    //initiate use of links from button clicks
    const history = useHistory();

    //two functions that handle our two buttons
    const buyButton = (num) => {
        let type = [
            'freego',
            'razor',
            'nanrobot'
        ];
        history.push(`/buy/${type[num]}`);

    }

    const rentButton = num => {
        let type = [
            'freego',
            'razor',
            'nanrobot'
        ];
        history.push(`/rent/${type[num]}`);

    }

    //Handles Slider functionality
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        document.getElementById('backing').classList.remove('dialate');
        setCurrent(current === length -1 ? 0 : current + 1);
        document.getElementById('backing').classList.add('dialate');
        setTimeout(() => { document.getElementById('backing').classList.remove('dialate'); }, 700)
    };

    const prevSlide = () => {
        document.getElementById('backing').classList.remove('dialate');
        setCurrent(current === 0 ? length - 1 : current - 1);
        document.getElementById('backing').classList.add('dialate');
        setTimeout(() => { document.getElementById('backing').classList.remove('dialate'); }, 700)
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return(
        <section className="slider">
            <FaArrowUp className="arrows up" onClick={prevSlide}/>
                <div id="backing" class="backing" style={{backgroundColor: color}}>
                    {slides.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                <div className="whole">
                                    <div>
                                        <img src={slide.image} key={slide.index} alt="scooter" className="image-home" />
                                    </div>
                                    <div className="right">
                                        <div className="logo">
                                            <img src={slide.logo} alt="logo" />
                                        </div>
                                        <div className="contain-mb">                               
                                            <button className="mb rent" onClick={() => rentButton(index)}>Rent</button>
                                            <button className="mb buy" onClick={() => buyButton(index)}>Buy</button>
                                        </div>
                                    </div>
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

export default HomeSlider;