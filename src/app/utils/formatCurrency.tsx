const formatCurrency = (value:number|string, currency:string|undefined ) => {
  return value.toLocaleString('pt-br', {style: 'currency', currency})
}

export default formatCurrency