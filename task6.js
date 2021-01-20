function calcSumFromFibonacci(from, to) {
  if (typeof from != 'number' || typeof to != 'number') {
    throw Error('Не является числом')
  }
  if (from < 0 || to < from) {
    throw Error('to должно быть больше чем from')
  }

  let summ = 0

  let one = 0
  let two = 1
  let arr = []
  for (let i = 0; i < 100; i++) {
    let current = one + two

    one = two
    two = current

    arr.push(current)
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= from && arr[i] <= to) {
      summ += arr[i]
    }
  }
  return console.log(summ)
}
