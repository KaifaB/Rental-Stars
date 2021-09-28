import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

const CheckOut = () => {
    let history = useHistory();

    //home-made isnumeric function
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    
    //all errors/ initial input values that matter
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [credit, setCredit] = useState("");
    const [expire, setExpire] = useState("");
    const [CVV, setCVV] = useState("");
    
    const [firstNameErr, setFirstNameErr] = useState({});
    const [lastNameErr, setLastNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [addressErr, setAddressErr] = useState({});
    const [cityErr, setCityErr] = useState({});
    const [stateErr, setStateErr] = useState({});
    const [zipErr, setZipErr] = useState({});
    const [creditErr, setCreditErr] = useState({});
    const [expireErr, setExpireErr] = useState({});
    const [CVVErr, setCVVErr] = useState({});

    const Back = () => {
        history.push('/cart');
    }

    const validate = () => {
        const firstNameErr = {};
        const lastNameErr = {};
        const emailErr = {};
        const addressErr = {};
        const cityErr = {};
        const zipErr = {};
        const creditErr = {};
        const expireErr = {};
        const CVVErr = {};
        const stateErr = {};

        //Regex for CVV
        const regExpire = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
        //Regex for Email
        const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let isValid = true;
        if (firstName === ""){
            firstNameErr.empty = " *required";
            isValid = false;
        }
        if (lastName === ""){
            lastNameErr.empty = " *required";
            isValid = false;
        }
        if (email === ""){
            emailErr.empty = " *required";
            isValid = false;
        }
        if(!regEmail.test(email)){
            emailErr.notValid = " *Must follow format";
            isValid = false;
        }
        if (address === ""){
            addressErr.empty = " *required";
            isValid = false;
        }
        if (city === ""){
            cityErr.empty = " *required";
            isValid = false;
        }
        if(isNumeric(state)){
            stateErr.lettersOnly = " *Must be 2 letters";
            isValid = false;
        }
        if (state.length !== 2){
            zipErr.strangeAmount = " *Must be 2 digits";
            isValid = false;
        }
        if(!isNumeric(zip)){
            zipErr.notNumeric = " *Numbers only";
            isValid = false;
        }
        if (zip.length !== 5){
            zipErr.strangeAmount = " *Must be 5 digits";
            isValid = false;
        }
        if (credit.length !== 16){
            creditErr.strangeAmount = " *Must be 16 digits";
            isValid = false;
        }
        if(!regExpire.test(expire)){
            expireErr.notValid = " *MM/YY format";
            isValid = false;
        }
        if(!isNumeric(CVV)){
            CVVErr.notNumeric = " *Numbers only";
            isValid = false;
        }
        if (CVV.length !== 3){
            CVVErr.strangeAmount = " *Must be 3 digits";
            isValid = false;
        }
        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        setEmailErr(emailErr);
        setAddressErr(addressErr);
        setCityErr(cityErr);
        setStateErr(stateErr);
        setZipErr(zipErr);
        setCreditErr(creditErr);
        setExpireErr(expireErr);
        setCVVErr(CVVErr);
    }
    const purchase = (e) => {
        e.preventDefault();
        const isValid = validate();
        if(isValid){
            
            history.push('/thankyou');
        }
    }
    
    
    return(
        <div className="">
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
                                <input className="checkout__input" type="text" name="firstName" value={firstName} onChange={(e) =>{setFirstName(e.target.value)}} required/>
                                <p className="err">{Object.keys(firstNameErr).map((key)=>{
                                    return(firstNameErr[key])
                                })}</p>
                                <input className="checkout__input" type="text" name="lastName" value={lastName} onChange={(e) =>{setLastName(e.target.value)}} required />
                                <p className="err">{Object.keys(lastNameErr).map((key)=>{
                                    return(lastNameErr[key])
                                })}</p>
                                <input className="checkout__input" type="email" name="email" placeholder="johndoe123@example.com" value={email} onChange={(e) =>{setEmail(e.target.value)}} required />
                                <p className="err">{Object.keys(emailErr).map((key)=>{
                                    return(emailErr[key])
                                })}</p>
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
                                <p className="err"></p>
                                <input className="checkout__input" type="text" name="shippingStreet" value={address} onChange={(e) =>{setAddress(e.target.value)}} required />
                                <p className="err">{Object.keys(addressErr).map((key)=>{
                                    return(addressErr[key])
                                })}</p>
                                <input className="checkout__input" type="text" name="shippingCity" value={city} onChange={(e) =>{setCity(e.target.value)}} required />
                                <p className="err">{Object.keys(cityErr).map((key)=>{
                                    return(cityErr[key])
                                })}</p>
                                <input className="checkout__input" type="text" name="shippingState" value={state} onChange={(e) =>{setState(e.target.value)}} required />
                                <p className="err">{Object.keys(stateErr).map((key)=>{
                                    return(stateErr[key])
                                })}</p>
                                <input className="checkout__input" type="text" name="shippingPostalZipCode" value={zip} onChange={(e) =>{setZip(e.target.value)}} required />
                                <p className="err">{Object.keys(zipErr).map((key)=>{
                                    return(zipErr[key])
                                })}</p>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <h4 className="checkout__subheading">Payment information</h4>
                        <div className="full">
                            <div className="half">
                                <label className="checkout__label" htmlFor="cardNum">Credit card number: </label>
                                <label className="checkout__label" htmlFor="expMonth">Expiry month/year: </label>
                                <label className="checkout__label" htmlFor="cvv">CVV: </label>
                            </div>
                            <div className="half">
                                <input className="checkout__input" type="text" name="cardNum" value={credit} onChange={(e) =>{setCredit(e.target.value)}}/>
                                <p className="err">{Object.keys(creditErr).map((key)=>{
                                    return(creditErr[key])
                                })}</p>
                                <input className="checkout__input" type="text" name="expMonth" placeholder="i.e. 04/23" value={expire} onChange={(e) =>{setExpire(e.target.value)}}/>
                                <p className="err">{Object.keys(expireErr).map((key)=>{
                                    return(expireErr[key])
                                })}</p>
                                <input className="checkout__input" type="text" name="cvv" placeholder="i.e. 762" value={CVV} onChange={(e) =>{setCVV(e.target.value)}}/>
                                <p className="err">{Object.keys(CVVErr).map((key)=>{
                                    return(CVVErr[key])
                                })}</p>
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