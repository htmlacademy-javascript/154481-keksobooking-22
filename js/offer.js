import { getAds } from './data.js';

const MAP_CANVAS = document.querySelector('#map-canvas');
const CARD_TEMPLATE = document.querySelector('#card').content.querySelector('.popup');

const OFFERS = getAds();

const MAP_CANVAS_FRAGMENT = document.createDocumentFragment();

OFFERS.forEach((ad) => {
  const CARD = CARD_TEMPLATE.cloneNode(true);

  let roomsType = null;
  switch (ad.offer.type) {
    case 'palace':
      roomsType = 'Дворец';
      break;
    case 'flat':
      roomsType = 'Квартира';
      break;
    case 'house':
      roomsType = 'Дом';
      break;
    case 'bungalow':
      roomsType = 'Бунгало';
      break;
    default:
      roomsType = null;
  }






  /*const FEATURES = ad.offer.features;
  console.log(FEATURES);

  let popupFeatures = CARD.querySelectorAll('.popup__feature');

  //let filt = popupFeatures.filter((feature) => {!feature.classList.contains('popup__feature--' + FEATURES[0])});
  //console.log(filt);

  popupFeatures.forEach((feature) => {
    for (let i = 0; i < FEATURES.length; i++) {
      if (!feature.classList.contains('popup__feature--' + FEATURES[i])) {
        feature.classList.add('hidden');
      }
    }
  });


  console.log(popupFeatures);




  // FEATURES.forEach ( (feature, index) => {
  //   for (let i = 0; i < popupFeatures.length; i++) {
  //     if (!popupFeatures[i].classList.contains('popup__feature--' + FEATURES[index])) {
  //       popupFeatures[i].classList.add('hidden');
  //     }
  //   }
  // });
*/









  CARD.querySelector('.popup__title').textContent = ad.offer.title;
  CARD.querySelector('.popup__text--address').textContent = ad.offer.address;
  CARD.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  CARD.querySelector('.popup__type').textContent = roomsType;
  CARD.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  CARD.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  CARD.querySelector('.popup__description').textContent = ad.offer.description;
  CARD.querySelector('.popup__avatar').src = ad.author;





  const POPUP_PHOTOS = CARD.querySelector('.popup__photos');
  const POPUP_PHOTO = POPUP_PHOTOS.querySelector('.popup__photo');
  for (let i = 0; i < ad.offer.photos.length; i++) {
    if (POPUP_PHOTOS.children.length == ad.offer.photos.length || i == 0) {
      POPUP_PHOTO.src = ad.offer.photos[i];
    } else {
      let POPUP_PHOTO_CLONE = POPUP_PHOTOS.querySelector('.popup__photo').cloneNode();
      POPUP_PHOTO_CLONE.src = ad.offer.photos[i];
      POPUP_PHOTOS.appendChild(POPUP_PHOTO_CLONE);

      //let newPhoto = POPUP_PHOTOS.appendChild(POPUP_PHOTO_CLONE);
      //newPhoto.src = ad.offer.photos[i];
    }
  }






  MAP_CANVAS_FRAGMENT.appendChild(CARD);
});

MAP_CANVAS.appendChild(MAP_CANVAS_FRAGMENT);

