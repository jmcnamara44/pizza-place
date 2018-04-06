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
var finalSizes= [];
//user interface logic
$(document).ready(function() {
  // $("#add-pizza").click(function() {
  //   $(".selection").append('<div class="selection">' +
  //                             '<select class="form-control" id="size">' +
  //                               '<option value="0"></option>' +
  //                               '<option value="10">Small (12\'\')</option>' +
  //                               '<option value="14">Medium (14\'\')</option>' +
  //                               '<option value="18">Large (16\'\')</option>' +
  //                             '</select>' +
  //                             '<h4>Please choose from the following options if you would like to add a topping (check all that apply)</h4>' +
  //                             '<input type="checkbox" name="toppings" value="extra-cheese">Extra Cheese<br>' +
  //                             '<input type="checkbox" name="toppings" value="sausage">Sausage<br>' +
  //                             '<input type="checkbox" name="toppings" value="chicken">Chicken<br>' +
  //                             '<input type="checkbox" name="toppings" value="anchovy">Anchovies<br>' +
  //                             '<input type="checkbox" name="toppings" value="sausage">Sausage<br>' +
  //                             '<input type="checkbox" name="toppings" value="pepperonni">Pepperonni<br>' +
  //                             '<input type="checkbox" name="toppings" value="pineapple">Pineapple<br>' +
  //                             '<input type="checkbox" name="toppings" value="beets">Beets<br>' +
  //                           '</div>)');
  // });

  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    // not able to have final results show both sizes of pizza selected or tally the total cost of the order.  only reflects results with initial choice.
    // $(".selection").each(function() {
    //
    //   finalToppings = [];
    //   $("input:checkbox[name=toppings]:checked").each(function() {
    //     checkedToppings = $(this).val();
    //     finalToppings.push(checkedToppings);
    //   });
    //
    //   checkedSize = parseInt($("#size").val());
    //   newPizza = new Pizza(finalToppings, checkedSize);
    //
    //   $("#final-price").text(newPizza.price())
    //   $("#summary").hide();
    //   $("#result").show();
    // })

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
