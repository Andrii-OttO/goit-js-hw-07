const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const list = document.querySelector('#ingredients');
const listEl = ingredients.map(el=>{
  const li = document.createElement('li')
  li.textContent = el
  return li
})
list.append(...listEl)
  // ////////////////////

// const arrey = [];
// ingredients.forEach(elem=>{
//   const listEl = document.createElement('li')
//   listEl.textContent = elem
//   arrey.push(listEl)
// })
// list.append(...arrey)
// console.log(ingredients)





