<script>
	import BreadCrumbs from '$lib/ui/BreadCrumbs.svelte';
	import Hamburger from '$lib/ui/Hamburger.svelte';
	import PageMenu from '$lib/ui/PageMenu.svelte';
	export let fileTree;
	import { page } from '$app/stores';
	export let open = false;
</script>

<header>
	<div class="header-container">
		<BreadCrumbs {fileTree} />
	</div>
</header>

<style>
	header {
		grid-area: header;
		height: var(--header-height);
		width: 100%;
	}

	div.header-container {
		height: var(--header-height);
		box-sizing: border-box;
		display: flex;
		justify-items: right;
		align-items: center;
	}

	@media print {
		header {
			display: none;
		}
	}
</style>
