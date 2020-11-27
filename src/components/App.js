import { useState } from 'react';
import useTicker from '../hooks/useTicker';
import ListConversions from './ListConversions';

const App = () => {
  const [currency, setCurrency] = useState(localStorage.getItem('selectedCurrency') || 'BTC');
  const [amount, setAmount] = useState(localStorage.getItem('inputedAmount') || 100);
  const [currentRates, setCurrentCurrency] = useTicker({ 
    selectedCurrency: currency,
    inputedAmount: amount
  });

  
  const rates = currentRates.filter(val => !val.pair.includes('-')).slice(0,10);
  console.log('currentRates', rates);

  const handleChange = (e) => {
    setCurrency(e.target.value);
    setCurrentCurrency(e.target.value);
  }

  return (
    <>
      Uphold Converter<br/>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            
      <select defaultValue={currency} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="BTC">BTC</option>
        <option value="EUR">EUR</option>
        <option value="BRL">BRL</option>
      </select>

      <ListConversions amount={amount} rates={rates} />

    </>
  );
}

export default App;
