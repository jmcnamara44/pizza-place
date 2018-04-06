//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  return this.toppings.length + this.size;
}

//user interface logic
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var finalToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      var checkedToppings = $(this).val();
      finalToppings.push(checkedToppings);
    });

    var checkedSize = parseInt($("#size").val());
    var newPizza = new Pizza(finalToppings, checkedSize);

    $("#final-price").text(newPizza.price())
    $("#price").show();
  });
});
