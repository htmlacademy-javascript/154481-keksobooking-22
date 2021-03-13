import { ROOM_TYPES_MAP, getAds } from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvasFragment = document.createDocumentFragment();

const offers = getAds();

const createFeatures = (array, elememt) => {
  let fragment = document.createDocumentFragment();
  const popupFeatures = elememt.querySelector('.popup__features');
  popupFeatures.innerHTML = '';

  array.forEach((elememt) => {
    let feature = document.createElement('li');
    feature.className = `popup__feature popup__feature--${elememt}`;
    fragment.appendChild(feature);
  });

  popupFeatures.appendChild(fragment);
}

const createPhotos = (array, elememt) => {
  let fragment = document.createDocumentFragment();
  const popupPhotos = elememt.querySelector('.popup__photos');
  popupPhotos.innerHTML = '';

  array.forEach((elememt) => {
    let photo = document.createElement('img');
    photo.src = elememt;
    photo.className = 'popup__photo';
    photo.width = 45;
    photo.height = 40;
    photo.alt = 'Фотография жилья';
    fragment.appendChild(photo);
  });

  popupPhotos.appendChild(fragment);
}



offers.forEach(({author, offer}) => {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = ROOM_TYPES_MAP[offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  card.querySelector('.popup__description').textContent = offer.description;
  card.querySelector('.popup__avatar').src = author;

  createFeatures(offer.features, card);
  createPhotos(offer.photos, card);

  mapCanvasFragment.appendChild(card);
});

mapCanvas.appendChild(mapCanvasFragment);
