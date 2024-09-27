import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const API_KEY = 'YOUR_PIXABAY_API_KEY'; 
const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = event.target.query.value;
  fetchImages(query);
});

async function fetchImages(query) {
  const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
  const data = await response.json();
  
  if (data.hits.length === 0) {
    iziToast.error({ title: 'Error', message: 'No images found. Please try again!' });
    return;
  }

  renderGallery(data.hits);
}

function renderGallery(images) {
  gallery.innerHTML = images.map(image => `
    <div class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <p>Likes: ${image.likes} Views: ${image.views} Comments: ${image.comments} Downloads: ${image.downloads}</p>
    </div>
  `).join('');

  const lightbox = new SimpleLightbox('.gallery-item a');
  lightbox.refresh();
}
