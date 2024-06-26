<script lang="ts">
    import {Router, Route} from 'svelte-routing';
    import Home from './routes/Home.svelte';
</script>

<Router>
    <Route path="/" component={Home}/>
</Router>

<style>
    @import 'global.css';
</style>
