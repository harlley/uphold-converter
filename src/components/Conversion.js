import styled from 'styled-components';


const Conversion = ({ amount, rate }) => {
  const total = (rate.ask * amount).toFixed(2);
  const currency = rate.pair.slice(3, 6);
  return (
    <Container>
      <div style={{ marginLeft: '10px', fontSize: '1.2rem', backgroundColor: '#666', color: 'white', display: 'flex', alignItems: 'center'}}>
        {total}
      </div>
      <div style={{backgroundColor: '#666', color: 'white', display: 'flex', alignItems: 'center', minWidth: '100px'}}>
        
        <img src={require(`../images/${currency}.png`).default} width="25" height="25" alt="" />
        <span style={{marginLeft: '5px'}}>
          {currency}
        </span>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #eee;
  margin-bottom: 2px;
`

export default Conversion;