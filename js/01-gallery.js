import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map (({preview, original, description}) => {
    const galleryList =`<li><img src="${preview}" alt="${description} "></li>`;
    return galleryList;
})

gallery.insertAdjacentHTML('beforeend', galleryItem.join(''));



console.log(gallery)