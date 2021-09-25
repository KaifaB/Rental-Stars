import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

const Header = props => {
    const history = useHistory();
    const goHome = () => {
        history.push('/');
    }
    const seeCart = () => {
        history.push('/cart');
    }
    const menu = () => {
        document.getElementById('nav-icon1').classList.toggle('open');
        document.getElementById('menu').classList.toggle("appear");
    }
    return(
        <div className="header">
            <h1 onClick={goHome}>Rental Stars</h1>
            <div className="top-nav">
                <FaShoppingCart className="cart-icon" onClick={seeCart}/>
                <div id="nav-icon1" onClick={menu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header;