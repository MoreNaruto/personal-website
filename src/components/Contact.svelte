<script>
    import {marked} from 'marked';

    import ContactMe from "../markdowns/contactMe/contactme.md";

    const page = marked(ContactMe);
</script>

<div class="prose contact-page p-8">
    {@html page}
</div>
