$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var adventure = $("select#adventure").val();
    var activity = $("select#activity").val();
    var environment = $("select#environment").val();
    var food = $("select#food").val();
    var kids = $("select#kids").val();


    if (environment === "winter" && activity === "skiing") {
      $("#coolKids").hide();
      $("#dangerNoKids").hide();
      $("#winter").show();
      $("#dessert").hide();
      $("#warmKids").hide();
      $("#hot").hide();
      console.log("activity: "+ activity);
    } else if (environment === "desert") {
      $("#dangerNoKids").hide();
      $("#winter").hide();
      $("#coolKids").hide();
      $("#desert").show();
      $("#warmKids").hide();
      $("#hot").show();
    }
    if (environment === "cool") {
      $("#dangerNoKids").hide();
      $("#winter").show();
      $("#coolKids").show();
      $("#desert").hide();
      $("#warmKids").hide();
      $("#hot").hide();
    } else if (activity === "hiking" && environment === "desert") {
      $("#dangerNoKids").hide();
      $("#winter").hide();
      $("#coolKids").hide();
      $("#desert").show();
      $("#warmKids").hide();
      $("#hot").hide();
    }
    if (kids === "no" && adventure === "5") {
      $("#dangerNoKids").show();
      $("#winter").hide();
      $("#coolKids").hide();
      $("#desert").hide();
      $("#warmKids").hide();
      $("#hot").hide();
    } else if (kids === "yes" && environment === "warm") {
      $("#dangerNoKids").hide();
      $("#winter").hide();
      $("#coolKids").hide();
      $("#desert").hide();
      $("#warmKids").show();
      $("#hot").hide();
    } else if (kids === "yes" && environment === "cool") {
      $("#dangerNoKids").hide();
      $("#winter").hide();
      $("#coolKids").show();
      $("#desert").hide();
      $("#warmKids").hide();
      $("#hot").hide();
    } else if (kids === "yes" && environment === "winter") {
      $("#dangerNoKids").hide();
      $("#winter").show();
      $("#coolKids").hide();
      $("#desert").hide();
      $("#warmKids").hide();
      $("#hot").hide();
    } else if (kids === "yes" && environment === "hot") {
      $("#dangerNoKids").hide();
      $("#winter").hide();
      $("#coolKids").hide();
      $("#desert").hide();
      $("#warmKids").hide();
      $("#hot").show();
    }

      console.log("age: "+ activity);
      console.log("out of if: "+ activity);
      console.log(environment);
      console.log(food);
      console.log(kids);
      console.log(name);
      console.log(adventure);
      console.log(activity);
      console.log(age);


    event.preventDefault();
  });
});
