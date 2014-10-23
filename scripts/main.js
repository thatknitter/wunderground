var url = 'http://api.wunderground.com/api/b87f952cedc29268/forecast10day/q/37217.json';

function getJSONP(url, cbName) {
   var $script = document.createElement('script');
   $script.src = url + '?callback=' + cbName;
   document.body.appendChild($script);
}

function arrayGrab(data){
        console.log(data);
        var data = data.forecast.simpleforecast.forecastday;
        var $target = document.querySelector('ul');
        for (var i = 0; i < 6; i++){
            addItemToList($target, data[i]);

         }
}


function addItemToList($list, items){
  // var $list = arguments[0]
  // var items = arguments[1]
        
 var $li = document.createElement('li');
 var $icon = document.createElement('img');
 var $weekday = document.createElement('h3');
 var $high = document.createElement('p');
 var $low = document.createElement('p');

    $weekday.innerHTML = items.date.weekday;
    $high.innerHTML = items.high.fahrenheit;
    $low.innerHTML = items.low.fahrenheit;
    $icon.src = items.icon_url;
    $li.appendChild($weekday);
    $li.appendChild($icon);
    $li.appendChild($high);
    $li.appendChild($low);
    $list.appendChild($li);
}

document.addEventListener("DOMContentLoaded", function(){
  
  getJSONP(url, 'arrayGrab');
  
});
