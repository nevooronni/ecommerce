//custom js file

$(document).ready(function() {
	$("input#submit").click(function(event) {
    
    //takes the input of the form and turns into to a string
		var input = $("input#email").val();

		//inpits the string onto our good old span element
		$("span#email102").text(input);

		//shows hidden subscribe confirmation
		$("div#hiddenSubscribe").slideToggle();
	  event.preventDefault();
	});
	//when you click the popups dissapears 
	$("span#closebtn").click(function() {
	  	$("div#hiddenSubscribe").slideToggle();
	 });
	//when you click singup
	$("button#btn").click(function() {
		$("div#unique2").slideToggle();
		$("div#unique").hide();
	});

	//when you click login
	$("div#login").click(function() {
		$("div#unique").slideToggle();
		$("div#unique2").hide();
	});	
});
