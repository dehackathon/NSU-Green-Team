function hasBadge(badgeName) {

  var badgeSet = localStorage.getItem(badgeName);

  if (badgeSet === 'true') {
    return true;
  } else {
    return false;
  }
}

function giveBadge (badgeName) {

  var has = hasBadge(badgeName);

  if (! has) {
    showBadge(badgeName);
    localStorage.setItem(badgeName, 'true');
  }
}

function showBadge(badgeName) {

  $('#modalImage').attr('src', 'images/'+badgeName+'.png')
  $('#myModal').modal();
}



$(document).ready(function() {
  giveBadge('welcomeSpartans');

  $('#registration').click(function() {
    giveBadge('registration');
  });

  $('#advisor').click(function() {
    giveBadge('advisor');
  });

  $('#orientation').click(function() {
    giveBadge('orientation');
  });

  $('#getID').click(function() {
    giveBadge('getID');
  });

  $('#mealPlan').click(function() {
    giveBadge('mealPlan');
  });

  $('#housing').click(function() {
    giveBadge('housing');
  });

  if (hasBadge('registration')) {
    $('#registration').click();
  }

  if (hasBadge('advisor')) {
    $('#advisor').click();
  }

  if (hasBadge('orientation')) {
    $('#orientation').click();
  }

  if (hasBadge('getID')) {
    $('#getID').click();
  }

  if (hasBadge('mealPlan')) {
    $('#mealPlan').click();
  }

  if (hasBadge('housing')) {
    $('#housing').click();
  }
});
