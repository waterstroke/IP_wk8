$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var name
    var age
    var activity = $("select#activity").val();
    var environment = $("select#environment").val();
    var food = $("select#food").val();







    event.preventDefault();
