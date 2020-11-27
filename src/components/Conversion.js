import styled from 'styled-components';


const Conversion = ({ amount, rate }) => {
  const total = (rate.ask * amount).toFixed(2);
  const currency = rate.pair.slice(3, 6);
  return (
    <Container>
      <div style={{ marginLeft: '10px'}}>
        {total}
      </div>
      <div>
        <img src={require(`../images/${currency}.png`).default} width="15" height="15" alt="" />
        <span style={{width: '50px', display: 'inline-block', marginLeft: '5px'}}>{currency}</span>
        
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Conversion;