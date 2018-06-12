$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      var input = $(this);
      var username = input.val();
      var gitHubUser = getGithubInfo(username);
      showUser(gitHubUser);
    }
  });
});

function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;

  console.log('username was: ' + username);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

  return xmlhttp;
}

function showUser(xmlhttp) {
  console.log(xmlhttp.status);
  if(xmlhttp.status === 200) {
    // show the user details
    var json = xmlhttp.responseText;
    var user = JSON.parse(json);
    $('#profile h2').text(user.login + ' is GitHub user #' + user.id);
    $('#profile .information').html('<a href="' + user.html_url + '">' + user.html_url + '</a>');
    $('#profile .avatar').html('<img src="' + user.avatar_url +'">');
    console.log(user);
  } else {
    // show an error
  }
}
