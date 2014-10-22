function getJSON(url, cb){	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onload = function(){
		cb(JSON.parse(xhr.responseText));		
	};
	xhr.send();
}


