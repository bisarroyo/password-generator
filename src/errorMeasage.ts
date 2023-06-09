const displayErrorMessage = ({
  element,
  message
}: {
  element: HTMLParagraphElement
  message: string
}) => {
  element.innerText = message
}

export default displayErrorMessage
