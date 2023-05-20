import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map (({preview, original, description}) => {
    const galleryList =`
    <li class="gallery__item>
    <a class="gallery__link" href="${original}">
    <img class = gallery__image src="${preview}" alt="${description}" data-source="${original}" >
    </a>
    </li>`;
    return galleryList;
})

gallery.insertAdjacentHTML('beforeend', galleryItem.join(''));

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250, 
});
