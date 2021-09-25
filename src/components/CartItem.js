import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//Icons
import { IoIosTrash } from "react-icons/io";

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

const CartItem = (props) => {
    //use useHistory
    const history = useHistory();

    //State of quantity
    const [amount, setAmount] = useState(props.quantity)

    //Rerender componenet after updating an items quantity
    useEffect(() => {
        document.getElementsByClassName("update-amount").value = "";
        console.log(props.index);
    }, [amount])

    //import correct image
    let image = '';
    if (props.type === "Freego"){
        image = props.Freego[0].image;
    } else if (props.type === "Razor"){
        image = props.Razor[0].image;
    } else {
        image = props.Nanrobot[0].image;
    }
    //makes modal pop up
    const hideCart = () => {
        let x = document.querySelector('.cart');
        x.classList.remove('appear-block');
        let y = document.querySelector('.modal');
        y.classList.add('appear-flex');

        localStorage.setItem('num', props.index);
    }
    //edit button on rental item
    const edit = () => {
        //1. get array of cart from localstorage
        const itemCart = JSON.parse(localStorage.getItem('cart'));
        //2. get rid of new 
        itemCart.splice(props.index, 1)
        //3. put back into localstorage
        localStorage.setItem('cart', JSON.stringify(itemCart));
        //4.go back to rental page
        history.push('/rent/' + props.type);
    }
    //update quantity funtion
    const update = () => {
        //get new quantity from input box
        let newQuantity = parseInt(document.getElementById("update-amount-" + props.index).value);
        //find if its empty
        if (isNaN(newQuantity)){
        } else {
            //set new quantity of cart item
            setAmount(newQuantity);
            //set total in whole cart componenet using state
            props.setTotal(newQuantity*props.price);
            //Set quantity in local storage
            //1. get array of cart from localstorage
            const itemCart = JSON.parse(localStorage.getItem('cart'));
            //2. change the local storage array
            
            let cart = { 'item': props.name, 
                'price': props.price, 
                'quantity' : newQuantity,
                'type' : props.type,
                'id' : props.id,
                'own' : props.own
            }

            itemCart.splice(props.index, 1, cart)
            //3. put back into localstorage
            localStorage.setItem('cart', JSON.stringify(itemCart));
            //clear input
            document.getElementById("update-amount-" + props.index).value = '';
        }
    }
    if (props.own === "rent"){
        return(
            <div className="border-top">
                <div className="flex-item">
                    <div className="flex-start cart-item">
                        <div className="image-container">
                            <div className="item-background">
                                <img className="cart-img" src={image} alt="no img"/>
                            </div>
                        </div>
                        <div className="item-name">
                            {props.name}
                        </div>
                        <div className="item-price">
                            ${props.price} x {props.quantity} days
                        </div>
                        <div className="update">
                            <button onClick={edit}>Edit</button>
                        </div>
                    </div>
                    <div className="flex-item item-font">
                        <div className="item-price">
                            = ${(props.price*amount).toFixedDown(2)}
                        </div>
                        <div className="trash-container">
                            <IoIosTrash className="trash" onClick={hideCart}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="border-top">
                <div className="flex-item">
                    <div className="flex-start cart-item">
                        <div className="image-container">
                            <div className="item-background">
                                <img className="cart-img" src={image} alt="no img"/>
                            </div>
                        </div>
                        <div className="item-name">
                            {props.name}
                        </div>
                        <div className="item-price">
                            ${props.price}
                        </div>
                        <div className="update">
                            <div className="align">
                                <p>x</p>
                                <input placeholder={amount} id={'update-amount-' + props.index} className='update-amount' required/>
                                <button onClick={update}>update</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-item item-font">
                        <div className="item-price">
                            = ${(props.price*amount).toFixedDown(2)}
                        </div>
                        <div className="trash-container">
                            <IoIosTrash className="trash" onClick={hideCart}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;