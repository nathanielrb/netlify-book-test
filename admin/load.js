var parseQueryString = function() {
    
    var str = window.location.search;
    var objURL = {};
    
    str.replace(
	new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
	function( $0, $1, $2, $3 ){
	    objURL[ $1 ] = $3;
	}
    );
    return objURL;
};

var params = parseQueryString();
var book = params["b"];


if(!book)
    alert("no book chosen.")



document.write("<base href='/netbook/_books/" + book + "/' />");
