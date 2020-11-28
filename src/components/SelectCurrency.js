import Select from "react-select";
import styled from 'styled-components';

export const SelectCurrency = ({ currency, usedCurrencies, onChange, amount, setAmount }) => {


  const options = usedCurrencies.map(val => { 
    return { 
      value: val,
      label: <div><img src={require(`../images/${val}.png`).default} width="15" height="15" alt="" />{val}</div> 
    };
  });

  const colourStyles = {
    control: styles => ({ ...styles, borderRadius: 99, width: 200 }),
  };
  

  return (
    <Container>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

      <Select
        defaultValue={ { value: currency, label: <div><img src={require(`../images/${currency}.png`).default} width="15" height="15" alt="" />{currency}</div> }}
        onChange={onChange}
        options={options}
        styles={colourStyles}        
      />

    </Container>
  )
}


const Container = styled.div`
  display: flex;
  background-color: blue;

`




