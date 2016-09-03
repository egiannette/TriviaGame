var score = 0; 

$("#container").hide();
$("#score").hide();
$("#status").hide();


$("#startbtn").on("click", function(){
	$("#startbtn").hide();
	$("#container").show();
	$("#status").show();
	countDown(45, "status");
})

function countDown(secs, elem){
	var element = document.getElementById(elem);
	element.innerHTML = "Time left " +secs+ " seconds";
	if (secs < 1) {
		clearTimeout(timer);
		// then I will hide the questions and show the results since the time is up
		$("#container").hide();
		$("#status").hide();
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
		$("#score").show();
		$("#yourscore").append(" "+ score);

		// alert(score);


	}
	else{
		secs--;
		var timer= setTimeout('countDown('+secs+',"'+elem+'")',1000);
	}
}
