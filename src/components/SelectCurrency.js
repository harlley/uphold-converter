import Select, { components } from "react-select";
import styled from 'styled-components';
import { FlagCurrency } from './FlagCurrency';
import NumberFormat from 'react-number-format';

const Input = styled(NumberFormat)`
  background-color: transparent;
  width: 200px;
  border: none;
  color: rgb(46, 57, 73);
  font-size: 2rem;
  outline: none;
  padding-left: 5px;
`

const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  background-color: rgb(243, 247, 252);
  justify-content: space-between;
  border-radius: 12px;
`

//Reference in https://react-select.com/
const selectStyles = {
  control: styles => ({ ...styles, borderRadius: 99, width: 100, height: '100%', border: 'none' }),
  indicatorSeparator: styles => ({ ...styles, display: 'none' }),
  singleValue: styles => ({ ...styles, display: 'flex', alignItems: 'center', color: 'rgb(46, 57, 73)', justifyContent: 'center', verticalAlign: 'center' }),
  option: styles => ({ ...styles, marginBottom: 1, display: 'flex', alignItem: 'center' }),
  menu: styles => ({ ...styles, marginTop: 4, borderRadius: 6 }),
};

// Icon to customize react-select component
const DropdownIcon = () => {
  return (
    <svg height="5" viewBox="0 0 8 5" width="8">
      <g fill="none" fillRule="evenodd" transform="translate(-4 -6)">
        <path d="m0 0h16v16h-16z"/>
        <path d="m4.50260994 6h6.99478016c.2761423 0 .5.22385763.5.5 0 .13260824-.0526785.2597852-.1464466.35355339l-3.49739011 3.49739011c-.19526215.1952621-.51184463.1952621-.70710678 0l-3.49739006-3.49739011c-.19526215-.19526215-.19526215-.51184463 0-.70710678.09376819-.09376819.22094514-.14644661.35355339-.14644661z" fill="#8494a5"/>
        </g>
    </svg>
  );
};

// Change the default dropdown arrow
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownIcon />
    </components.DropdownIndicator>
  );
};

export const SelectCurrency = ({ currency, usedCurrencies, onChange, amount, setAmount }) => {

  const options = usedCurrencies.map(val => { 
    return { value: val, label: <FlagCurrency value={val}/> };
  });
  
  return (
    <Container>
      <Input thousandSeparator={true} value={amount} onValueChange={(item) => setAmount(item.value)} placeholder="0.00"/>
      <Select
        defaultValue={{ value: currency, label: <FlagCurrency value={currency}/> }}
        onChange={onChange}
        options={options}
        styles={selectStyles}
        components={{ DropdownIndicator }}
      />
    </Container>
  )
}

