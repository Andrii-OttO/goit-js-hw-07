const inputHolder = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output')
console.log(inputHolder.focus)
inputHolder.addEventListener('input',keyUpListener);
function keyUpListener (event) {
    if(event.target.value === ''){
        output.textContent = 'незнакомец'
    }else{
output.textContent = event.target.value
};
}


