import React, { useState } from 'react';
import { useTicker } from '../hooks/useTicker';
import { ListConversions } from './ListConversions';
import styled from 'styled-components';
import { SelectCurrency } from './SelectCurrency';

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

const Message = styled.p`
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


const Instructions = ({ isLoading, error, amount }) => {
  if (isLoading) return <Message>Loading...</Message>;
  if (error) return <Message><span style={{color: 'red'}}>It is not working now :( Please come back later.</span></Message>;
  if (!amount > 0) return <Message>Enter an amount to check the rates.</Message>;
  return <></>;
}



export const App = () => {
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [currentRates, setCurrentCurrency, isLoading, error] = useTicker({ 
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
        { amount > 0 && !isLoading ? <ListConversions baseCurrency={currency} usedCurrencies={usedCurrencies} amount={amount} rates={rates} /> : null }
        <Instructions isLoading={isLoading} error={error} amount={amount} />
    </AppContainer>
  );
}
