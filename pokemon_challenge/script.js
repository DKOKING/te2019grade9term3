$(document).ready(function(){
	$("#btn1").click(getPokemon);

		function getPokemon(){
		let pokeQuery = $("input:text").val();
		$.get(`https://pokeapi.co/api/v2/pokemon/${pokeQuery}`,function(response){
		console.log(response);
		console.log(response.name);
		$("#result").empty();
		$("#result").append(`<img src="${response.sprites.front_default}">`);
		$("#result").append(`<h1>Name:${response.name}</h1>`);
		$("#result").append(`<h1>Type:${response.types[0].type.name}`);
		});
	};
});





