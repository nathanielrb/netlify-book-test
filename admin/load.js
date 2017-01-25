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


if(book)
  document.write("<base href='/netbook2/_books/" + book + "/' />");
else
  document.write("<base href='/netbook2/admin/' />");
