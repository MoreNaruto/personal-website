<script>
    import {marked} from 'marked';

    import randomWords from '../markdowns/randomWords/*.md';
</script>


{#each Object.values(randomWords) as randomWord}
    <article>
        <div>{@html marked(randomWord)}</div>
    </article>
{/each}
