
$(document).ready(function() {
  var url = "https://epic.gsfc.nasa.gov/api/natural";
  $.ajax({
    url: url,
    dataType: 'json'
  }).done(function(data) {
    console.log(data[0]); //first part of array contains all required data
    var image = data[0];
    var date = JSON.stringify(image.identifier); //grab the date from the identifier code to be placed in the img file path
    var year = date.substr(1, 4);
    var month = date.substr(5, 2);
    var day = date.substr(7, 2);
    $('h2').text(image.caption + " on " + image.date);
    $('.image img').attr("src", "https://epic.gsfc.nasa.gov/archive/natural/" + year + "/" + month + "/" + day + "/jpg/" + image.image + ".jpg");
  });
});
