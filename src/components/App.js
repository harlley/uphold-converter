import React, { useState } from 'react';
import useTicker from '../hooks/useTicker';
import ListConversions from './ListConversions';
import styled from 'styled-components';
import Select from "react-select";

/*
TODO ***********

[ ] CSS Styles
[ ] Improve cache using last update date
[ ] Default amount is 0.00
[ ] Show list conversions only after some amount is inserted
[ ] Add cypress e2e tests (Optional)
[ ] Add unit tests (Optional)
[ ] Setup linting (Optional)

*/

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];


const colourStyles = {
  control: styles => ({ ...styles, borderRadius: 99, width: 200 }),
};

const App = () => {
  const [currency, setCurrency] = useState(localStorage.getItem('selectedCurrency') || 'USD');
  const [amount, setAmount] = useState(localStorage.getItem('inputedAmount') || 100);
  const [currentRates, setCurrentCurrency] = useTicker({ 
    selectedCurrency: currency,
    inputedAmount: amount
  });

  const rates = currentRates.filter(val => !val.pair.includes('-')); // Ignore stocks and show only currencies

  const handleChange = (e) => {
    console.log('handleChange', e);
    setCurrency(e.value);
    setCurrentCurrency(e.value);
  }

  const usedCurrencies = process.env.REACT_APP_USED_CURRENCIES.split('|');

  const options = usedCurrencies.map(val => { 
    return { 
      value: val,
      label: <div><img src={require(`../images/${val}.png`).default} width="15" height="15" alt="" />{val}</div> 
    };
  });


  return (
    <AppContainer>
      <Headline>Currency Converter</Headline>
      <CallToAction>Receive competitive and transparent pricing with no hidden spreads. Se how we compare.</CallToAction>      
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

      {/* <select defaultValue={currency} onChange={handleChange}>
        {usedCurrencies.map(item => <option key={item}>{item}</option>)}
      </select> */}

      <Select
        defaultValue={ { value: currency, label: <div><img src={require(`../images/${currency}.png`).default} width="15" height="15" alt="" />{currency}</div> }}
        onChange={handleChange}
        options={options}
        styles={colourStyles}        
      />      
          
      
      <ListConversions baseCurrency={currency} usedCurrencies={usedCurrencies} amount={amount} rates={rates} />

    </AppContainer>
  );
}


const Headline = styled.h1`
  font-size: 2rem;
  color: rgb(10, 43, 40);
  font-weight: 900;

`

const CallToAction = styled.p`
  text-align: center;
  color: rgb(113, 129, 149);
  font-weight: 100;

`

const AppContainer = styled.div`
  margin-top: 100px;
  width: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export default App;
