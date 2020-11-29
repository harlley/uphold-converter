import Select, { components } from "react-select";
import styled from 'styled-components';

export const SelectCurrency = ({ currency, usedCurrencies, onChange, amount, setAmount }) => {

  const FlagIcon = ({value}) => {
   return (
    <>
      <img src={require(`../images/${value}.png`).default} width="25" height="25" alt=""/>
      <span style={{paddingLeft: 5, backgroundColor: 'red', display: 'flex', alignItems: 'center'}}>{value}</span>
    </>
   )
  }

  const options = usedCurrencies.map(val => { 
    return { 
      value: val,
      label: <FlagIcon value={val}/>
    };
  });


  const DropdownIcon = () => {
    return (
      <svg height="5" viewBox="0 0 8 5" width="8" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(-4 -6)"><path d="m0 0h16v16h-16z"/><path d="m4.50260994 6h6.99478016c.2761423 0 .5.22385763.5.5 0 .13260824-.0526785.2597852-.1464466.35355339l-3.49739011 3.49739011c-.19526215.1952621-.51184463.1952621-.70710678 0l-3.49739006-3.49739011c-.19526215-.19526215-.19526215-.51184463 0-.70710678.09376819-.09376819.22094514-.14644661.35355339-.14644661z" fill="#8494a5"/></g></svg>
    )
  };
  
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <DropdownIcon />
      </components.DropdownIndicator>
    );
  };

  const colourStyles = {
    control: styles => ({ ...styles, borderRadius: 99, width: 100, height: '100%', border: 'none' }),
    indicatorSeparator: styles => ({ ...styles, display: 'none' }),
    singleValue: styles => ({ ...styles, backgroundColor: '#666', display: 'flex', alignItems: 'center', color: 'white', justifyContent: 'center', verticalAlign: 'center' }),
    option: styles => ({ ...styles, marginBottom: 1, display: 'flex', alignItem: 'center' }),
    menu: styles => ({ ...styles, marginTop: 2, borderRadius: 6 }),

  };
  

  return (
    <Container>
      <Input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Select
        defaultMenuIsOpen={true}
        menuIsOpen={true}
        closeMenuOnSelect={false}
        closeMenuOnScroll={false}
        defaultValue={{ value: currency, label: <FlagIcon value={currency}/> }}
        onChange={onChange}
        options={options}
        styles={colourStyles}
        components={{ DropdownIndicator }}
      />
    </Container>
  )
}

const Input = styled.input`
  background-color: transparent;
  width: 200px;
  border: none;
  color: white;
  font-size: 2rem;
  outline: none;
  padding-left: 5px;
`

const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  background-color: blue/*rgb(243, 247, 252)*/;
  justify-content: space-between;
  border-radius: 12px;

`




