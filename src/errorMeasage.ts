let errorMesage: string = ''

const displayErrorMessage = ({
  element,
  message
}: {
  element: HTMLParagraphElement
  message: string
}) => {
  errorMesage = message
  element.innerText = message
}

export default displayErrorMessage
