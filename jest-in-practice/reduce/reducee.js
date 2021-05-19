const reducee = (arr, func, valorInicial) => {
  let acc = valorInicial
  let copiaArray = arr

  if(valorInicial === undefined){
      acc = arr[0]
      copiaArray = arr.slice(1)
  }

  for(let i = 0; i < copiaArray.length; i++){
      acc = func(acc, copiaArray[i], i, copiaArray)
  }
  return acc
}

export default reducee