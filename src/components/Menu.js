import React from 'react';
import { useHistory } from 'react-router-dom';


const Menu = () => {
    const history = useHistory();

    const toSpecs = () => {
        history.push('/specs');
    }
    const toAbout = () => {
        history.push('/about');
    }
    const toFAQs = () => {
        history.push('/FAQs');
    }
    const close = () =>{
        document.getElementById('nav-icon1').classList.toggle('open');
        document.getElementById('menu').classList.toggle("appear");
    }

    return(
        <div id="menu" onClick={close}>
            <ul>
                <li onClick={toSpecs}>SPECS</li>
                <li onClick={toAbout}>ABOUT</li>
                <li onClick={toFAQs}>FAQs</li>
            </ul>

        </div>
    )
}

export default Menu;