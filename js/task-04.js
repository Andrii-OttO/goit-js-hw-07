const decrem = document.querySelector('[data-action="decrement"]');
const increm = document.querySelector('[data-action="increment"]');
const finelValue = document.querySelector('#value');
let counterValue = 0;
const decremBtn = () => (finelValue.textContent = counterValue -= 1);
const incremBtn = () => (finelValue.textContent = counterValue += 1);
decrem.addEventListener('click', decremBtn);
increm.addEventListener('click', incremBtn);
//const multiBtn = document.querySelector('#multiple');
//const firstCallback = () => alert('First callback!')
//multiBtn.addEventListener('click', firstCallback);
//================
