/**
 * Custom Library
 */
(function ($){
	// check is obj is empty
	$.isEmpty = function (value){
		var a = (typeof value === 'undefined');
		var b = value === null;
		var c = !value;
		console.log(a);
		console.log(b);
		console.log(c);
		return ( a || b || c);
	};
		
	$.fn.contains = function (arrayObj, value){
		var i = arrayObj.length;
	    while (i--) {
	        if (this[i] === obj) {
	            return true;
	        }
	    }
	    return false;
	};
	
	// generate a key
	$.generateKey =  function (prefixString, keylength){
		var d = new Date();
		var m = d.getUTCMonth() + '';
		var day = d.getUTCDate();
		var y = d.getUTCFullYear() + '';
		
		if (!prefixString)
			prefixString = 'site-key-';
		
		if (prefixString.length > 20)
			prefixString = prefixString.substring(0, 5);

		if ((!keylength || keylength < 5) || keylength > 12)
			keylength = 5;
		
		var text = $.randomString(keylength);
		return prefixString + y + m + day + text;
	}
	
	//generate ramdom string
	$.randomString = function (keylength){
		
		var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		
		if ((!keylength || keylength < 5) || keylength > 64)
			keylength = 5;
		
		// all starting values are letters		
		var key = alpha.charAt(Math.floor(Math.random() * alpha.length));
		for( var i=0; i < keylength - 1; i++ ){
			key += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return key;
	}
	
}(jQuery));