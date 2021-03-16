const map = (arr, func) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++)
        newArr.push(func(arr[i], i))

    return newArr
}

export default map