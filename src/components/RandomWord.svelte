<script>
    import {marked} from 'marked';

    import randomWords from '../markdowns/randomWords/*.md';

    function getCurrentWord() {
        let values = Object.values(randomWords);
        const randomIndex = Math.floor(Math.random() * values.length)
        return values[randomIndex];
    }

    const currentWord = getCurrentWord();
</script>

<div class="prose inline-block py-8">
    {@html marked(currentWord)}
</div>
