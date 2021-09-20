const input = document.getElementById('font-size-control');
const changeTextSize = document.getElementById('text');
input.addEventListener("input", inputRange);
function inputRange(elem){
    changeTextSize.style.fontSize = elem.currentTarget.value + 'px'
}
