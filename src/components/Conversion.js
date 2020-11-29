import styled from 'styled-components';
import { FlagCurrency } from './FlagCurrency';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #eee;
  margin-bottom: 2px;
`

const Total = styled.div`
  margin-left: 10px;
  font-size: 1.2rem; 
  background-color: #666;
  color: white;
  display: flex; 
  align-items: center;
`
const CurrencyContainer = styled.div`
  background-color: #666;
  color: white;
  display: flex;
  align-items: center;
  min-width: 100px;
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