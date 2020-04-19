export const newElement = (id: string) => {
  const element = document.createElement('div')
  element.id = id
  return element
}
