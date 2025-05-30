export const ProgressMeter = ({progreso, meta, medida, year}) => {

  const currencyFormat = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };

  if(year !== 'LOP') {
    if (medida === 'Monetario') {
      return (
        <h5>{`${progreso.toLocaleString('en-US', currencyFormat)} / ${meta.toLocaleString('en-US', currencyFormat)}`}</h5>
      )
    }
    else {
      return (
        <h5>{`${progreso} / ${meta}`}</h5>
      )
    }
  }
  else{
    if (medida === 'Monetario') {
      return (
        <h5>{`${progreso.toLocaleString('en-US', currencyFormat)} / ${meta.toLocaleString('en-US', currencyFormat)}`}</h5>
      )
    }
    else {
      return (
        <h5>{`${progreso} / ${meta}`}</h5>
      )
    }
  }
}
