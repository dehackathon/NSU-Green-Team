function giveBadge(badgeName) {
  var shown = localStorage.getItem(badgeName);

  if (! shown) {
    showBadge(badgeName);
  }

  localStorage.setItem(badgeName, true);
}

function showBadge() {
  $('#myModal').modal();
}


$(document).ready(function() {
  giveBadge('welcome');
});
