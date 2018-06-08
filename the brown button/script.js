function setBackground(img) {
  $('.background-wrapper').html(img);
}

var backgroundRange = [
    '<img src="images/1.jpg">',
    '<img src="images/2.jpg">',
    '<img src="images/3.jpg">',
    '<img src="images/4.jpg">',
    '<img src="images/5.jpg">',
    '<img src="images/6.jpg">',
    '<img src="images/7.jpg">',
    '<img src="images/8.jpg">',
    '<img src="images/9.jpg">',
    '<img src="images/11.jpg">',
    '<img src="images/12.jpg">',
    '<img src="images/13.jpg">',
    '<img src="images/15.jpg">',
    '<img src="images/16.jpg">',
    '<img src="images/17.jpg">',
    '<img src="images/18.jpg">',
    '<img src="images/19.jpg">',
    '<img src="images/20.jpg">'];

$(document).ready(function() {
  $('.button').click(function(img) {
    setBackground(backgroundRange[Math.floor(Math.random() * backgroundRange.length)]);
  });
});
