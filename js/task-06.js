// const inputColor = document.getElementById('validation-input');
const input = document.getElementById('validation-input');
input.addEventListener('blur', checkColor);
const inputLength = input.dataset.length;
    console.log(inputLength)
function checkColor(ev){
if(ev.currentTarget.value.length === Number(inputLength)){
input.classList.add('valid');
input.classList.remove('invalid');
}
else{input.classList.remove('valid');
input.classList.add('invalid')}
}