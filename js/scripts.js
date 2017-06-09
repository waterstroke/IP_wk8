$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var adventure = $("select#adventure").val();
    var activity = $("select#activity").val();
    var environment = $("select#environment").val();
    var food = $("select#food").val();
    var kids = $("select#kids").val();

    if (activity === "skiing" && environment === "winter") {
      $("#coolKids").hide();
      $("#dangerNoKids").hide();
      $("#winter").show();
      $("#dessert").hide();
      $("#warmKids").hide();
      $("#hot").hide();
      console.log("activity: "+ activity);
    } else if (activity === "surfing" && environment === "warm" || environment === "Hot") {
      $("#dangerNoKids").hide();
      $("#winter").hide();
      $("#coolKids").hide();
      $("#desert").hide();
      $("#warmKids").show();
      $("#hot").show();
    } else if (activity === "hiking" && environment === "warm") {
      $("#dangerNoKids").hide();
      $("#winter").hide();
      $("#coolKids").hide();
      $("#desert").hide();
      $("#warmKids").show();
      $("#hot").show();
    } else if (activity === "hiking" && environment === "dessert") {
      $("#dangerNoKids").hide();
      $("#winter").hide();
      $("#coolKids").hide();
      $("#desert").show();
      $("#warmKids").hide();
      $("#hot").hide();
    } else if (age > 20 && kids === "no" && adventure === "5" || adventure === "4") {
      $("#dangerNoKids").show();
      $("#winter").hide();
      $("#coolKids").hide();
      $("#desert").hide();
      $("#warmKids").hide();
      $("#hot").hide();
    }
    // if (age < 15 && kids === "no" && environment === "Hot") {
    //   $("#dangerNoKids").hide();
    //   $("#winter").hide();
    //   $("#coolKids").hide();
    //   $("#desert").hide();
    //   $("#warmKids").hide();
    //   $("#hot").show();
    // } else if (age < 15 && environment === "warm") {
    //   $("#dangerNoKids").hide();
    //   $("#winter").show();
    //   $("#coolKids").show();
    //   $("#desert").hide();
    //   $("#warmKids").hide();
    //   $("#hot").hide();
    // } else if (age < 15 && environment === "dessert") {
    //   $("#dangerNoKids").hide();
    //   $("#winter").show();
    //   $("#coolKids").show();
    //   $("#desert").hide();
    //   $("#warmKids").hide();
    //   $("#hot").hide();
    // }
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
