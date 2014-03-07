<!DOCTYPE html>
<html>
<head>
	<title>Roman-Roman Calculator</title>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<meta property="og:url" content="<?php echo $_SERVER['SCRIPT_URI']?>"/>
	<meta property="og:site_name" content="Sahil Dua"/>
	<meta property="og:title" content="Roman-Roman Calculator"/>
	<meta property="og:image" content="http://sahildua.collegespace.in/link-parser/logo.jpg"/>
	<meta property="og:type" content="website"/>
	<meta property="og:description" content="A simple Roman Roman Calculator which takes two roman numerals as input and operate them according to the given operator and returns the result as a roman numeral"/>
	<meta name="description" content="A simple Roman Roman Calculator which takes two roman numerals as input and operate them according to the given operator and returns the result as a roman numeral">
	<meta name="keywords" content="sahil dua, roman calculator, roman numerals, calculator, roman, calc">
	
	<script src="jquery-1.10.2.js"></script>
	<script src="script.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
	
	<link rel="shortcut icon" href="/favicon.png" type="image/png">
	<link rel="shortcut icon" type="image/png" href="http://sahildua.collegespace.in/roman-calc/favicon.png" />
	
	<script>
		function solveIt(){	
			var oneRoman = $("#one").val();
			var twoRoman = $("#two").val();
			var operation = $("#operation").val();
			console.log(oneRoman);
			console.log(twoRoman);
			console.log(operation);
			var oneNum = deromanize(oneRoman);
			var twoNum = deromanize(twoRoman);
			console.log(oneNum);
			console.log(twoNum);
			switch(operation)
			{
				case '+':
					var sumNum = oneNum + twoNum;
					break;
				case '-':
					var sumNum = oneNum - twoNum;
					break;
				case '*':
					var sumNum = oneNum * twoNum;
					break;
				case '/':
					var sumNum = oneNum / twoNum;
					break;
				case '':
					break;
				default:
					alert("Operation not allowed! GO and do it somewhere else!");
			}
			//console.log(sumNum);
			var sumRoman = romanize(sumNum);
			//console.log(sumRoman);
			document.getElementById("answer").value = sumRoman;
			if(sumNum) {if(sumNum%1 !== 0) alert("You wanna me to screw you up? eh..? Have you ever seen a roman representation of a decimal number?");}
		}
	</script>
	
</head>
<body>
	<div class="container">
		<h2>Enter 2 Roman Numerals to operate and get the result back in Roman Numerals!</h2>
		
			<input type="text" required name="one" id="one" autocomplete="off" />
			<input type="text" name="operation" id="operation" placeholder="+ or - or / or *" required autocomplete="off" />
			<input type="text" required name="two" id="two" autocomplete="off" />
			<input type="submit" name="submit" value="Submit" onclick="solveIt();"/>
			<h3>Answer</h3>
			<input type="text" disabled name="answer" id="answer"/>
		
	</div>
</body>
</html>
