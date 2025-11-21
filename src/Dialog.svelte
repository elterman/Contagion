<script>
	import { fade } from 'svelte/transition';
	import { ss } from './state.svelte';

	const ul = '<ul style="margin: 25px 0 0 0;">';
	const li = '<li style="margin: 12px 0 0 -20px;">';

	const CONTENT = `
        <span style='font-style: italic;'>You are a self-aware zombie doomed to drift through space, trying not to infect the innocent.</span>
        ${ul}
        ${li}<span>Use arrow keys to adjust your velocity—horizontal and vertical. Speed increases are capped.</span></li>
        ${li}<span>Touching a live kitten turns it into a zombie.</span></li>
        ${li}<span>Zombie kittens spread the plague.</span></li>
        ${li}<span>After a short time, zombie kittens revive and can be infected again.</span></li>
        ${li}<span>Keep all 10 kittens alive at the same time—for as long as possible.</span></li>
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
		/* font-weight: bold; */
		display: grid;
		align-content: start;
		place-self: center;
		outline: none !important;
	}
</style>
