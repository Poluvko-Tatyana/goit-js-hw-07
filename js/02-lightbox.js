import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map (({preview, original, description}) => {
    const galleryList =`
    <li class="gallery__item>
    <a class="gallery__link" href="${original}">
    <img class = gallery__image src="${preview}" alt="${description} data-source="${original}">
    </a>
    </li>`;
    return galleryList;
})

gallery.insertAdjacentHTML('beforeend', galleryItem.join(''));
function onClickImg(evt){
    evt.preventDefault();
    if(!evt.target.classList.contains("gallery__image")){
        return;
    }
   
   const Img = evt.target.dataset.source;

   galaryA (Img)


}

function galaryA (image){
 let galleryA = new SimpleLightbox('.gallery__link');
gallery.on(`<img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg">`, function () {
    
});
}