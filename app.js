window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocator) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
      })
    }
});