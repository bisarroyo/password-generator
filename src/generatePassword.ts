function randomCharacter(min: number, max: number): number {
  const randomNumber = Math.floor(Math.random() * max - min)
  return randomNumber
}

// set all characters for password
let number: string[] = []
let specialCharacters: string[] = ['!', '@', '#', '$', '%', '&', '*', '-', '_']
let lowarcaseLetter: string[] = []
let uppercaseLetter: string[] = []

// add number from loop
for (var i = 0; i <= 9; i++) {
  number.push(i.toString())
}
// add lowercase letters from ascii
for (var i = 97; i <= 122; i++) {
  lowarcaseLetter.push(String.fromCharCode(i))
}
// add uppercase letters from ascii
for (var i = 65; i <= 90; i++) {
  uppercaseLetter.push(String.fromCharCode(i))
}

function passwordGenerator({
  length,
  uppercase,
  numbers,
  specialCharacter
}: {
  length: number
  uppercase: boolean
  numbers: boolean
  specialCharacter: boolean
}) {
  let password: string = ''
  let characters: string[] = []

  characters = characters.concat(lowarcaseLetter)

  if (uppercase) {
    characters = characters.concat(uppercaseLetter)
  }
  if (numbers) {
    characters = characters.concat(number)
  }
  if (specialCharacter) {
    characters = characters.concat(specialCharacters)
  }

  for (var i = 0; i < length; i++) {
    const randomNumber = randomCharacter(0, characters.length)
    password += characters[randomNumber]
  }

  return password
}

export default passwordGenerator
