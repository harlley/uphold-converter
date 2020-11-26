import { useState, useEffect } from 'react';
import SDK from '@uphold/uphold-sdk-javascript';


const useTicker = (currency) => {
  
  const [currentRates, setCurrentRates] = useState([]);

  useEffect(() => {
    const sdk = new SDK({
      // In the real world this call with client secret must be on the server
      baseUrl: process.env.REACT_APP_UPHOLD_BASE_URL,
      clientId: process.env.REACT_APP_UPHOLD_CLIENT_ID,
      clientSecret: process.env.REACT_APP_UPHOLD_CLIENT_SECRET
    });
  
    sdk.getTicker(currency).then(response => {
      setCurrentRates(response)
    })

  },[]);

  return currentRates;

}

export default useTicker;