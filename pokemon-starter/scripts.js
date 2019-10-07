$(document).ready(function(){
	$("#boy").click(showBoy);
	$("#girl").click(showGirl);
	$("#change").click(goBattle);

	function showBoy(){
		$("#girl").remove();
		$("#boy").remove();
		$("#place").append(`<img src="trainer.png">`);
	}
	function showGirl(){
		$("#boy").remove();
		$("#girl").remove();
		$("#place").append(`<img src="trainer_female.png">`);
	}
	function goBattle(){
		$("#disappear").hide();
		$("#start").show();
	}

	$("#btn1").click(getPokemon);
	$("#btn2").click(getPokemon2);
	$("#results").click(battleWinner);



	function getPokemon(){
		let id = Math.floor(Math.random()*800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response){
		console.log(response);
		console.log(response. name);
		$("#first").empty();
		$("#first").append(`<img src="${response.sprites.front_default}">`);
		$("#first").append(`<h1>Player 1 is:<div id="p1">${response.name}</div></h1>`);
		$("#first").append(`<h1>Type:${response.types[0].type.name}</h1>`);
		$("#first").append(`<h1>Attack:<div id="p1atk">${response.stats[4].base_stat}</div></h1>`);
		
		});
		
	};
	function getPokemon2(){
	let id = Math.floor(Math.random()*800);
	$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response){
	console.log(response);
	console.log(response.name);
	$("#second").empty();
	$("#second").append(`<img src="${response.sprites.front_default}">`);
	$("#second").append(`<h1>Player 2 is: <div id="p2">${response.name}</div></h1>`);
	$("#second").append(`<h1>Type:${response.types[0].type.name}</h1>`);
	$("#second").append(`<h1>Attack:<div id="p2atk">${response.stats[4].base_stat}</div></h1>`);

		});
	
	};
	function battleWinner(){
		let winner = "";
		$("#start").hide();
		let p1atck = $("#p1atk");
		let p2atck = $("#p2atk");
		
		if(p1atck>p2atck){
			winner= $("#p1");
		};
		else if(p2atck>p1atck){
			winner = $("#p2");
		};
		else{
			console.log("?");
		};
		$("#weener").append(`<h1>And the winner is ${winner}`);


	};



})