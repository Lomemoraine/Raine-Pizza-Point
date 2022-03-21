$(document).ready(function(){
    $("#tableOrder").hide();
  $("button#addOrder").hide();
  $("p#para1").hide();
  $("p#para2").hide();
  $("p#para3").hide();
  $(".bool").hide();
  $(".location").hide();
//   $("button#clear").hide();
  $("button#checkout").hide();
  $("#tableSummary").hide();
  $(".finalSummary").hide();
  let serial = 1;
  let totalPayable=0;
  let locationn ="";
  
$("button#placeOrder").click(function(){
    // declare local variables to hold values from the input
    let size = $('#pizzaSizeSelect').find('option:selected').val();
    let topping = $('#topping').find('option:selected').val();
    let crust = $('#crust').find('option:selected').val();
    serial = 1;
    totalPayable = 0;
    let deliveryFee = 150;
    let total = parseInt(size) + parseInt(topping) + parseInt(crust);
   
    console.log(size);
    console.log(topping);
    console.log(crust);
    console.log(total);
    $("button#placeOrder").hide();
    // $("button#clear").show();
    $("#tableOrder").show();
    $("button#addOrder").show();
    $("button#checkout").show();
    $("p#para3").hide();
    // Place items in the table
    $("#pizzaSize").html($('#pizzaSizeSelect').find(':selected').text() +" -> "+size);
    $("#pizzaTopping").html($('#topping').find(':selected').text() +" -> "+topping);
    $("#PizzaCrust").html($('#crust').find(':selected').text() +" -> "+crust);
    $("#total").html(total)
   
    // constructor for pizza
    function pizza(size,topping,crust,total,serialNo){
        this.size =size,
        this.topping=topping;
        this.crust =crust;
        this.total = total;
        this.serialNo= serialNo;
    }
    // pizza.prototype.totalPrice = function(){
    //     let total =parseInt (this.size) + parseInt(this.topping) + parseInt(this.crust)
    //     console.log(total);
    // }
    $("button#addOrder").click(function(){
    let size = $('#pizzaSizeSelect').find('option:selected').val();
    let topping = $('#topping').find('option:selected').val();
    let crust = $('#crust').find('option:selected').val();
    let total = parseInt(size) + parseInt(topping) + parseInt(crust);
    serial = serial+1;
    totalPayable = totalPayable + total;
    

    let pizza2 = new pizza(size, topping, crust, total,serial);
    // pizza2.totalPrice()
    // console.log(pizza2)
    var newRow = '<tr><th scope="row">' + pizza2.serialNo+ '</th><td id="pizzaSize">' + $('#pizzaSizeSelect').find(':selected').text()  + " -> " + pizza2.size + '</td><td id="pizzaTopping">' + $('#topping').find(':selected').text() + " -> " + pizza2.topping + '</td><td id="PizzaCrust">' + $('#crust').find(':selected').text() + " -> " + pizza2.crust + '</td><td id="total">' + pizza2.total + '</td></tr>'
    $("#pizza").append(newRow);
});
// $("button#clear").click(function(){
//     $("#tableOrder").remove();
// })

 $("button#checkout").click(function(){
    $("button#addOrder").hide(); 
    $("p#para1").show();
    $("p#para2").show();
    $(".bool").show();
    $("p#para3").hide();
    $("button#checkout").hide()
    totalPayable = totalPayable +total;
    $("#ttotal").html(' '+totalPayable)


 });
 $("button#yes").click(function(){
    
     alert("The delivery charge around village market is 150");
     $(".location").show();
     $(".bool").hide();
     $("p#para2").hide();
     $("p#para3").hide();
     totalPayable = totalPayable + deliveryFee
     $("#ttotal").html(' '+totalPayable); 
    });  
    $("button#no").click(function(){
    $(".location").hide();
    $(".bool").hide();
    $("p#para2").hide();
    $("p#para3").hide();
    $("#tableSummary").show();
    $("#ttotal").html(' '+totalPayable)
    }) 
     $("button#finish").click(function(){
        $(".location").hide(); 
        $("p#para1").show();
        $("p#para3").show();
        locationn =  $("input#locate").val();
        console.log(locationn);
        $("p#deliveredTotal").show()
        $("span#finalAmount").html(locationn)
        $("#tableSummary").show();
        $("p#para3").append(' '+locationn);
      

    });


 

})

})
