$("#container").hide();

$("#startbtn").on("click", function(){
	$("#startbtn").hide();
	$("#container").show();
	countDown(120, "status");
})

function countDown(secs, elem){
	var element = document.getElementById(elem);
	element.innerHTML = "Time left " +secs+ " seconds";
	if (secs < 1) {
		clearTimeout(timer);
		// then I will hide the questions and show the results since the time is up

	}
	secs--;
	var timer= setTimeout('countDown('+secs+',"'+elem+'")',1200);
}
