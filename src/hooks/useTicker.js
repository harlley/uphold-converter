import { useState, useEffect } from 'react';
import { uphold } from '../services/uphold';
import moment from 'moment';

export const useTicker = ({ selectedCurrency, inputedAmount }) => {
  
  const [currentRates, setCurrentRates] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const msDebounce = 1000; // Debounce in miliseconds to avoid overload on server
  const minExpirationCache = 1; // Time of expiration os the cache on localstorage in minutes
  
  useEffect(() => {

    // Clear cache after 1 minute
    if ( moment() > moment(new Date(localStorage.getItem('expireCache'))) ) {
      localStorage.removeItem('rates');
      localStorage.removeItem('expireCache');
      localStorage.removeItem('selectedCurrency');
    }

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
          localStorage.setItem('expireCache', moment().add(minExpirationCache, 'minutes'));
          localStorage.setItem('selectedCurrency', selectedCurrency);
        }).catch(error => setError(error));
        setIsLoading(false);
      }, msDebounce);
    }

    return () => {
      clearTimeout(timeoutID);
    };

  },[currentCurrency, selectedCurrency, inputedAmount]);

  return [currentRates, setCurrentCurrency, isLoading, error];

}
