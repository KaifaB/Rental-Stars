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
        console.log(value);
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
                'dates' : (value[0].getMonth()+1) + "/" + value[0].getDate() + " - " + (value[1].getMonth()+1) + "/" + value[1].getDate(),
                'own' : 'rent'
            }
            //Get array of cart from localstorage
            if (JSON.parse(localStorage.getItem('cart')) !== null){
                itemCart = JSON.parse(localStorage.getItem('cart'));
            }
            //push item to cart
            itemCart.push(cart);
            //push cart to storage
            localStorage.setItem('cart', JSON.stringify(itemCart));
            //head to cart page
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
                <p className="desc">{props.info.description}</p>
                <Calendar
                    selectRange
                    onChange={onChange}
                    returnValue="range"
                    tileDisable
                />
                {(Array.isArray(value)) ? amount + " days selected (return morning of last day)": ""}
                <p id="please-select">{(isNaN(value[0] - value[1])) ? "Please select a date range" : ""}</p>
                <p className="rented">{(Array.isArray(value)) ? (value[0].getMonth()+1) + "/" + value[0].getDate() + "/" + value[0].getFullYear() + "-" + (value[1].getMonth()+1) + "/" + value[1].getDate() + "/" + value[1].getFullYear() : ""}</p>
                <div className="praction">
                    <h2>For only ${props.info.rent}/Day</h2>
                </div>
                <button className="praction-btn" onClick={rentThis}>Rent Now</button>
            </div>
        </div>
    )
}

export default Rent;