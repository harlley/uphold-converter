import useTicker from '../hooks/useTicker';

const App = () => {
  const currentRates = useTicker('USD');
  console.log('currentRates', currentRates.find(val => val.pair === 'USDEUR'));
  return (
    <>
      Uphold Converter
    </>
  );
}

export default App;
