// const myfunction = (name) => `mi nombre es ${name}`
// console.log(myfunction('primo'))
// const myfunction2 = (num) => 2 * num
// console.log(myfunction2(100))
// const myfunction3 = () => ({ name: 'max' })
// console.log(myfunction3())

const person = {
  name: 'Goku',
  level: 4000,
  enemys: ['Cell', 'Freezer', 'Majimbu'],
  rival: {
    name: 'Vegeta',
    level: 3344,
    enemys: ['Cell', 'Freezer', 'Majimbu'],
    event: {
      uno: () => {
        console.log('primera funcion')
      },
      dos: () => {
        console.log('segunda funcion')
      },
    },
  },
}
const {
  rival: {
    event: { uno },
  },
} = person
console.log(uno())

// const { name } = person
// const { enemys } = person
// const [, nameenemy] = enemys
// console.log(nameenemy)
// console.log(name)

// const { rival } = person
// const { name } = rival
// console.log(name)
