import React from 'react';
import { TiDelete } from "react-icons/ti";

const Modal = (props) => {

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

  const goBack = () => {
    let x = document.querySelector('.cart');
        x.classList.add('appear-block');
        let y = document.querySelector('.modal');
        y.classList.remove('appear-flex');
        localStorage.removeItem("num");
  }

  const deleteThis = () => {
    let y = document.querySelector('.modal');
    y.classList.remove('appear-flex');

    //Get array of cart from localstorage
    const itemCart = JSON.parse(localStorage.getItem('cart'));
    //Get index to delete
    const toDelete = JSON.parse(localStorage.getItem('num'));
    //Delete index of item-to-delete from storage
    localStorage.removeItem("num");
    //Delete cart from local Storage
    localStorage.removeItem("cart");
    itemCart.splice(toDelete, 1);
    
    if (itemCart === undefined || itemCart.length === 0) {
      props.setTotal("0");
    }
    else{
      localStorage.setItem('cart', JSON.stringify(itemCart))
      //get total from cart
      itemCart.map(curr =>{
      amount += curr.price*curr.quantity
      return 0;
      })
      props.setTotal(amount);
    }
    let x = document.querySelector('.cart');
    x.classList.add('appear-block');
  }


  return (
    <div>
      <div className="modal">
        <TiDelete className="exit" onClick={goBack}/>
        <h1>Are your sure?</h1>
        <div className="confirm">
          <button className="delete-btn" onClick={deleteThis}>DELETE</button>
          <button className="nevermind" onClick={goBack}>NO</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;