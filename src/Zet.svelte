<script>
	import src from '$lib/images/Evil Zet.webp';
	import Fob from './Fob.svelte';
	import { findZet } from './shared.svelte';

	let zet = $derived(findZet());
</script>

<Fob bind:fob={zet} {src} />
