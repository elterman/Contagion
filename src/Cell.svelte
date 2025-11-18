<script>
	const { row, col, scrapX, scrapY } = $props();
	const style = $derived(`grid-area: ${row} / ${col};`);
</script>

<div class="cell" {style}>
    <div class='scrap-x' style='background: {scrapX.color}; z-index: {scrapX.zi};'></div>
    <div class='scrap-y' style='background: {scrapY.color}; z-index: {scrapY.zi};'></div>
</div>

<style>
	.cell {
		display: grid;
		width: 80px;
		aspect-ratio: 1;
		box-sizing: border-box;
		/* margin: 2px; */
		/* border: 1px solid #fff7; */
	}

    .scrap-x {
        grid-area: 1/1;
        align-self: center;
        width: 100%;
        height: 30%;
    }

    .scrap-y {
        grid-area: 1/1;
        justify-self: center;
        width: 30%;
        height: 100%;
    }
</style>
