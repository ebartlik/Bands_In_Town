//Reads the HTML before reading the javascript
$(document).ready(function () {

  //Initializing firebase
  var config = {
    apiKey: "AIzaSyA34rCupaiOnfXRKBhsmgYsTc6Brp9ysew",
    authDomain: "beers-and-bands-rev-1.firebaseapp.com",
    databaseURL: "https://beers-and-bands-rev-1.firebaseio.com",
    projectId: "beers-and-bands-rev-1",
    storageBucket: "beers-and-bands-rev-1.appspot.com",
    messagingSenderId: "592809981196"
  };

  firebase.initializeApp(config);

//Create variable to reference the database
  var dataRef = firebase.database();

//When you click the "Let's Rock" Button...
  $("#letsRock").on("click", function (event) {
     $(".jumbotron").empty();
    

    
   // prevent form from submitting
    event.preventDefault();
    //Store value that user typed into variable artist
    var artist = $("#artist").val().trim();

    console.log(artist);

    var proxyURL = 'https://shielded-hamlet-43668.herokuapp.com/';
    //Are we still using this??
    var queryURL1 = 'http://beermapping.com/webservice/loccity/1cd5db8a402574bb7ecab4285b88793f/jersey+city&s=json'
    // var queryURL1 = 'http://beermapping.com/webservice/loccity/1cd5db8a402574bb7ecab4285b88793f/jersey+city&s=json'
    var queryURL2 = 'http://rest.bandsintown.com/artists/' + artist + '/events?app_id=1f631e0138387b85bc49eb32aa23ea48&artistname= ' + artist
    //var queryURL2 = 'http://rest.bandsintown.com/Drake/events?app_id=1f631e0138387b85bc49eb32aa23ea48&artistname=Drake' 
    // console.log(queryURL2);


    //AJAX call for beermapping, are we still using this???
    $.ajax({
      url: proxyURL + queryURL1,
      method: "GET",
      dataType: "xml",
    }).then(function (response) { });

    //AJAX call to Bands in Town API
    $.ajax({
      url: proxyURL + queryURL2,
      method: "GET"
      // dataType: "xml",
    }).then(function (response) {
      console.log(response);


      //Log Cities to Console
      for (i = 0; i < 12; i++) {
        console.log(response[i].venue.city);
      }

      //Log Concert Dates and Times to Console
      for (j = 0; j < 12; j++) {
        console.log(response[j].datetime);
      }

      //Log venue names to Console
      for (k = 0; k < 12; k++) {
        console.log(response[k].venue.name);
      }

      //Log Latitude to Console
      for (l = 0; l < 12; l++) {
        console.log(response[l].venue.latitude);
      }

      //Log Longitude to Console
      for (m = 0; m < 12; m++) {
       
      
      // datetimeConverted = moment("2010-01-01T05:06:07", ["YYYY", moment.ISO_8601]);
      
      console.log(dateTime);
      }

     
      //Convert JSON data to string objects
      var city = JSON.stringify(response[i].venue.city);
      console.log(city + "testing city");
      var dateTime = JSON.stringify(response[j].datetime);

       var testSplit = dateTime.split('T');
       console.log(testSplit[0]);

      // var testMoment = testSplit[1].moment('HH:mm');
      // console.log(testMoment);
      //testSplit[0]
      // console.log(typeof dateTime);
      dateTime= testSplit[0];
      console.log(dateTime);
      var venue = JSON.stringify(response[k].venue.name);

      
      console.log(response[m].venue.longitude);
    //   var dateTimeConverted = moment(dateTime, moment.HTML5_FMT.TIME_SECONDS);
    // console.log(dateTimeConverted._d);
    // dateTime = dateTimeConverted._d;

      //Write data to page
      var cityDateTimeOne = JSON.stringify('City: ' + response[0].venue.city) + '<br>' + ' Date/Time: ' + (response[0].datetime)+ '<br>' + ' Venue: ' + (response[0].venue.name) + '<br>';
      var cityDateTimeTwo = JSON.stringify('City: ' + response[1].venue.city) + '<br>' + ' Date/Time: ' + (response[1].datetime) + '<br>' + ' Venue: ' + (response[1].venue.name) + '<br>';
      var cityDateTimeThree = JSON.stringify('City: ' + response[2].venue.city) + '<br>' + ' Date/Time: ' + (response[2].datetime) + '<br>' + ' Venue: ' + (response[2].venue.name) + '<br>';
      var cityDateTimeFour = JSON.stringify('City: ' + response[3].venue.city) + '<br>' + ' Date/Time: ' + (response[3].datetime) + '<br>' + ' Venue: ' + (response[3].venue.name) + '<br>';
      var cityDateTimeFive = JSON.stringify('City: ' + response[4].venue.city) + '<br>' + ' Date/Time: ' + (response[4].datetime) + '<br>' + ' Venue: ' + (response[4].venue.name) + '<br>';
      var cityDateTimeSix = JSON.stringify('City: ' + response[5].venue.city) + '<br>' + ' Date/Time: ' + (response[5].datetime) + '<br>' + ' Venue: ' + (response[5].venue.name) + '<br>';
      var cityDateTimeSeven = JSON.stringify('City: ' + response[6].venue.city) + '<br>' + ' Date/Time: ' + (response[6].datetime) + '<br>' + ' Venue: ' + (response[6].venue.name) + '<br>';
      var cityDateTimeEight = JSON.stringify('City: ' + response[7].venue.city) + '<br>' + ' Date/Time: ' + (response[7].datetime) + '<br>' + ' Venue: ' + (response[7].venue.name) + '<br>';
      var cityDateTimeNine = JSON.stringify('City: ' + response[8].venue.city) + '<br>' + ' Date/Time: ' + (response[8].datetime) + '<br>' + ' Venue: ' + (response[8].venue.name) + '<br>';
      var cityDateTimeTen = JSON.stringify('City: ' + response[9].venue.city) + '<br>' + ' Date/Time: ' + (response[9].datetime) + '<br>' + ' Venue: ' + (response[9].venue.name) + '<br>';
      var cityDateTimeEleven = JSON.stringify('City: ' + response[10].venue.city) + '<br>' + ' Date/Time: ' + (response[10].datetime) + '<br>' + ' Venue: ' + (response[10].venue.name) + '<br>';
      var cityDateTimeTwelve = JSON.stringify('City: ' + response[11].venue.city) + '<br>' + ' Date/Time: ' + (response[11].datetime) + '<br>' + ' Venue: ' + (response[11].venue.name) + '<br>';
      //  var dateTimeConverted = new Date("2018-07-26 19:00:00");
      
      //  var dateTimeConverted = moment(dateTime,"MM-dd-yyyyTHH:MM");
      //attempt to convert time and date


      //  console.log(dateTimeConverted);
      $(".jumbotron").append('<button id = concert-buttonOne>' + cityDateTimeOne);
      $(".jumbotron").append('<button id = concert-buttonTwo>' + cityDateTimeTwo);
      $(".jumbotron").append('<button id = concert-buttonThree>' + cityDateTimeThree);
      $(".jumbotron").append('<button id = concert-buttonFour>' + cityDateTimeFour);
      $(".jumbotron").append('<button id = concert-buttonFive>' + cityDateTimeFive);
      $(".jumbotron").append('<button id = concert-buttonSix>' + cityDateTimeSix);
      $(".jumbotron").append('<button id = concert-buttonSeven>' + cityDateTimeSeven);
      $(".jumbotron").append('<button id = concert-buttonEight>' + cityDateTimeEight);
      $(".jumbotron").append('<button id = concert-buttonNine>' + cityDateTimeNine);
      $(".jumbotron").append('<button id = concert-buttonTen>' + cityDateTimeTen);
      $(".jumbotron").append('<button id = concert-buttonEleven>' + cityDateTimeEleven);
      $(".jumbotron").append('<button id = concert-buttonTwelve>' + cityDateTimeTwelve);





      //push latitude and lonngitude to array on click
      var location = [];

      $('#concert-buttonOne').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[0].venue.longitude);
        location.push(response[0].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);

      });
      $('#concert-buttonTwo').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[1].venue.longitude);
        location.push(response[1].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });

      $('#concert-buttonThree').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[2].venue.longitude);
        location.push(response[2].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });



      $('#concert-buttonFour').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[3].venue.longitude);
        location.push(response[3].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });



      $('#concert-buttonFive').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[4].venue.longitude);
        location.push(response[4].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });

      $('#concert-buttonSix').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[5].venue.longitude);
        location.push(response[5].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });


      $('#concert-buttonSeven').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[6].venue.longitude);
        location.push(response[6].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });


      $('#concert-buttonEight').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[7].venue.longitude);
        location.push(response[7].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });


      $('#concert-buttonNine').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[8].venue.longitude);
        location.push(response[8].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });


      $('#concert-buttonTen').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[9].venue.longitude);
        location.push(response[9].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });


      $('#concert-buttonEleven').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[10].venue.longitude);
        location.push(response[10].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });


      $('#concert-buttonTwelve').on("click", function (event) {

        event.preventDefault();
        location.length = 0;
        location.push(response[11].venue.longitude);
        location.push(response[11].venue.latitude);

        console.log(location);

        $('.beer-holder').html(location);
      });

    });

    $("body").on("click","#letsRock", function(){
      console.log("testing");
      //Store the typed in value to variable location
      var locationInput = $("#artist").val().trim();
      //Replace spaces in location string with +
      locationInput.replace(" ","+");
      //plug location value into google map src and replace the original src in the html
      $("#google-map").attr("src","https://www.google.com/maps/embed/v1/search?key=AIzaSyBbmoAi4qVWUugXB3-QpKR_kdAhtalKGI4&q=+In+" + locationInput);
    });
   
   });
  

  });









  // }, function(errorObject) {
  //     console.log("Errors handled: " + errorObject.code);
  //   });

