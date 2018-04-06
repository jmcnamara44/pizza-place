//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  this.toppings.length + this.size;
}

//user interface logic

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var checkedToppings;
    $("input:checkbox[name=toppings]:checked").each(function() {
      checkedToppings = $(this).val();
      alert(checkedToppings);
    });
    var checkedSize = $("#size").val();
    // var newPizza = new Pizza(checkedToppings, checkedSize);

    $("#price").show();
  });
});
