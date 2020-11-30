import React, { useState } from 'react';
import { useTicker } from '../hooks/useTicker';
import { ListConversions } from './ListConversions';
import styled from 'styled-components';
import { SelectCurrency } from './SelectCurrency';

/*
TODO ***********

[ ] Improve cache using last update date
[ ] Tratar excessões

[ ] Add cypress e2e tests (Optional)
[ ] Add unit tests (Optional)
[ ] Setup linting (Optional)

*/

const Headline = styled.h1`
  font-size: 2rem;
  color: rgb(10, 43, 40);
  margin-bottom: 10px;
`

const CallToAction = styled.p`
  text-align: center;
  color: rgb(113, 129, 149);
  margin-bottom: 30px;
`

const Instructions = styled.p`
  text-align: center;
  color: rgb(113, 129, 149);
  font-size: 0.8rem;
  margin-top: 20px;
`

const AppContainer = styled.div`
  margin-top: 100px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const App = () => {
  const [currency, setCurrency] = useState(localStorage.getItem('selectedCurrency') || 'USD');
  const [amount, setAmount] = useState(parseFloat(localStorage.getItem('inputedAmount')));
  const [currentRates, setCurrentCurrency] = useTicker({ 
    selectedCurrency: currency,
    inputedAmount: amount
  });

  const rates = currentRates.filter(val => !val.pair.includes('-')); // Ignore stocks and show only currencies

  const usedCurrencies = process.env.REACT_APP_USED_CURRENCIES.split('|');

  const handleChange = (e) => {
    setCurrency(e.value);
    setCurrentCurrency(e.value);
  }

  return (
    <AppContainer>
      <Headline>Currency Converter</Headline>      
      <CallToAction>Receive competitive and transparent pricing with no hidden spreads. Se how we compare.</CallToAction>
        <SelectCurrency currency={currency} usedCurrencies={usedCurrencies} onChange={handleChange} amount={amount} setAmount={setAmount} />
        {
          amount > 0 ? 
          <ListConversions baseCurrency={currency} usedCurrencies={usedCurrencies} amount={amount} rates={rates} />
          :
          <Instructions>Enter an amount to check the rates.</Instructions>
        }
    </AppContainer>
  );
}