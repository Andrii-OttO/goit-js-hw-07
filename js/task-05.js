const inputHolder = document.querySelector('input#name-input');
//console.log(inputHolder)
const output = document.querySelector('span#name-output')
//console.log(output)
console.log(inputHolder.focus)

// inputHolder.addEventListener('keypress',keyUpListener);
// function keyUpListener (event) {
// output.textContent = event.target.value
// }
inputHolder.addEventListener('keypress',keyUpListener);
function keyUpListener (event) {
    if(event.target.value === ''){
        output.textContent = 'незнакомец'
    }else{
output.textContent = event.target.value
};
}


