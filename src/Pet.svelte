<script>
	import pet from '$lib/images/Pet.webp';
	import petz from '$lib/images/PetZ.webp';
	import Fob from './Fob.svelte';
	import { ss } from './state.svelte';

	const { index } = $props();
	const i = $derived(ss.fobs.findIndex((f) => f.id.startsWith('pet')));
	let fob = $derived(ss.fobs[i + index]);
</script>

<Fob bind:fob={fob} src={fob.dead ? petz : pet} style={`opacity: ${ss.over ? 0.35 : 1}`} />
