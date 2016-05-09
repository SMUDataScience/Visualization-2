/*! Bing Search Helper v1.0.0 - requires jQuery v1.7.2 */

$(function() {

  // Attaches a click handler to the button.
  $('#bt_search').click(function(e) {

    e.preventDefault();

    // Clear the results div.

    $('#results').empty();

    var query = $('#query').val();
    console.log(query);

    var serviceOp = $('input[name=service_op]:checked', '#my_form').val();

    // don't run empty results
    if (query) {
      search(query, serviceOp);
    }
  });

  // Performs the search.

  function search(query, serviceOp) {


    // Establish the data to pass to the proxy.
  var data = { q: 
  query, sop: 
  serviceOp, market: 
    'en-us'
  };

    // Calls the proxy, passing the query, service operation and market.

  $.getJSON('bing_proxy.php', data, function(obj) {

    if (obj.d !== undefined) {

      var items = obj.d.results;

      for (var k = 0, len = items.length; k < len; k++) {

        var item = items[k];

        switch (item.__metadata.type) {

        case 'WebResult':

          showWebResult(item);

          break;

        case 'ImageResult':

          showImageResult(item);

          break;
        }
      }
    }
  });
}

// Shows one item of Web result.

function showWebResult(item) {

  var p = document.createElement('p');

  var a = document.createElement('a');

  a.href = item.Url;

  $(a).append(item.Title);

  $(p).append(item.Description);

  // Append the anchor tag and paragraph with the description to the results div.

  $('#results').append(a, p);
}

// Shows one item of Image result.

function showImageResult(item) {

  var p = document.createElement('p');

  var a = document.createElement('a');

  a.href = item.MediaUrl;

  // Create an image element and set its source to the thumbnail.

  var i = document.createElement('img');

  i.src = item.Thumbnail.MediaUrl;

  // Make the object that the user clicks the thumbnail image.

  $(a).append(i);

  $(p).append(item.Title);

  // Append the anchor tag and paragraph with the title to the results div.

  $('#results').append(a, p);
}

});
