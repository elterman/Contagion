<script>
	import Splash from '../Splash.svelte';
	import { post } from '../utils';
	import GamePage from '../Game Page.svelte';

	let splash = $state(true);
	post(() => (splash = false), 2000);
</script>

<div class="app">
	<GamePage/>
	{#if splash}
		<Splash />
	{/if}
</div>

<style>
	.app {
		display: grid;
		height: 100dvh;
		-webkit-user-select: none;
		user-select: none;
		overflow: hidden;
		touch-action: manipulation;
		outline: none !important;
		/* background-image: url('$lib/images/Sky.jpg'); */
		/* background-position-x: center; */
		/* background-position-y: center; */
		box-sizing: border-box;
		/* border: 1px solid yellow; */
	}

</style>
