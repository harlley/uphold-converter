import { useState } from 'react';
import useTicker from '../hooks/useTicker';

const App = () => {
  const [currentRates, setCurrentCurrency] = useTicker();
  const [currency, setCurrency] = useState();
  const [amount, setAmount] = useState();
  
  const rates = currentRates.filter(val => !val.pair.includes('-')).slice(0,5);
  console.log('currentRates', rates);

  return (
    <>
      Uphold Converter<br/>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} />
      <button onClick={() => setCurrentCurrency(currency)}>Show</button>
      <pre>{JSON.stringify(rates, null, 2)}</pre>
    </>
  );
}

export default App;
