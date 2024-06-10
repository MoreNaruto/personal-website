<script>
	import { Router, Route } from 'svelte-routing';
	import Home from './routes/Home.svelte';
	import Career from './routes/Career.svelte';
	import BookReviews from './routes/BookReviews.svelte';
	import Contact from './routes/Contact.svelte';
</script>

<Router>
	<Route path="/" component={Home} />
	<Route path="career" component={Career} />
	<Route path="book-reviews" component={BookReviews} />
	<Route path="contact" component={Contact} />
</Router>

<style>
	:global(body) {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
		background-color: #494D5F;
	}

	main {
		max-width: 800px;
		margin: auto;
		padding: 2rem;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
