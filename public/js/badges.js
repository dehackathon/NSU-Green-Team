function giveBadge(badgeName) {
  var shown = localStorage.getItem(badgeName);

  if (! shown) {
    showBadge(badgeName);
  }

 // localStorage.setItem(badgeName, true);
}

function showBadge(badgeName) {
  $('#modalImage').attr('src', 'images/'+badgeName+'.png')
  $('#myModal').modal();
}


$(document).ready(function() {
  giveBadge('welcomeSpartans');
  $('#registration').click(function(){
    giveBadge('registration');
  })
  $('#advisor').click(function(){
    giveBadge('advisor');
  })
  $('#orientation').click(function(){
    giveBadge('orientation');
  })
});
