


//COUNTDOWN CLOCK

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(158 * 24 * 60 * 60 * 1000 + Date.parse(new Date()));
initializeClock('clockdiv', deadline);



//COUNTDOWN CLOCK END

//START FIXED COUNTDOWN

var end = new Date('08/21/2017 9:34 AM')
//get UTC

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById('countdown').innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById('countdown').innerHTML = days + 'days ';
            document.getElementById('countdown').innerHTML += hours + 'hrs ';
            document.getElementById('countdown').innerHTML += minutes + 'mins ';
            document.getElementById('countdown').innerHTML += seconds + 'secs';
        }

        timer = setInterval(showRemaining, 1000);

//END FIXED COUNTDOWN

//MAP ELEMENTS
/*
  //Eclipse Path Plot Data
  //<![CDATA[
  var elements = new Array(
  2457987.26852, 18.0, -3.0, 3.0,   68.8,   68.8,
   -0.12957101,   0.54064262,  -0.00002940,  -0.00000810,
    0.48541600,  -0.14163999,  -0.00009050,   0.00000205,
   11.86695957,  -0.01362200,  -0.00000200,
   89.24542999,  15.00393963,   0.00000000,
    0.54209298,   0.00012410,  -0.00001180,
   -0.00402500,   0.00012340,  -0.00001170,
    0.00462220,   0.00459920
  );

  var eclipseInfos = "TSE&nbsp;2017&nbsp;General&nbsp;Circumstances:</span>";
  eclipseInfos += "<ul type=\"square\">";
  eclipseInfos += "<li>Type:&nbsp;Total</li>";
  eclipseInfos += "<li>Date:&nbsp;2017 August 21</li>";
  eclipseInfos += "<li>Time:&nbsp;18:25:31.4&nbsp;UT</li>";
  eclipseInfos += "<li>Magnitude:&nbsp;1.03060</li>";
  eclipseInfos += "<li>Gamma:&nbsp;0.43671</li>";
  eclipseInfos += "<li>Saros:&nbsp;145</li>";
  eclipseInfos += "<li>Max.&nbsp;Duration:&nbsp;02m40s</li>";
  eclipseInfos += "<li>&Delta;T:&nbsp;68.8s &mdash; &sigma; = &plusmn;2s [&plusmn;0.0&deg;]</li>";
  //]]>

*/

//BEGIN MAP EVENT HANDLING


//INITIALIZE MAP
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40, lng: -100},
    scrollwheel: false,
    zoom: 5,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#282725'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#F27B0C'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#0C66EB'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });
}


//API Search Function

$(document).ready(function() {
 $("button").click(function() {
   checkLocation()
 })
})

//var city = "Potomac"
//var state = "MD"
//var loc = "Denver, CO"

function checkLocation(){
    if ($("input").val() !=="") {

     //var url ="http://api.usno.navy.mil/eclipses/solar?date=8/21/2017&loc=" + city + ", " + state + "&height=117&format=json"
    var url ="http://api.usno.navy.mil/eclipses/solar?date=8/21/2017&loc=" + $("input").val() + "&height=117&format=json"
    url += $("input").val()
       $.get(url).then(function(data){
        console.log(data.description)
        console.log(data.city)
        console.log(data.state)
        console.log(data.lat)
        console.log(data.lon)
        console.log(data.local_data[0].phenomenon)
        console.log(data.local_data[0].time)
        console.log(data.local_data[0].altitude)
        console.log(data.local_data[0].azimuth)
        console.log(data.local_data[1].phenomenon)
        console.log(data.local_data[1].time)
        console.log(data.local_data[1].altitude)
        console.log(data.local_data[1].azimuth)
        console.log(data.local_data[2].phenomenon)
        console.log(data.local_data[2].time)
        console.log(data.local_data[2].altitude)
        console.log(data.local_data[2].azimuth)
        console.log(data.obscuration)
        console.log(data.duration)

        $('.description').text(data.description)
        $('.city').text(data.city)
        $('.state').text(data.state)
        $('.lat').text(Math.floor(data.lat))
        $('.lon').text(Math.floor(data.lon))
        $('.start0').text(data.local_data[0].phenomenon)
        $('.time0').text(data.local_data[0].time)
        $('.altitude0').text(data.local_data[0].altitude)
        $('.azimuth0').text(data.local_data[0].azimuth)
        $('.start1').text(data.local_data[1].phenomenon)
        $('.time1').text(data.local_data[1].time)
        $('.altitude1').text(data.local_data[1].altitude)
        $('.azimuth1').text(data.local_data[1].azimuth)
        $('.start2').text(data.local_data[2].phenomenon)
        $('.time2').text(data.local_data[2].time)
        $('.altitude2').text(data.local_data[2].altitude)
        $('.azimuth2').text(data.local_data[2].azimuth)
        $('.obscuration').text(data.obscuration)
        $('.duration').text(data.duration)


      })
     .catch(function(error) {
       console.log(error);
     })
   } else {
     alert("That's not an available location!")
   }
}

console.log(checkLocation())



//START GOOGLE MAPS SCRIPT
/*var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: new google.maps.LatLng(40,-100),
          mapTypeId: 'satellite'
        });

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);
      }

      // Loop through the results array and place a marker for each
      // set of coordinates.
      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }
      }
*/
