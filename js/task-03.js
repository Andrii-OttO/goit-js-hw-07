const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  ///////////////
const listEl = document.querySelector('#gallery')
listEl.style.display = 'flex'
listEl.style.padding = '20px'
listEl.style.justifyContent = 'space-around'
listEl.style.listStyle = "none"
const imageList = ({url, alt}) => {
  return `<li><img class="photo" src="${url}" alt="${alt}"height="300" width="400"></li>`;
};
console.log(imageList)
const finelImageList = images.map(imageList).join('')
listEl.insertAdjacentHTML('afterbegin', finelImageList)
//console.log(listEl)
/////////////////////
// listEl.style.display = 'flex'
// listEl.style.padding = '20px'
// listEl.style.justifyContent = 'space-around'
// listEl.style.listStyle = "none"
// //listEl.forEach.style.margin = '20px'
// images.forEach(image=>{listEl.insertAdjacentHTML('afterbegin',`<li><img class="photo" src="${image.url}" alt="${image.alt}"height="300" width="400"></li>`)})
// console.log(images)