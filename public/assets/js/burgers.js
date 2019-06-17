$(function() {
  $(".devour").on("click", function(event){
    event.preventDefault();
    var id = $(this).data("id");
    // var devour = $(this).data("devourIt");
    // how do I tell it to devour?
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log("devoured");
        location.reload();
      }
      );
    });
    
  $(".create-form").on("submit", function(event){
      console.log("Hit newBurger");
      
      event.preventDefault();
      var newBurger = {
        burger_name: $("#burger_name").val().trim(),
        devoured: false
      }
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          location.reload();
        }
      );
    });
});
