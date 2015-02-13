function giveBadge(badgeName) {
  var shown = localStorage.getItem(badgeName);

  if (! shown) {
    showBadge(badgeName);
  }
  
  localStorage.setItem(badgeName, true);
}

function showBadge(badgeName) {
  $('#modalImage').attr('src', 'images/'+badgeName+'.png')
  $('#myModal').modal();
}

function hasBadge(badgeName){
   var badgeSet = localStorage.getItem(badgeName);
   if(badgeSet){return true;}
   else {return false;}
}


$(document).ready(function() {
  giveBadge('welcomeSpartans');

  $('#registration').click(function(){
    giveBadge('registration');
  });

  $('#advisor').click(function(){
    giveBadge('advisor');
  });

  $('#orientation').click(function(){
    giveBadge('orientation');
  });

  $('#getID').click(function(){
    giveBadge('getID');
  });

if (hasBadge('registration')){
  $('#registration').click();
}

if (hasBadge('advisor')){
  $('#advisor').click();
}

if (hasBadge('orientation')){
  $('#orientation').click();
}

if (hasBadge('getID')){
  $('#getID').click();
}
});
