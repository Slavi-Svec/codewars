function splitAndAdd(arr, n, counter) {
    counter = counter || 1
    if (arr.length % 2 !== 0) {
        left.unshift(0)
    }
    const left  = arr.slice(0, arr.length / 2)
    const right = arr.slice(arr.length / 2, arr.length)
    const added = left.map((num, index) =>  num + right[index])
    if (n !== counter) {
      return splitAndAdd(added, n, counter + 1)
    }

    return added
}






// split array into 2 50%;
// step 2 add the arrays together
// call function n amount of times.
console.log(splitAndAdd([32,45,43,23,54,23,54,34,22], 2))


