var url = 'http://api.wunderground.com/api/b87f952cedc29268/forecast10day/q/CA/San_Francisco.json';

//function getJSON(url, cb){	
//	var xhr = new XMLHttpRequest();
//	xhr.open('GET', url);
//	xhr.onload = function(){
//		cb(JSON.parse(xhr.responseText));		
//	};
//	xhr.send();
//}

function getJSONP(url, cbName) {
   var $script = document.createElement('script');
   $script.src = url + '?callback=' + cbName;
   document.body.appendChild($script);
}

function myAwesomeFunction(data){
        console.log(data);
};

getJSONP(url, 'myAwesomeFunction');
