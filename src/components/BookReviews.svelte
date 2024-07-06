<script>
    import { fade, slide } from 'svelte/transition';
    import { marked } from 'marked';

    let books = [
        { id: 1, title: 'Book Title 1', image: 'path/to/book1.jpg' },
        { id: 2, title: 'Book Title 2', image: 'path/to/book2.jpg' },
        { id: 3, title: 'Book Title 3', image: 'path/to/book3.jpg' },
        // ... add up to 30 books
    ];

    let selectedBookId = null;
    let bookContent = '';

    async function loadBookContent(id) {
        const res = await fetch(`/src/books/book${id}.md`);
        bookContent = await res.text();
    }

    function handleBookClick(id) {
        selectedBookId = id;
        loadBookContent(id);
    }

    function handleBack() {
        selectedBookId = null;
    }
</script>

<main class="p-4">
    {#if selectedBookId === null}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" in:fade>
            {#each books as { id, title, image }}
                <div class="border rounded-lg p-4 cursor-pointer transform transition-transform duration-200 hover:scale-105" on:click={() => handleBookClick(id)}>
                    <img src={image} alt={title} class="w-full h-48 object-cover rounded-lg"/>
                    <h3 class="mt-2 text-lg font-bold">{title}</h3>
                </div>
            {/each}
        </div>
    {:else}
        <div class="p-4" in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
            <button class="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200" on:click={handleBack}>Back to Catalog</button>
            <div class="prose" innerHTML={marked(bookContent)}></div>
        </div>
    {/if}
</main>

<style>
    .prose h1 {
        @apply text-2xl;
    }
    .prose p {
        @apply mt-2;
    }
</style>
