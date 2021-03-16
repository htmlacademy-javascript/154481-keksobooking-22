const notice = document.querySelector('.notice');
const type = notice.querySelector('#type');
const price = notice.querySelector('#price');
const timeIn = notice.querySelector('#timein');
const timeOut = notice.querySelector('#timeout');

const TYPE_PRICE_MAP = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};



type.addEventListener('change', (evt) => {
  let target = evt.target;
  let minPrice = TYPE_PRICE_MAP[target.value];

  price.placeholder = minPrice;
  price.min = minPrice;
});


timeIn.addEventListener('change', (evt) => timeOut.selectedIndex = evt.target.selectedIndex);

timeOut.addEventListener('change', (evt) => timeIn.selectedIndex = evt.target.selectedIndex);
