
function initMap() {
  var mapElem = document.getElementById('google-map');

  if (mapElem) {
    var map = new google.maps.Map(mapElem, {
      center: {lat: 34.737427, lng: -111.761907},
      scrollwheel: false,
      zoom: 9,
      disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
      position: {lat: 34.867427, lng: -111.761907},
      map: map,
      title: 'Sedona'
    });
  }
}

var titleBtn = document.querySelector('.title-btn'),
searchForm = document.querySelector('.search-form');

if (titleBtn) {
  titleBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    searchForm.classList.toggle('search-form-closed');
  });
}
