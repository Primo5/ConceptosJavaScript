export const prime = (num) => {
  for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}
const valor = 'voy a ser por default'
export default valor
