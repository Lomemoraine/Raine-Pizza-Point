$(document).ready(function(){
    $("#tableOrder").hide();
  $("button#addOrder").hide();
  $("p#para1").hide();
  $("p#para2").hide();
  $(".bool").hide();
  $(".location").hide();
  $("button#checkout").hide();
  $("#tableSummary").hide();
  $(".finalSummary").hide();

$("button#placeOrder").click(function(){
    let size = $('#pizzaSize').find('option:selected').val();
    let topping = $('#topping').find('option:selected').val();
    let crust = $('#crust').find('option:selected').val();
    let serial = 1;
    let total = parseInt(size) + parseInt(topping) + parseInt(crust);
    let totalPayable = 0;
    console.log(size);
    console.log(topping);
    console.log(crust);
    console.log(total);
    $("#tableOrder").show();
    $("button#addOrder").show();
    $("button#checkout").show();


})

})