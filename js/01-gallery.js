import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map (({preview, original, description}) => {
    const galleryList =`
    <li>
    <a class="gallery__link" href="${original}">
    <img class = gallery__image src="${preview}" alt="${description} data-source="${original}">
    </a>
    </li>`;
    return galleryList;
})

gallery.insertAdjacentHTML('beforeend', galleryItem.join(''));

gallery.addEventListener("click", onClickImg);

function onClickImg(evt){
    evt.preventDefault();
    if(!evt.target.classList.contains("gallery__image")){
        return;
    }
   
   const Img = evt.target.dataset.source;
   openModal(Img)

}

function openModal(image){
let instance = null
const imageEl = `<img src="${image}">`;
instance = basicLightbox.create(imageEl, {
    onShow:() => document.addEventListener("keydown", onKeyDownModal), 
    onСlose:() => document.removeEventListener("keydown", onKeyDownModal)
})
instance.show();

function onKeyDownModal(evt){
    if(evt.code === "Escape")
    instance.сlose();
    }
    
}

