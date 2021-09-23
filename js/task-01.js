const categories = document.getElementById('categories')
console.log('в списке',categories.children.length,'категории')
document.querySelectorAll("h2").forEach(elem => console.log(`Категория: ${elem.textContent}, Количество элементов: ${elem.nextElementSibling.children.length}`));
