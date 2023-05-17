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


    // const source = evt.target.dataset.source
    // const gallerySource = galleryItems.find(({original}) => source === original)
    // console.log(gallerySource)

   
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()
}





