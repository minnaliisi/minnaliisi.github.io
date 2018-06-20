/* Exercise 2: Color picker */
function setPreviewColor(color) {
  $('.preview').css('background-color', color);
  $('.color-code').text($('.preview').css('background-color'));
};

function addBox(color) {
  $('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
};

$(document).on('keyup', 'input#color', function() {
  setPreviewColor($('input#color').val());
});

$(document).on('click', '#add-to-favorite', function() {
  addBox($('input#color').val());
  $('input#color').val('').focus();
  if ($('#colors .item').length > 16) {
    $('#colors .item').last().remove();
  }
});

$(document).keypress(function (e) {
  if (e.which == 13) {
    addBox($('input#color').val());
    $('input#color').val('').focus();
    if ($('#colors .item').length > 16) {
      $('#colors .item').last().remove();
      }
    return false;
  }
});

var favorites = ['#75600D', '#420130', '#E88154'];

$(document).ready(function() {
  favorites.forEach(function(color) {
    addBox(color);
  });
  setPreviewColor(favorites[Math.floor(Math.random() * favorites.length)]);
});

var previewColor;

$(document).ready(function() {
  previewColor = $('.preview').css('background-color');
    $('#colors .item').mouseenter(function() {
      setPreviewColor($(this).css('background-color'));
    });
    $('#colors .item').mouseleave(function() {
      setPreviewColor(previewColor);
    })
});
