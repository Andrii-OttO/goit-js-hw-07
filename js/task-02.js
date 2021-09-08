const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  //const listEl = document.createElement('li')
  //listEl.textContent//('ingredients')
  //listEl.length(6)
  //console.log(listEl)
 
// listS.createElement('li')

// for(let i = 0; i<=ingredients.length; i++){
//   li.push(i)
// }
//for(leti = 0; i<=ingredients.length; i++){}
 // var arr = new Array();
// for (let i=0;i<ingredients.length;i++)
// {  
//     listEl.push(ingredients(i));

// }
// 
//const listS = document.querySelector("#ingredients")
//===================
// const listS = ingredients.map(option =>{
//   const listEl = document.createElement('li');
//   listEl.append(...ingredients)
//   return listEl
// })


// console.log(listS)
//const List = document.querySelector('ul')

const list= document.querySelector('#ingredients')
const arr= []
ingredients.map(option=>{
const listEl = document.createElement('li')
listEl.textContent= option
arr.push(listEl)
})
list.append(...arr)
console.log(list)


// var div = document.getElementById('list');
// var ul = document.createElement('ul');
// div.appendChild(ul);
// var data = ["Первая строка", "Вторая строка", "n строка"];

// for (var i = 0, ln = data.length; i < ln; i++) {
//   var li = document.createElement('li');
//   li.innerHTML = data[i];
//   ul.appendChild(li);
// }
// console.log(div)
//===========
// const currentList = document.querySelector('#ingredients');
// const arrEl = [];
// ingredients.map(elem => {
//   const liEl = document.createElement('li');
//   liEl.textContent = elem;
//   arrEl.push(liEl)
// })
// currentList.append(...arrEl)
