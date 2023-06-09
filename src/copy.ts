function copyToClipboard(elementId: string) {
  const element = document.getElementById(elementId) as HTMLInputElement

  if (element) {
    const content = element.value

    console.log(content)
    navigator.clipboard
      .writeText(content)
      .then(() => {
        // alert('Contenido copiado al portapapeles: ' + content)
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles:', error)
      })
  }
}

export default copyToClipboard
