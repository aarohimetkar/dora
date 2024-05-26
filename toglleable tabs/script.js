// scripts.js
$(document).ready(function(){
    $('#myTabs a').on('click', function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
  });
  