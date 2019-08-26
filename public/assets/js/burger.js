
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  // Add a Burger
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0
    };

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  // Devour a Burger
  $(".devouredBurger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredYes = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredYes
    }).then(
      function () {
        console.log("Devoured the burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Delete a Burger
  $(".deleteBurger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("Deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });




});

