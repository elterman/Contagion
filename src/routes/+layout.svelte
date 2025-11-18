<script>
	import favicon from '$lib/images/Logo.webp';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
	:global {
		body {
			margin: 0;
			overflow: hidden;
			--background: #000;
			background: var(--background);
			color: white;
			font-family: DMSans;
		}

		.no-highlight {
			-webkit-tap-highlight-color: transparent;
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}
	}
</style>
