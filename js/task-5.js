const button = document.querySelector('.change-color');

const spanColor = document.querySelector('.color')

// console.log(spanColor);
button.addEventListener('click', handleColor);
function handleColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
