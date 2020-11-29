import { useState, useEffect } from 'react';
import { uphold } from '../services/uphold';

export const useTicker = ({ selectedCurrency, inputedAmount }) => {

  console.log('selectedCurrency', selectedCurrency);
  console.log('selectedCurrencyLocal', localStorage.getItem('selectedCurrency'));
  
  const [currentRates, setCurrentRates] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState();

  useEffect(() => {

    let timeoutID = 0;
    
    if (localStorage.getItem('rates') && selectedCurrency === localStorage.getItem('selectedCurrency')) {
      setCurrentRates(JSON.parse(localStorage.getItem('rates')));
      console.log('entrou');
    }
    else {
      timeoutID = setTimeout(() => {
        uphold.getTicker(currentCurrency).then(response => {
          setCurrentRates(response);
          localStorage.setItem('rates', JSON.stringify(response));
          localStorage.setItem('lastUpdate', new Date());
          localStorage.setItem('selectedCurrency', selectedCurrency);
          localStorage.setItem('inputedAmount', inputedAmount);
        })  
      }, 0);  
    }

    

    return () => {
      clearTimeout(timeoutID);
    };

  },[currentCurrency, selectedCurrency]);

  return [currentRates, setCurrentCurrency];

}
