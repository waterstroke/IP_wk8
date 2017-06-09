$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var adventure = $("select#adventure").val();
    var activity = $("select#activity").val();
    var environment = $("select#environment").val();
    var food = $("select#food").val();
    var kids = $("select#kids").val();

    if (activity === "layingOut" || activity === "shade") {
      $("#coolKids").show();
      $("#dangerNoKids").hide();
      $("#winter").hide();
      $("#dessert").hide();
      $("#warmKids").hide();
      $("#hot").hide();
      console.log("activity: "+ activity);
    } else if (age > 29) {
      $("#dangerNoKids").hide();
      $("#winter").hide();
      $("#coolKids").hide();
      $("#desert").show();
      $("#warmKids").hide();
      $("#hot").hide();
      console.log("age: "+ activity);
    }
      console.log("out of if: "+ activity);
    // if (adventure === 5 || 4 || 3 && kids === "no") {
    //   $("#dangerNoKids").show();
    //   $("#winter").hide();
    //   $("#coolKids").hide();
    //   $("#dessert").hide();
    //   $("#warmKids").hide();
    //   $("#hot").hide();
    // } else if (age >= 18 && kids === 'yes' && activity === 'shade' || 'layingOut' && environment === 'warm' || cool) {
    //   $("#dangerNoKids").hide();
    //   $("#winter").hide();
    //   $("#coolKids").show();
    //   $("#dessert").hide();
    //   $("#warmKids").show();
    //   $("#hot").hide();
    // } else
    //   $("#coolKids").show();{
    //   }
//Below will be able to click a button and add an image of the vacation spot??
    // $("button#green").click(function() {
    //     $("body").removeClass();
    //     $("body").addClass("green-background");
    //   });
// console.log(activity);

// console.log(adventure);
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
