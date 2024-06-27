let amount = document.querySelector(`input`);
let boxes = document.querySelector('#boxes')
let buttonCreate = document.querySelector('[data-create]')
let buttonDestroy = document.querySelector('[data-destroy]')
// console.log(amount, boxes, buttonCreate, buttonDestroy);


function createBoxes() {
  
  let createdBox = [];
  const numberOfBoxes = parseInt(amount.value);
  boxes.innerHTML = ''; 
  for (let i = 0; i < numberOfBoxes; i++) {
    let box = document.createElement('div');
    box.classList.add('box-class');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    createdBox.push(box);
    
  }
  boxes.append(...createdBox);
  // console.log(createBoxes);
}

  function destroyBoxes() {
    boxes.innerHTML = ''; 
    amount.value = "";

  }

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);



