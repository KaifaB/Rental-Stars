import React from 'react';
import { useHistory } from 'react-router-dom';


const Buy = (props) => {
    const history = useHistory();
    let itemCart = [];

    const buyThis = () => {
        let cart = { 'item': props.info.title, 
            'price': props.info.price, 
            'quantity' : 1,
            'type' : props.info.type,
            'id' : props.info.id,
            'own' : "buy"
        }
        //Get array of cart from localstorage
        if (JSON.parse(localStorage.getItem('cart')) !== null){
            itemCart = JSON.parse(localStorage.getItem('cart'));
        }
        let exists = 0;
        if (itemCart !== null ){
            for (let i = 0; i < itemCart.length; i++) {
                if (cart.id === itemCart[i].id){
                    exists += 1;
                }
            }
        }

        if (exists === 0){
            itemCart.push(cart);
        }

        localStorage.setItem('cart', JSON.stringify(itemCart));

        history.push('/cart');
    };

    return(
        <div className="flex">
            <div>
                {props.pictures}
            </div>
            <div className="description">
                <h1>{props.info.title}</h1>
                <p>{props.info.description}</p>
                <div className="praction">
                    <h2>Only ${props.info.price}</h2>
                </div>
                <button onClick={buyThis} className="buy" id="buy-now">Buy Now</button>
            </div>
        </div>
    )
}

export default Buy;