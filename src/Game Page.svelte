<script>
	import KittenZombie from '$lib/images/Kitten Zombie.webp';
	import Kitten from '$lib/images/Kitten.webp';
	import Zombie from '$lib/images/Zombie.webp';

	const sz = 60;
</script>

<div class="game-page">
	<img src={Kitten} alt="Kitten" width={sz}/>
	<img src={Zombie} alt="Zombie" width={sz}/>
	<img src={KittenZombie} alt="Kitten Zombie" width={sz}/>
</div>

<style>
	.game-page {
		grid-area: 1/1;
		place-self: center;
		display: grid;
		place-content: cener;
		gap: 15px;
	}
</style>
