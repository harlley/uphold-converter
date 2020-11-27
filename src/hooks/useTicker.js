import { useState, useEffect } from 'react';
import uphold from '../services/uphold';

const useTicker = ({ selectedCurrency, inputedAmount }) => {
  
  const [currentRates, setCurrentRates] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState();

  useEffect(() => {
    
    const timeoutID = setTimeout(() => {
      uphold.getTicker(currentCurrency).then(response => {
        setCurrentRates(response);
        localStorage.setItem('lastUpdate', new Date());
        localStorage.setItem('selectedCurrency', selectedCurrency);
        localStorage.setItem('inputedAmount', inputedAmount);
      })  
    }, 0);

    return () => {
      clearTimeout(timeoutID);
    };

  },[currentCurrency]);

  return [currentRates, setCurrentCurrency];

}

export default useTicker;