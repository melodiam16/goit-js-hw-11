import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPicturesByQuery } from './js/pixabay-api';
import cardsMarkup from './js/render-functions';

const searchInput = document.querySelector('.input-js');
const searchForm = document.querySelector('#searchForm');
export const cardsArea = document.querySelector('.markup-js');
const loader = document.querySelector('.loader');
const content = document.querySelector('.content');

searchForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (!query) {
    alert('Please enter a search term');
    return;
  }

  loader.classList.remove('hidden');
  content.classList.add('hidden');

  const parameters = {
    API_KEY: '44976871-26e069ad13948ce040aac9258',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    query: query,
  };

  getPicturesByQuery(query, parameters)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        cardsMarkup(data.hits);
        searchForm.reset();
        let lightbox = new SimpleLightbox('.markup-js a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        lightbox.refresh();
      }
    })
    .catch(err => console.error('Fetch Error: ', err))
    .finally(() => {
      loader.classList.add('hidden');
      content.classList.remove('hidden');
    });
}
