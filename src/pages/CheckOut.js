import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

const CheckOut = () => {
    const history = useHistory();

    const purchase = () => {
        console.log("thank you");

        history.push('/thankyou');
    }
    
    const Back = () => {
        history.push('/cart');
    }
    return(
        <div>
            <div className="flex-start">
                <IoArrowBack onClick={Back} className="IoArrowBack"/>
                <h2>Back to Cart</h2>
            </div>
            <div className="checkout">
                <form className="checkout__form">
                    <div className="section">
                        <h4 className="checkout__subheading">Customer information</h4>
                        <div className="full">
                            <div className="half">
                                <label className="checkout__label" htmlFor="firstName">First name: </label>
                                <label className="checkout__label" htmlFor="lastName">Last name: </label>
                                <label className="checkout__label" htmlFor="email">Email: </label>
                            </div>
                            <div className="half">
                                <input className="checkout__input" type="text" name="firstName" required />
                                <input className="checkout__input" type="text" name="lastName" required />
                                <input className="checkout__input" type="email" name="email" placeholder="johndoe123@example.com" required />
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <h4 className="checkout__subheading">Shipping details</h4>
                        <div className="full">
                            <div className="half">
                                <label className="checkout__label" htmlFor="shippingName">Full Name:</label>
                                <label className="checkout__label" htmlFor="shippingStreet">Street Address:</label>
                                <label className="checkout__label" htmlFor="shippingCity">City:</label>
                                <label className="checkout__label" htmlFor="shippingState">State:</label>
                                <label className="checkout__label" htmlFor="shippingPostalZipCode">Postal/Zip code: </label>
                            </div>
                            <div className="half">
                                <input className="checkout__input" type="text" name="shippingName" required />
                                <input className="checkout__input" type="text" name="shippingStreet" required />
                                <input className="checkout__input" type="text" name="shippingCity" required />
                                <input className="checkout__input" type="text" name="shippingState" required />
                                <input className="checkout__input" type="text" name="shippingPostalZipCode" required />
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <h4 className="checkout__subheading">Payment information</h4>
                        <div className="full">
                            <div className="half">
                                <label className="checkout__label" htmlFor="cardNum">Credit card number: </label>
                                <label className="checkout__label" htmlFor="expMonth">Expiry month/year: </label>
                                <label className="checkout__label" htmlFor="ccv">CCV: </label>
                            </div>
                            <div className="half">
                                <input className="checkout__input" type="text" name="cardNum" />
                                <input className="checkout__input" type="text" name="expMonth" placeholder="i.e. 04/23" />
                                <input className="checkout__input" type="text" name="ccv" placeholder="i.e. 762" />
                            </div>
                        </div>
                    </div>
                    <button className="checkout__btn-confirm" onClick={purchase}>Confirm order</button>
                </form>
            </div>
        </div>
        
    )
}

export default CheckOut;