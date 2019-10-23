$(document).ready(function() {

  $("div#click-one").click(function(event) {
    var whatToSay="hello!";
    alert(whatToSay);
  });

  $("dive#click-two").click(function(event) {
    alert(whatToSay);
  });
});
