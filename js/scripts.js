//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  return this.toppings.length + this.size;
}

var finalToppings = [];
var checkedSize;
var checkedToppings;
var newPizza;
var pizzaSize;
//user interface logic
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();



    finalToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      checkedToppings = $(this).val();
      finalToppings.push(checkedToppings);
    });

    checkedSize = parseInt($("#size").val());
    newPizza = new Pizza(finalToppings, checkedSize);

    $("#final-price").text(newPizza.price())
    $("#summary").hide();
    $("#result").show();

  });
  $("#final-price").click(function() {
    pizzaSize = function() {
      if (checkedSize === 10) {
        return "Small";
      } else if (checkedSize === 14) {
        return "Medium";
      } else {
        return "Large";
      }
    }
    $("#summary").show();
    $("#pizza-size").text(pizzaSize());
    $("#pizza-toppings").text(finalToppings); //ideally would like the spacing to be better with this text output.//
  });
});
