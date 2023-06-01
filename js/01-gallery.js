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
 
const galleryItemsList = document.querySelector('.gallery');
galleryItemsList.insertAdjacentHTML('afterbegin', createGelleryItems(galleryItems)); 

galleryItemsList.addEventListener('click', onClickEvent);

function onClickEvent(event) {
    event.preventDefault();
    const itemOnClick = event.target;
    if (!itemOnClick.classList.contains('gallery__image')) {
        return;
    }

    
    const instance = basicLightbox.create(`
    <img src="${itemOnClick.dataset.source}" width="800" height="600">
`)
    instance.show()
    }