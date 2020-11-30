import { useState, useEffect } from 'react';
import { uphold } from '../services/uphold';

export const useTicker = ({ selectedCurrency, inputedAmount }) => {
  
  const [currentRates, setCurrentRates] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {

    let timeoutID = 0;
    
    if (localStorage.getItem('rates') && selectedCurrency === localStorage.getItem('selectedCurrency')) {
      setCurrentRates(JSON.parse(localStorage.getItem('rates')));
    }
    else {
      setIsLoading(true);
      timeoutID = setTimeout(() => {
        uphold.getTicker(currentCurrency).then(response => {
          setCurrentRates(response);
          localStorage.setItem('rates', JSON.stringify(response));
          localStorage.setItem('lastUpdate', new Date());
          localStorage.setItem('selectedCurrency', selectedCurrency);
          localStorage.setItem('inputedAmount', inputedAmount);
        }).catch(error => setError(error));
        setIsLoading(false);
      }, 3000);
    }

    

    return () => {
      clearTimeout(timeoutID);
    };

  },[currentCurrency, selectedCurrency, inputedAmount]);

  return [currentRates, setCurrentCurrency, isLoading, error];

}
