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
	// connect my ul to my input so whatever u type pop ups on the list
	$("#items").append("<li>" + new_task);


	$("input").val("")



	// connected UL element to li and when button is pressed content of some text pops up
	// $("#items").append("<li>Some Text</li>");
	
 
});

$("#bottom").click(function(){
	// when button is clicks hides all the content on page
	$("div").hide();
	// when button is clicked makes the background color red
	$("body").css("background-color", "red");
});