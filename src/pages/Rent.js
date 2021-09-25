import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

const Rent = (props) => {
    const history = useHistory();

    //make variable for tomorrow's date
    var day = new Date();
    var nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    //make variable for default one-day rental range
    nextDay.setDate(nextDay.getDate() + 1);
    //initiate state
    const [value, onChange] = useState(nextDay);
    let amount = ((value[0] - value[1])/-86399999).toFixedDown(0) - 1;

    //initiate a new cart item
    let itemCart = [];
    useEffect(() => {

    }, [value])
    
    const rentThis = () => {
        if (isNaN(value[0] - value[1])){
            document.getElementById('please-select').style.color = "red";
            setTimeout(function (){
                document.getElementById('please-select').style.color = "white"; 
            }, 2000);
        } else {
            let cart = { 'item': props.info.title, 
                'price': props.info.rent, 
                'quantity' : JSON.stringify(amount),
                'type' : props.info.type,
                'id' : props.info.id + 3,
                'own' : 'rent'
            }
            //Get array of cart from localstorage
            if (JSON.parse(localStorage.getItem('cart')) !== null){
                itemCart = JSON.parse(localStorage.getItem('cart'));
            }
            //figure if item exists in cart already
            let exists = 0;
            if (itemCart !== null ){
                for (let i = 0; i < itemCart.length; i++) {
                    if (cart.id === itemCart[i].id){
                        exists += 1;
                    }
                }
            }
            //if item doesnt exist, push into cart
            if (exists === 0){
                itemCart.push(cart);
            }
            console.log(itemCart);
            localStorage.setItem('cart', JSON.stringify(itemCart));

            history.push('/cart');
        }
    };

    return(
        <div className="flex">
            <div>
                {props.pictures}
            </div>
            <div className="description">
                <h1>{props.info.title}</h1>
                <p>{props.info.description}</p>
                <Calendar
                    selectRange
                    onChange={onChange}
                    returnValue="range"
                />
                {(Array.isArray(value)) ? amount + " days selected (return morning of last day)": ""}
                <p id="please-select">{(isNaN(value[0] - value[1])) ? "Please select a date range" : ""}</p>
                <div className="praction">
                    <h2>For only ${props.info.rent}/Day</h2>
                </div>
                <button className="praction-btn" onClick={rentThis}>Rent Now</button>
            </div>
        </div>
    )
}

export default Rent;