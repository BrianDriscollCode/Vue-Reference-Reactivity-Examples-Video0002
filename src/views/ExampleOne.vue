<template>
	<div class="container">
		<h1> Pokemon Index </h1>
	    <select v-model="pokemonName">
			<option disabled value=""> Please Select One </option>
			<option> bulbasaur </option>
			<option> ditto </option>
			<option> charmander </option>
			<option> squirtle </option>
			<option> blastoise </option>
	    </select>
	    <img :src="pokemon.img_url" class="image"/>
	    <p> Name: {{ pokemon.name }} </p>
		<p> Skills: </p>
		<ul>
			<li v-for="(item, name) in pokemon.abilities"> {{ item }}</li>
		</ul>
	</div>

</template>

<script setup>
import axios from "axios";
import { watch } from "vue";
import { reactive, ref } from "vue";
//When you are working with api data

let pokemonName = ref("")

let pokemon = reactive({
	name: "",
	img_url: "",
	abilities: []
})

function fillData(data) {
	pokemon.name = data.name;
	pokemon.img_url = data.sprites.front_default;
	pokemon.abilities = [];
	console.log(data);

	for (let item in data.abilities) {
		pokemon.abilities.push(data.abilities[item].ability.name);
	}
}

watch(pokemonName, async (newPokemonName) => {
	await axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemonName}`)
        .then(res => fillData(res.data));
})

</script>

<style scoped>

.container {
	background-color: rgb(174, 255, 255);
	width: 500px;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

select {
	font-size: 1.3em;
}
.image {
	width: 180px;
}

p {
	font-size: 1.3em;
	padding-left: 2em;
	margin-top: 0;
}

li {
	font-size: 1.3em;
	margin-left: 1.3em;
}

</style>