import styled from 'styled-components';
import { FlagCurrency } from './FlagCurrency';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 2px;
`

const Total = styled.div`
  margin-left: 10px;
  font-size: 1.2rem; 
  color: rgb(46, 57, 73);
  font-weight: bold;
  display: flex; 
  align-items: center;
`
const CurrencyContainer = styled.div`
  color: rgb(46, 57, 73);
  display: flex;
  align-items: center;
  min-width: 100px;
  padding-left: 5px;
`

export const Conversion = ({ amount, rate }) => {
  const total = (rate.ask * amount).toFixed(2);
  const currency = rate.pair.slice(3, 6);
  return (
    <Container>
      <Total>{total}</Total>
      <CurrencyContainer>        
        <FlagCurrency value={currency} />
      </CurrencyContainer>
    </Container>
  )
}