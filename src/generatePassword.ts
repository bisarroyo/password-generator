function randomCharacter(min: number, max: number): number {
  const randomNumber = Math.floor(Math.random() * max - min)
  return randomNumber
}

const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const randomNumber = randomCharacter(0, number.length)
console.log(randomNumber)
