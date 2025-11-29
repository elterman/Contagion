<script>
	import { fade } from 'svelte/transition';
	import { ss } from './state.svelte';

	const ul = '<ul style="margin: 25px 0 0 0;">';
	const li = '<li style="margin: 12px 0 0 -20px; color: var(--gold);">';
	const gold = '<span style="color:#ffe4aae0">';
	const orange = '<span style="color: var(--orange)">';
	const green = '<span style="color: var(--green)">';
	const blue = '<span style="color: var(--blue);">';
	const lightblue = '<span style="color: var(--lightblue);">';

	// ${li}${blue}Press ${lightblue}SPACE</span> to ${lightblue}stop</span> instantly.</span></li>
	const CONTENT = `
        <span style='font-style: italic;'>You are an ${green}evil alien</span>, carrying a dangerous ${orange}virus</span>. You drift through space, sending ${orange}waves of infection</span> through the world of innocent kittens.</span>
        ${ul}
        ${li}${blue}Use ${lightblue}arrow keys</span> to adjust your ${lightblue}velocity</span>—horizontal and vertical.</span></li>
        ${li}${blue}Contact with a ${gold}cute kitten</span> turns it into a ${orange}zombie</span>.</span></li>
        ${li}${blue}After some time, zombie kittens ${gold}revive</span> and can be ${green}infected again</span>.</span></li>
        ${li}${blue}Zombie kittens ${green}spread</span> the plague.</span></li>
        ${li}${blue}Your evil mission is complete when ${lightblue}all the kittens</span> are infected ${lightblue}simultaneously</span>.</span></li>
        </ul>`;

	const width = $derived(ss.space?.width > 580 ? '540px' : '80%');
	const style = $derived(`width: ${width}; font-size: ${Math.min(24, 30 * Math.min(ss.scale, 1))}px;`);
</script>

{#if ss.dlg}
	<div class="dlg" {style} transition:fade={{ duration: 200 }}>
		<div class="content" tabindex="-1">
			{@html CONTENT}
		</div>
	</div>
{/if}

<style>
	.dlg {
		grid-area: 2/1;
		display: grid;
		place-self: center;
		box-sizing: border-box;
		place-items: center;
		margin: 20px 0;
	}

	.content {
		font-weight: bold;
		display: grid;
		align-content: start;
		place-self: center;
		outline: none !important;
	}
</style>
