//custom js file

//backend 

//open
function openNav() {
	//$("div.overlay-content").show();
	document.getElementById("myNav").style.height = "100%";
};

//close
function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}

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

	//when you fill order form and click button 
	$("input#formbtn").click(function(event) {
		var userName = $("input#fullname").val();
		var userAddress = $("input#address").val();
		$("span#input1").text(userName);
		$("span#input2").text(userAddress);
		$("#replace").show();
		event.preventDefault()
	});

	//Change order
	$("#change").click(function() {
		$("#replace").hide();
	});
});
