import { useState, useEffect } from 'react';
import SDK from '@uphold/uphold-sdk-javascript';


const useTicker = ({ selectedCurrency, inputedAmount }) => {
  
  const [currentRates, setCurrentRates] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState();

  useEffect(() => {
    const sdk = new SDK({
      // In the real world this call with client secret must be on the server
      baseUrl: process.env.REACT_APP_UPHOLD_BASE_URL,
      clientId: process.env.REACT_APP_UPHOLD_CLIENT_ID,
      clientSecret: process.env.REACT_APP_UPHOLD_CLIENT_SECRET
    });
  
    sdk.getTicker(currentCurrency).then(response => {
      setCurrentRates(response);
      localStorage.setItem('selectedCurrency', selectedCurrency);
      localStorage.setItem('inputedAmount', inputedAmount);
    })

  },[currentCurrency]);

  return [currentRates, setCurrentCurrency];

}

export default useTicker;