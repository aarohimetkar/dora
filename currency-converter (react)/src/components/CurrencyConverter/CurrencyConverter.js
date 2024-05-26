// src/components/CurrencyConverter/CurrencyConverter.js

import React, { useState } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [usdAmount, setUsdAmount] = useState('');
  const [exchangeRate] = useState(74.5); // INR conversion rate
  const [convertedAmount, setConvertedAmount] = useState('');

  const handleInputChange = (e) => {
    setUsdAmount(e.target.value);
  };

  const convertCurrency = () => {
    const converted = parseFloat(usdAmount) * exchangeRate;
    setConvertedAmount(converted.toFixed(2));
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-container">
        <label>USD Amount:</label>
        <input type="number" value={usdAmount} onChange={handleInputChange} />
      </div>
      <button onClick={convertCurrency}>Convert</button>
      {convertedAmount && (
        <p>
          Converted Amount: {convertedAmount} INR
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
