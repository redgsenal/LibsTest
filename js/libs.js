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
		var m = d.getUTCMonth();
		var day = d.getUTCDate() + '';
		var y = d.getUTCFullYear() + '';
		
		if (!prefixString)
			prefixString = 'site-key-';
		
		if (prefixString.length > 20)
			prefixString = prefixString.substring(0, 5);

		if ((!keylength || keylength < 5) || keylength > 12)
			keylength = 5;
		
		m = ((m < 10) ? '0' + m + '' : m + '');
		
		var text = $.randomString(keylength);
		return prefixString + y + m + day + text;
	}
	
	//generate ramdom string
	$.randomString = function (keylength){
		
		var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		var possible = alpha + '0123456789';
		
		if ((!keylength || keylength < 5) || keylength > 64)
			keylength = 5;
		
		// all starting values are letters		
		var key = alpha.charAt(Math.floor(Math.random() * alpha.length));
		for( var i=0; i < keylength - 1; i++ ){
			key += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return key;
	}
	
	// display a box a the center screen
	$.fn.popupBox = {		
		// create a wrapper here
		POP_UP_BOX: $('<div class="popupbox"></div>'),
		init: function($content){
			var $box = $.fn.popupBox.POP_UP_BOX;
			var $body = $('body').css({'background-color': 'gray'}).append($box);
			$box.append($content);
			return this;
		},
		show: function(){
			var $box = $.fn.popupBox.POP_UP_BOX;
			var x = ($(window).width() / 2) - ($box.outerWidth() / 2);
			var y = ($(window).height() / 2) - ($box.outerHeight() / 2);
			var px = Math.floor((x / $(window).width()) * 100) + '%';
			var py = Math.floor((y / $(window).height()) * 100) + '%';
			$box.css({left: px, top: py});
			if (!$box.is(":visible"))
				$box.fadeIn();
			return this;
		}
	}
	
	$(window).resize(function(){
		$.fn.popupBox.show();
	});
}(jQuery));