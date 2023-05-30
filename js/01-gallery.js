import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGelleryItems(Items) {
    return galleryItems
        .map(item => {
        return `
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
     />
    </a>
    </li>
    `;
    })
        .join('');
 }
 
const gelleryItemsList = document.querySelector('.gallery');
gelleryItemsList.insertAdjacentHTML('afterbegin', createGelleryItems(galleryItems)); 

const onImageClick = document.querySelector('gallery__link');
onImageClick.addEventListener('click', (event) => {
    event.preventDefault();
})
