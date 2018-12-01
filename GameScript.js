

			var gameover=false;
		var canvas=document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");

		var level=parseInt(prompt("select difficulty level: select options from 1.Easy 2.normal 3.hard (press any number for default)"));
		console.log(level);

		var x = canvas.width/2;
		var y = canvas.height-50;
		//variable to draw upper paddle
		var lowerpaddleHeight = 10;
		var lowerpaddleWidth = 60;
		var paddleXlower = (canvas.width-lowerpaddleWidth)/2;


		//variable to draw lower paddle
		var upperpaddleHeight=10;
		var upperpaddlewidth=60;
		//x-coordinate to addleXupper
		var paddleXupper=(canvas.width-upperpaddlewidth)/2;


		// var speedX= 6;
		// var speedY= -6	;

		if(level==3)
		{
			 var speedX= 7;
			 var speedY= -7	;
		}else if(level==2){

			 var speedX= 5;
			 var speedY= -5	;
		}
		else if(level==1)
		{
			var speedX= 4;
			 var speedY= -4	;
		}
		else
		{
			var speedX= 4;
			 var speedY= -4	;
		}
		var flag;
		 var scoreA=0;
		 var scoreB=0;
		var leftPressed;
		var rightPressed;

		var wbuttoncode;
		var sbuttoncode;
		var wpressed=false;
		var spressed=false;
		var up, down;

		var goalwidth=120;
		var goalheight=5;

		var GoalX=150;



		var goal=0;

		function drawBall() {
    	ctx.beginPath();
    	ctx.arc(x, y, 10, 0, Math.PI*2);
    	ctx.fillStyle = "#0095DD";
    	ctx.fill();
    	ctx.closePath();
		}
		function circle() {
    	ctx.beginPath();
    	ctx.arc(210, 300, 65, 0, Math.PI*2);
    		ctx.stroke();
    	ctx.strokeStyle = '#ffffff';
	   

    	ctx.closePath();
		}
		
		function drawPaddleLower()
		{
			ctx.beginPath();
			ctx.rect(paddleXlower,canvas.height-50,lowerpaddleWidth,lowerpaddleHeight);
			ctx.fillStyle="#0095DD";
			ctx.fill();
			ctx.closePath();
		}
		function draw_central_line(){
			
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.lineTo(398, 300);
  ctx.lineWidth = 2;
  ctx.stroke();
		}
		function drawPaddleUpper()
		{
			ctx.beginPath();
			ctx.rect(paddleXupper,50,upperpaddlewidth,upperpaddleHeight);
			ctx.fillStyle="#0095DD";
			ctx.fill();
			ctx.closePath();
		}

		function drawUpperGoal()
		{
			ctx.beginPath();
			ctx.rect(GoalX,10,goalwidth,goalheight);
			ctx.fillStyle="#0095DD";
			ctx.fill();
			ctx.closePath();
		}

		function drawLowerGoal()
		{
			ctx.beginPath();
			ctx.rect(GoalX,canvas.height-10,goalwidth,goalheight);
			ctx.fillStyle="#0095DD";
			ctx.fill();
			ctx.closePath();
		}
		function draegameover_a() {
			ctx.font = "30px Arial";
    		ctx.fillStyle = "#0095DD";
    		ctx.fillText("GAME OVER !  Player A Won", 5, 200);
    	}	
    	function draegameover_b() {
			ctx.font = "30px Arial";
    		ctx.fillStyle = "#0095DD";
    		ctx.fillText("GAME OVER !  Player B Won", 5, 200);
    	}	
    	function playerA() {
			ctx.font = "15px Arial";
    		ctx.fillStyle = "#0095DD";
    		ctx.fillText("playerA", 8, 590);
    	}	
    	function playerB() {
			ctx.font = "15px Arial";
    		ctx.fillStyle = "#0095DD";
    		ctx.fillText("playerB", 8, 18);
    	}	
   //  	function drawscoreA() {
			// ctx.font = "10px Arial";
   //  		ctx.fillStyle = "#0095DD";
   //  		ctx.fillText(scoreA, 50, 20);
   //  	}	
   //  	function drawscoreB() {
			// ctx.font = "10px Arial";
   //  		ctx.fillStyle = "#0095DD";
   //  		ctx.fillText(scoreB, 80, 20);
   //  	}	




		function draw(){

		   ctx.clearRect(0, 0, canvas.width, canvas.height);

			drawBall();
			drawPaddleLower();
			drawPaddleUpper();
			drawUpperGoal();
			drawLowerGoal();
			// drawscoreA();
			// drawscoreB();
			circle();
			draw_central_line();
			playerA();
			playerB();




			/* if(x+speedX >canvas.width || x+speedX <0)
			{
					speedX= -speedX;
			} 
			if (y+speedY > canvas.height || y+speedY < 0 ) {

				speedY = -speedY;
			}
			*/

			if(x+speedX >canvas.width || x+speedX <0)//side wall rebound 
			{
					speedX= -speedX;
			} 
			else if ( y+speedY < 50 ) {
					var flag=1;
				if(x > paddleXupper && x < paddleXupper + upperpaddlewidth )//checked
				{ 					
					speedY= -speedY;

				}

				else if (x > GoalX && x < GoalX + goalwidth && y<25 && y>10  ){
					
						scoreA++;//checked
						
						draegameover_a();
						alert("Realod the page to reset difficulty level");
						// location.reload();
						
						
						
						
				}
				else if(y+speedY <10)
				{
					speedY=-speedY;
				}
			
			}

			 if(y+speedY > canvas.height -40){

				if(x > paddleXlower && x < paddleXlower +lowerpaddleWidth)
				{
					speedY=-speedY;	 
				}
				else if(x > GoalX && x < GoalX + goalwidth && y>590 && y <600 ){
					
					 console.log("lll");
					 draegameover_b(); 
					 alert("Realod the page to reset difficulty level");
					 // location.reload();
					
				}
				else if(y+speedY > canvas.height +5){
					speedY=-speedY;
				}
			
				
			}
		


			//moving lower paddle

			if(rightPressed&& paddleXlower < canvas.width - lowerpaddleWidth)
			{
				paddleXlower += 7;
			}
			if(leftPressed && paddleXlower > 0)
			{
				paddleXlower -=7;
			} 

			//moving upper paddle

			if(wpressed && paddleXupper<canvas.width-upperpaddlewidth)
			{
				paddleXupper +=7;
			}
			if(spressed && paddleXupper > 0)
			{
				paddleXupper -=7;

			}



			x+=speedX;
			y+=speedY;
		}

		setInterval(draw , 10);	
		

		//moving lower paddle buttons

		document.addEventListener("keydown", keyDownHandler, false);
		document.addEventListener("keyup", keyUpHandler, false);

	


		function keyDownHandler(e) {
    	if(e.keyCode == 39) {
        	rightPressed = true;
    	}
    		else if(e.keyCode == 37) {
        	leftPressed = true;
    	}
    		else if(e.keyCode == 87){
    			wpressed = true;
    		}
    		else if(e.keyCode==83){
    			spressed = true;
    		}
	}

function keyUpHandler(e) {
   	 if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode ==87){
    	wpressed = false;
    }
    else if(e.keyCode == 83){
    	spressed = false;
    }
}

