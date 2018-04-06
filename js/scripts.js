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

    var pizzaSize = function() {
      if (checkedSize === 10) {
        return "Small";
      } else if (checkedSize === 14) {
        return "Medium";
      } else if (checkedSize === 18) {
        return "Large";
      } else {
        return "Please make a valid selection";
      }
    }

    var finalToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      var checkedToppings = $(this).val();
      finalToppings.push(checkedToppings);
    });

    var checkedSize = parseInt($("#size").val());
    var newPizza = new Pizza(finalToppings, checkedSize);

    $("#final-price").text(newPizza.price())
    $("#summary").show();
    $("#pizza-size").text(pizzaSize());
    $("#pizza-toppings").text(finalToppings.forEach(function() {
      finalToppings.toUpperCase;
    }));
  });
});
