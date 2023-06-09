import './style.css'
import copyToClipboard from './copy.ts'
import passwordGenerator from './generatePassword.ts'
import displayErrorMessage from './errorMeasage.ts'

const $ = (element: string) => {
  return document?.getElementById(element)
}

const passwordResults = $('password-results') as HTMLDivElement
const copyButton = $('copyClipboard') as HTMLButtonElement
const password = $('password-generated') as HTMLInputElement
const passwordLength = $('passwordLength') as HTMLInputElement
const uppercase = $('uppercaseText') as HTMLInputElement
const specialCharacter = $('specialText') as HTMLInputElement
const number = $('numberText') as HTMLInputElement
const generator = $('password-generator') as HTMLButtonElement
const error = $('errors') as HTMLParagraphElement

copyButton?.addEventListener('click', () => {
  copyToClipboard('password-generated')
  passwordResults.className += ' copy'
})

const wirtePassword = () => {
  if (Number(passwordLength.value) < 5) {
    displayErrorMessage({
      element: error,
      message: 'Minimum password is 5 characters'
    })
    return
  }
  if (Number(passwordLength.value) > 20) {
    displayErrorMessage({
      element: error,
      message: 'Maximum password is 20 characters'
    })
    return
  }
  let passwordGenerated: string = passwordGenerator({
    length: Number(passwordLength.value),
    uppercase: uppercase.checked,
    specialCharacter: specialCharacter.checked,
    numbers: number.checked
  })
  password.value = passwordGenerated
  passwordResults.className = 'password-results'
  displayErrorMessage({
    element: error,
    message: ''
  })
}

generator.addEventListener('click', wirtePassword)
