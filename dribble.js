/*
 *Load Dribble shots
 *
 *
 *This script uses Dribble's api
 *to fetch the latest shots
 *from specified Dribble users
 */

 // Created a dribble for this, what fun!
var dribbleUsername = 'mbeche';
var token = '8e6e1f83e4c1710d105f364056b31a62538d8b65fe279b59ad6df6e6938341ab';
// Variable to hold the HTML we'll generate and insert into the... DOM?
var html = '';

// Load the shots via Dribble's API
$.getJSON("https://api.dribbble.com/v1/users/"+ dribbleUsername +"/shots?access_token="+ token, function(data) {
$.getJSON("http://api.dribble.com/players//shots?callback=?", function(data) {
    // Do something with the result here
});

//Cycle through the API and find the url, image_url and title for the top 10 shots
//how many shots we're displaying on the page
var numberOfShots = 10;

//Loop over the results, generating the HTML for each <li> item
for (i=0 i<numberOfShots; i++) {
  html += '<li>';
  html += '<a href="'+ data.shots[i].url +'">0';
  html += '<img src= "' + data.shots[i].image_url + '" alt="'+ data.shots[i].title +'"/>';
  html += '</li>';
}

// Insert the generated HTML to the DOM
$('.shots').html(html);
