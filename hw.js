$("ul").on("click", "li", function(){ //add listner to li inside of a ul
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){//when span inside ul is clicked
  $(this).parent().fadeOut(500,function(){
      $(this).remove(); //removes li element
  });
  event.stopPropagation(); //click lisnter wont bubble up to other elements
});



$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var newHw = $(this).val();
    $(this).val("");
    $("ul").append(`<li><span><i class='fas fa-trash-alt'></i></span> ${newHw}</li>`)
  }
});
