var messageArray = ['Aberto todos os dias. 8h-21h']
var textPosition = 0
var speed = 120

typewriter = () => {
  document.querySelector('#message').innerHTML = messageArray[0].substring(
    0,
    textPosition
  )

  if (textPosition++ != messageArray[0].length) {
    setTimeout(typewriter, speed)
  }
}
window.addEventListener('load', typewriter)
