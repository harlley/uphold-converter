
const ListConversions = ({ baseCurrency, usedCurrencies, rates, amount,  }) => {
  //Shows only conversions to currencies of env file
  const currenciesToShow = usedCurrencies.filter(currency => currency !== baseCurrency);
  const pairsToShow = currenciesToShow.map(currency => `${baseCurrency}${currency}`);
  const ratesToShow = rates.filter(rate => pairsToShow.some(item => item === rate.pair));

  return (
    <>
      <ul>
        {ratesToShow.map(rate => <li key={rate.pair}>{(rate.ask * amount).toFixed(2)} | {rate.ask} | {rate.pair}</li>)}
      </ul>
    </>
  )
}

export default ListConversions;