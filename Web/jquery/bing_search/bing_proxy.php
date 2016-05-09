<?php

/****

* PHP proxy for using the Bing Search API with AJAX

*/

$acctKey = 'B4gbhhiGzvlUhN/dhDfnWLtKSoKbK7QA/1YdWBD+PvY';

$rootUri = 'https://api.datamarket.azure.com/Bing/Search';

// Get the query. Default to 'sushi'.

$query = ($_GET['q']) ? $_GET['q'] : 'sushi';

// Get the service operation. Default to Web.

$serviceOp = ($_GET['sop']) ? $_GET['sop'] : 'Web';

// Get the market. Default to en-us.

$market = ($_GET['market']) ? $_GET['market'] : 'en-us';

// Encode the query along with the single quotation marks that must surround it.

$query = urlencode("'$query'");

// Encode the market along with the single quotation marks that must surround it.

$market = urlencode("'$market'");

// Construct the full URL for the query.

$requestUri = "$rootUri/$serviceOp?\$format=json&Query=$query&Market=$market";
//echo $requestUri;

// Encode the credentials and create the stream context.

$auth = base64_encode("$acctKey:$acctKey");

$data = array(

'http' => array(

'request_fulluri' => true,

// ignore_errors can help debug – remove for production. This option added in PHP 5.2.10

'ignore_errors' => true,

'header' => "Authorization: Basic $auth")

);

$context = stream_context_create($data);

// Get the response from Bing.

$response = file_get_contents($requestUri, 0, $context);

// Send the response back to the browser.

echo $response;

?>