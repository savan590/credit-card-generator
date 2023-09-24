import './App.css';
import Form from './form';
import React, { useState } from "react";

function App() {
  const [cardName, setCardName] = useState("Savan Desai");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [year, setYear] = useState("00");
  const [month, setMonth] = useState("00");
  const [cvc, setCvc] = useState("000");
  const handleFormSubmit = (formData) => {
    setCardName(formData.cardName);
    setNumber(formData.number);
    setYear(formData.year);
    setMonth(formData.month);
    setCvc(formData.cvc);

  };
  

  return (
    <>
      <div className='left-part'>
        <div className='card'>
          <div className='images'>
            <div className='image0'></div>
            <div className='image1'></div>
          </div>
          <div className='details'>
            <p id='num'>{number}</p>
            <div className='name-date'>
              <p>{cardName}</p>
              <p>{month}/{year}</p>
            </div>
          </div>
        </div>
        <div className="back-side">
          <div className='cvca'>
            <p>{cvc}</p>
          </div>
        </div>
      </div>
      <div className='main-card'>
        <div className='form-details'>
          <Form onSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  )
}

export default App;