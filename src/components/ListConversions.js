import styled from 'styled-components';
import { Conversion } from './Conversion';

const Container = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: 10px;
`

const List = styled.li`
  list-style: none;
`


export const ListConversions = ({ baseCurrency, usedCurrencies, rates, amount }) => {

  //Shows only conversions to currencies of env file
  const currenciesToShow = usedCurrencies.filter(currency => currency !== baseCurrency);
  const pairsToShow = currenciesToShow.map(currency => `${baseCurrency}${currency}`);
  const ratesToShow = rates.filter(rate => pairsToShow.some(item => item === rate.pair));

  return (
    <Container>
      {ratesToShow.map(rate => {
          return (
            <List key={rate.pair}>
              <Conversion amount={amount} rate={rate} />
            </List>
          )
      })}
    </Container>
  )
}