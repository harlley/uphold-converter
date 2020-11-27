
const ListConversions = ({ rates, amount }) => {
  return (
    <ul>
      {rates.map(rate => <li key={rate.pair}>{(rate.ask * amount).toFixed(2)} | {rate.ask} | {rate.pair}</li>)}
    </ul>
  )
}

export default ListConversions;