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

	function getPokemon(){
		let id = Math.floor(Math.random()*800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response){
		console.log(response);
		console.log(response.name);
		$("#first").empty();
		$("#first").append(`<img src="${response.sprites.front_default}">`);
		$("#first").append(`<h1>Player 1 is:${response.name}</h1>`);
		
		});
		
	};
	function getPokemon2(){
	let id = Math.floor(Math.random()*800);
	$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response){
	console.log(response);
	console.log(response.name);
	$("#second").empty();
	$("#second").append(`<img src="${response.sprites.front_default}">`);
	$("#second").append(`<h1>Player 2 is: ${response.name}</h1>`);
	
	});
	
};

})