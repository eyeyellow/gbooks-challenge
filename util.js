export function resizeContainer() {
  const container = document.querySelector('.container')
  const currentHeight = window.getComputedStyle(container, null).height
  const heightValue = parseInt(currentHeight, 10)
  container.style.height = `${(heightValue + 2120)}px`
}
