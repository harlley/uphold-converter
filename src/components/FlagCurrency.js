export const FlagCurrency = ({value}) => {
  return (
   <>
     <img src={require(`../images/${value}.png`).default} width="25" height="25" alt=""/>
     <span style={{paddingLeft: 5, backgroundColor: 'red', display: 'flex', alignItems: 'center'}}>{value}</span>
   </>
  )
 }