$(function()
{

  var $myDate = $("#myDate");
  var $myHour = $("#myHour");
  var local = 'fr-FR';
  var options = {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                };

  function myDate() {
   var d = new Date();
   var myDate = d.toLocaleDateString(local, options);
   var myHour = d.toLocaleTimeString(local);
   $myDate.text(myDate);
   $myHour.text(myHour);
  }
  setInterval(myDate, 1000);

});
