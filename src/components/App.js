import React, { useState } from 'react';
import useTicker from '../hooks/useTicker';
import ListConversions from './ListConversions';


const App = () => {
  const [currency, setCurrency] = useState(localStorage.getItem('selectedCurrency') || 'BTC');
  const [amount, setAmount] = useState(localStorage.getItem('inputedAmount') || 100);
  const [currentRates, setCurrentCurrency] = useTicker({ 
    selectedCurrency: currency,
    inputedAmount: amount
  });
  
  const rates = currentRates.filter(val => !val.pair.includes('-')); // Ignore stocks and show only currencies

  const handleChange = (e) => {
    setCurrency(e.target.value);
    setCurrentCurrency(e.target.value);
  }

  const usedCurrencies = process.env.REACT_APP_USED_CURRENCIES.split('|');
  

  return (
    <>
      Uphold Converter<br/>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

      <select defaultValue={currency} onChange={handleChange}>
        {usedCurrencies.map(item => <option key={item}>{item}</option>)}
      </select>

      <ListConversions baseCurrency={currency} usedCurrencies={usedCurrencies} amount={amount} rates={rates} />

    </>
  );
}

export default App;
