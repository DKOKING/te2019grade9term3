$(document).ready(function(){
	$("#btn1").click(getPokemon);
	$("#btn2").click(getPokemon2);

	let pokemon = {
		name: '',
		attack: 0,
		img: ''
	};

	function getPokemon(){
		let id = Math.floor(Math.random()*800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response){
		console.log(response);
		console.log(response.name);
		$("#first").empty();
		$("#first").append(`<img src="${response.sprites[4]}">`);
		$("#first").append(`<h1>Player 1 is:${response.name}</h1>`);
		
		});
		
	};
	function getPokemon2(){
	let id = Math.floor(Math.random()*800);
	$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response){
	console.log(response);
	console.log(response.name);
	$("#second").empty();
	$("#second").append(`<h1>Player 2 is: ${response.name}</h1>`);
	
	});
	
};

})