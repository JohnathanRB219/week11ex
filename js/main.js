// my appear button function that makes the image appear
$("#appear").click (function(){

	$("#pika").show();
});

// my disappear button function makes the image disappear
$("#disappear").click(function(){
	$("#pika").hide();
});

// my both button function that makes the image appear and disappear
$("#both").click(function(){
	$("#pika").toggle();


});

// my fade button when clicked makes the image fade in and out 
$("#fade").click(function(){
	$("#pika").toggleClass("fade");
});

// when hovering over my image the image changes to a different image
$("#pokemon").hover(function(){
	$("#pika").attr("src","img/Raichu.png");
// same hover effect but changes the image back to the original image once you stop hovering
}, function(){
	$("#pika").attr("src","img/Pikachu.png");
});


// making the button function clicked adding new list items
$("#adding").click(function(){
	// put input into a var
	var new_task = $("#info").val();
	$("#items").append("<li>Some Text</li>");
	
 
});

$("#bottom").click(function(){
	$("div").hide();
	$("body").css("background-color", "red");
});