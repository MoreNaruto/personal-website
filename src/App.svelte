<script>
    import {Router, Route} from 'svelte-routing';
    import Home from './routes/Home.svelte';
</script>

<Router>
    <Route path="/" component={Home}/>
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
