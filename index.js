const choices = new Choices('.select', {
  searchEnabled: false
});

const elementsPhone = document.querySelectorAll('.input-phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
  placeholder: '+{7}(000)000-00-00'
};
elementsPhone.forEach(element => {
  IMask(element, maskOptions);
})


const products = new Swiper ('.swiper-container', {
  slidesPerView: 1,
  autoHeight: true,
  // pagination: {
  //   clickable: true,
  //   el: '.swiper-pagination',
  // },
})

// Табы
const onTabClick = function(idContainer, idElement) {
  let dataAttribute = `[data-${idContainer}`;
  for (let item of document.querySelectorAll(`${dataAttribute}-name`)) {
    item.classList.remove('active');
  }
  for (let item of document.querySelectorAll(`${dataAttribute}-tab`)) {
    item.classList.remove('active');
  }
  document.querySelector(`${dataAttribute}-name=${idElement}]`).classList.add('active');
  document.querySelector(`${dataAttribute}-tab=${idElement}]`).classList.add('active');
}

let tabsName = document.querySelectorAll('.tab-name');
tabsName.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    onTabClick(event.target.parentElement.id, event.target.dataset.menuTabsName)
  })
})

// Галерея

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  selector: '.gallery-image'
});

// Карта

function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}