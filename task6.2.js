function calcSum(a) {
  let curry = (b) => {
    a += b
    return curry
  }
  curry.toString = () => a
  return curry
}
