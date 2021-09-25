import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

//Components
import CartItem from '../components/CartItem';
import Modal from '../components/Modal';

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

//Get array of cart from localstorage
const itemCart = JSON.parse(localStorage.getItem('cart'));
//Initialize amount
let amount = 0;
//get total from cart
if (itemCart !== null) {
    itemCart.map(curr =>{
        amount += curr.price*curr.quantity
        return 0;
    })
}

const Cart = (props) => {
    const history = useHistory();

    const [total, setTotal] = useState(0);
    //Rerender componenet after updating an items quantity
    useEffect(() => {
        document.getElementsByClassName("update-amount").value = "";
    }, [total]);
    
      //Get array of cart from localstorage
      const itemCart = JSON.parse(localStorage.getItem('cart'));

      //Initialize amount
      let amount = 0;
      //get total from cart
      if (itemCart !== null) {
          itemCart.map(curr =>{
              amount += curr.price*curr.quantity
              return 0;
          })
      }
    const checkout = () => {
        history.push('/checkout');
    }
    
    if (itemCart !== null) {
    return(
        <div>
            <Modal 
                setTotal={setTotal}
            />
            <div className="cart appear-block">
                <div className="cart-header">
                    <h1>Your Cart</h1>
                </div>
                {itemCart.map((curr, index) => {
                    return(
                        <CartItem
                        Freego={props.Freego}
                        Razor={props.Razor}
                        Nanrobot={props.Nanrobot}
                        name={curr.item}
                        price={curr.price}
                        quantity={curr.quantity}
                        type={curr.type}
                        id={curr.id}
                        setTotal={total => setTotal(total)}
                        index={index}
                        key={index}
                        own={curr.own}
                        />
                    )
                })
                }
                <div className="flex-end cart-box">
                    <p>Tax = ${(amount * 0.09).toFixedDown(2)} </p>
                </div>
                <div className="flex-end cart-box">
                    <p>Total = ${(amount + amount*(0.09)).toFixedDown(2)} </p>
                </div>
            </div>
            <div>
                <button id="checkout" onClick={checkout}>Checkout</button>
            </div>
        </div>
    )
} else {
    return(
        <div>
            <div className="cart appear-block">
                <div className="cart-header">
                    <h1>Your Cart</h1>
                </div>
                <div className="flex-end cart-box">
                    <p>Mucho empty </p>
                </div>
            </div>
        </div>
    )
    }
}

export {Cart}