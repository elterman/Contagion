<script>
	import Dialog from './Dialog.svelte';
	import InfoPanel from './Info Panel.svelte';
	import Space from './Space.svelte';
	import Stats from './Stats.svelte';
	import Prompts from './Prompts.svelte';
</script>

<div class="game-page">
	<Stats />
	<InfoPanel />
	<Space />
	<Dialog />
	<Prompts />
</div>

<style>
	.game-page {
		grid-area: 1/1;
		display: grid;
		grid: auto 1fr auto / auto;
		box-sizing: border-box;
		text-shadow:
			1px 1px black,
			1px -1px black,
			-1px -1px black,
			-1px 1px black;
	}
</style>
