var url = "http://api.openweathermap.org/data/2.5/forecast/city?id=4684888&APPID=70ce0c9419771e70b99f32bb1ad519fd"
// $.getJSON(url).then(function(data) {
//     console.log(data);
//     // alert("City: "+data.city.name);
//      $( "body" ).append( document.createTextNode( "City: "+data.list[0].key) );

// });

// $.each( obj, function( key, value ) {
//   alert( key + ": " + value );
// });

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
// <script>
// $(document).ready(function(){
//     $("div").children().css({"color": "red", "border": "2px solid red"});
// });

(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });
    });
})();