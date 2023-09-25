import React, { useState } from "react";
import './form.css';
import { toast } from 'react-toastify';


function Form({ onSubmit }) {
    const [cardName, setCardName] = useState("");
    const [number, setNumber] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [hasError, setError] = useState(false)
    

    const formatNumber = (e) => {
        const formatValue = e.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
        setNumber(formatValue);
    };
    const handleChange = (e) => {
        const result = e.target.value.replace(/[^a-z]/gi, '');
        setCardName(result);
    }
    let notify = () => {
        if (hasError === true) {
            toast.success('Success', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else{
            toast.error('error', {
                position: toast.POSITION.TOP_CENTER
            });
            
        }
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = {
            cardName,
            number,
            month,
            year,
            cvc,
        };

        setCardName("");
        setNumber("");
        setYear("");
        setMonth("");
        setCvc("");
        


        if (cardName.length === 0 || number.length === 0 || month.length === 0 || year.length === 0 || cvc.length === 0) {
            setError(true);
        }

        else {
            onSubmit(formData);
            // onClick(notify);
            setError(false);
        }
        
    };

    return (
        <form className="card-form" onSubmit={handleSubmit}>
            <div>
                <label id='label'>CARDHOLDER NAME</label>
                <div>
                    <input className='input-name-number' placeholder="e.g.Savan Desai" type="text" value={cardName} onChange={handleChange} />
                </div>
                {hasError && cardName.length <= 0 ? <label id='error'>ENTER THE NAME  !</label> : ""}
            </div>

            <div>
                <label id='label'>CARD NUMBER</label>
                <div>
                    <input className='input-name-number' type="text" id="numeric" placeholder="e.g.1234 5678 9178 0000" value={number} onChange={(e) => formatNumber(e.target.value)} />
                </div>
                {hasError && number.length <= 0 ? <label id='error'>ENTER THE NUMBER !</label> : ""}
            </div>

            <div className="date-cvc">
                <div>
                    <label id='label'>EXP.DATE(MM/YY)</label>
                    <div className="month-year">
                        <div>
                            <input className='month' placeholder="MM" value={month} type="text" pattern="(^0[1-9]|1[0-2])$" onChange={(e) => setMonth(e.target.value)} />
                        </div>

                        <div>
                            <input className='year' placeholder="YY" value={year} type="text" pattern="([0-9]{2})$" onChange={(e) => setYear(e.target.value)} />
                        </div>
                    </div>

                    {hasError && month.length <= 0 && year.length <= 0 ? <label id='error'>ENTER MONTH & YEAR !</label> : ""}
                </div>
                <div>
                    <label id='label'>CVC</label>
                    <div>
                        <input className='cvc' type="text" inputMode="numeric" placeholder="e.g.123" pattern="^[0-9]{3}$" value={cvc} onChange={(e) => setCvc(e.target.value)} />
                    </div>
                    {hasError && cvc.length <= 0 ? <label id='error'>ENTER THE CVC !</label> : ""}
                </div>
            </div>
            <button className="button" onClick={notify}>Confirm</button>
        </form>
    );
}
export default Form;
