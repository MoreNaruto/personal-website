<script>
    import {marked} from 'marked';

    import ContactMe from "../markdowns/contactme.md";

    const page = marked(ContactMe);
</script>

<div class="prose contact-page">
    {@html page}
</div>
