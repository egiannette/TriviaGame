var score = 0; 

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
		$("#container").hide();
		var answer1 = $("#question1").find("input:checked").val();
		if (answer1 === "C"){
			score++;
		}
		var answer2 = $("#question2").find("input:checked").val();
		if (answer2 === "D"){
			score++;
		}
		var answer3 = $("#question3").find("input:checked").val();
		if(answer3 === "B"){
			score++;
		}
		var answer4 = $("#question4").find("input:checked").val();
		if(answer4 === "B"){
			score++;
		}
		var answer5 = $("#question5").find("input:checked").val();
		if(answer5 === "D"){
			score++;
		}
		alert(score);


	}
	secs--;
	var timer= setTimeout('countDown('+secs+',"'+elem+'")',100);
}
