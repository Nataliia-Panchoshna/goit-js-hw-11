import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const query = event.target.elements.searchQuery.value.trim();
    if (!query) {
        iziToast.warning({
            title: "Warning",
            message: "Please enter a search term!",
            position: "topRight"
        });
        return;
    }
    
    clearGallery();
    
    try {
        const images = await fetchImages(query);
        
        if (images.length === 0) {
            iziToast.error({
                title: "Error",
                message: "Sorry, no images found. Please try another query!",
                position: "topRight"
            });
            return;
        }
        
        renderGallery(images);
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please try again later!",
            position: "topRight"
        });
    }
});
