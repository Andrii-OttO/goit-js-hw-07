// const itemEl = document.querySelectorAll('#categories .item');
// itemEl.forEach(item => console.log(item));
// const itemEl = document.querySelectorAll('item.h2');
// itemEl.forEach(item => console.log("category:",item.h2));
// console.log(itemEl.classList)
//let categoriesItem = document.querySelectorAll('.li');
// categoriesItem (i=0; i>=li.length; i++){
//     return categoriesItem[i];
// }
//(console.log(categoriesItem[i])
document.querySelectorAll("h2").forEach(elem => console.log(`Категория: ${elem.textContent}, Количество элементов: ${elem.nextElementSibling.children.length}`))
