function openMenu() {
  var x = document.getElementById("topNav");
  if (x.className === "header__nav") {
    x.className += " responsive";
  }
  else {
    x.className = "header__nav";

  }
}


///text gradient 
color1 = {
  r: 210,
  g: 35,
  b: 39
}
color2 = {
  r: 224,
  g: 105,
  b: 0
}

$(".gradient").each(function (index, element) {
  var title = $(this),
    titleText = $(this).text(),
    titleTextArray = titleText.split(''),
    colorDelta;

  colorDelta = {
    r: (color2.r - color1.r) / titleTextArray.length,
    g: (color2.g - color1.g) / titleTextArray.length,
    b: (color2.b - color1.b) / titleTextArray.length
  }

  titleText = "";
  for (var i = 0; i < titleTextArray.length; i++) {

    textColor = {
      r: Math.round(color1.r + colorDelta.r * i),
      g: Math.round(color1.g + colorDelta.g * i),
      b: Math.round(color1.b + colorDelta.b * i)
    }

    titleText += "<span style ='color:rgb(" +
      textColor.r + ", " +
      textColor.g + ", " +
      textColor.b + "" +
      ");'>" + titleTextArray[i] + "</span>";
  }

  title.html(titleText);
});


//smooth scrolling
$(document).ready(function () {
  $("a").click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });
});


//lazy img loading
function init() {
  var imgDefer = document.querySelectorAll('[data-src]');
  console.log(document.querySelectorAll('[data-src]'));
  var style = "background-image: url({url})";
  for (var i = 0; i < imgDefer.length; i++) {
    imgDefer[i].setAttribute('style', style.replace("{url}", imgDefer[i].getAttribute('data-src')));
    console.log(imgDefer[i].getAttribute('data-src') + "loaded!")
  }
}
window.onload = init();


//map
var map;
function initMap() {
  window.onload = function() {
  map = new google.maps.Map(
    document.getElementById('map'),
    { center: new google.maps.LatLng(40.741895, -73.989308), zoom: 11 });
  var icon = 'img/pin.png';

  var features = [
    {
      position: new google.maps.LatLng(40.728157, -74.077644),
      content: '<h2>Location 1</h2> <p>Pellentesque eget nunc sit met urna ullamcorper fermenttum et eu leo</p>'
    }, {
      position: new google.maps.LatLng(40.657983, -74.238227),
      content: '<h2>Location 2</h2> <p>Pellentesque eget nunc sit met urna ullamcorper fermenttum et eu leo</p>'
    }, {
      position: new google.maps.LatLng(40.803883, -74.368781),
      content: '<h2>Location 3</h2> <p>Pellentesque eget nunc sit met urna ullamcorper fermenttum et eu leo</p>'
    }, {
      position: new google.maps.LatLng(40.6695618, -73.9020236),
      content: '<h2>Location 4</h2> <p>Pellentesque eget nunc sit met urna ullamcorper fermenttum et eu leo</p>'
    }, {
      position: new google.maps.LatLng(40.738153, -73.681420),
      content: '<h2>Location 5</h2> <p>Pellentesque eget nunc sit met urna ullamcorper fermenttum et eu leo</p>'
    },
  ];

  function addMarker(item) {
    const marker = new google.maps.Marker({
      position: item.position,
      map: map,
      icon: icon
    });

    if (item.content) {
      const infoWindow = new google.maps.InfoWindow({
        content: item.content
      });
      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      })
    }
  }
  for (let index = 0; index < features.length; index++) {
    addMarker(features[index]);

  }
  //features.forEach(item => addMarker(item));
};
};

initMap();