import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

let lightbox;

export function renderGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
                <img src="${webformatURL}" alt="${tags}" class="gallery-image">
            </a>
            <div class="image-info">
                <p><b>Likes:</b> ${likes}</p>
                <p><b>Views:</b> ${views}</p>
                <p><b>Comments:</b> ${comments}</p>
                <p><b>Downloads:</b> ${downloads}</p>
            </div>
        </li>
    `).join('');

    gallery.innerHTML = markup;

    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a');
    } else {
        lightbox.refresh();
    }
}

export function clearGallery() {
    gallery.innerHTML = '';
}