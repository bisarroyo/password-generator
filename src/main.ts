import './style.css'
import copyToClipboard from './copy.ts'

// const app = document.querySelector('#app') as HTMLDivElement

// const inputUppercase = document.querySelector(
//   '#uppercaseText'
// ) as HTMLInputElement

const copyButton = document.getElementById('copyClipboard')

copyButton?.addEventListener('click', () => {
  copyToClipboard('password-generated')
})
