<script lang="ts">
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

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
