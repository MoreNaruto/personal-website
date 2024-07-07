<script>
    import { fade, slide } from 'svelte/transition';
    import { marked } from 'marked';
    import bookReviews from '../markdowns/bookReviews/*.md';

    let books = [
        { title: "Thinking Fast and Slow", author: "Daniel Kahneman", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/938db228-5030-411b-88e3-e5da76c9cb27" },
        { title: "The Universe from Nothing", author: "Lawrence Krause", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/9238e9ec-26c6-47e9-a25e-92a674e74a82" },
        { title: "The Selfish Gene", author: "Richard Dawkins", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/7752311b-fc01-4f12-895b-a7186951d10e" },
        { title: "Awaken The Giant Within", author: "Anthony Robbins", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/d92ff541-a711-4813-a69b-9ed461791220" },
        { title: "The 5 Love Languages", author: "Gary Chapman", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/08b5ab73-2348-43a8-b363-d5bd084b00e1" },
        { title: "Living with a SEAL", author: "Jesse Itzler", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/c92cdb9a-4e40-44c7-bbd1-c23ff7fdeabe" },
        { title: "The Extended Phenotype", author: "Richard Dawkins", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/cc29fe07-2b61-460e-b58f-d99604a700a7" },
        { title: "Dead Aid", author: "Dambisa Moyo", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/11859617-2a81-43d7-a7c1-00df79cbed5f" },
        { title: "Don't Make Me Think: A Common Sense Approach to Web Usability", author: "Steve Krug", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/071150c3-ec1a-403b-8f2b-58d7158ece76" },
        { title: "The Blind Watchmaker", author: "Richard Dawkins", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2aa056a2-935e-4b0e-a60c-7b1fb4b3d40f" },
        { title: "How the West was Lost", author: "Dambisa Moyo", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/b070bf07-68dd-428f-8405-0f5bedc6c273" },
    ];

    let currentPage = 1;
    const booksPerPage = 12;
    let paginatedBooks = [];

    function paginateBooks() {
        const startIndex = (currentPage - 1) * booksPerPage;
        const endIndex = startIndex + booksPerPage;
        paginatedBooks = books.slice(startIndex, endIndex);
    }

    function handleNextPage() {
        if (currentPage < Math.ceil(books.length / booksPerPage)) {
            currentPage++;
            paginateBooks();
        }
    }

    function handlePreviousPage() {
        if (currentPage > 1) {
            currentPage--;
            paginateBooks();
        }
    }

    paginateBooks();

    let bookContent = '';
    let selectedBookIndex = null;

    async function loadBookContent(index) {
        let bookFiles = Object.values(bookReviews);
        bookContent = bookFiles[index + ((currentPage-1) * booksPerPage)];
    }

    function handleBookClick(index) {
        selectedBookIndex = index;
        loadBookContent(index);
    }

    function handleBack() {
        selectedBookIndex = null;
    }
</script>

<main class="p-4 bg-slate-200">
    {#if selectedBookIndex === null}
        <div class="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center" in:fade>
            {#each paginatedBooks as { title, author, image }, index}
                <div class="border border-gray-300 rounded-lg p-4 cursor-pointer text-center min-h-full-available transform transition-transform duration-200 hover:scale-105 w-40" on:click={() => handleBookClick(index)}>
                    <div class="w-full h-full flex justify-center items-center">
                        <img src={image} alt={title} class="w-40 h-40 object-cover rounded-lg"/>
                    </div>
                    <h3 class="mt-2 text-lg font-bold">"{title}" By {author}</h3>
                </div>
            {/each}
        </div>
        <div class="flex justify-between mt-4">
            <button
                    on:click={handlePreviousPage}
                    disabled={currentPage === 1}
                    class="p-2 rounded transition-colors duration-200 {currentPage === 1 ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white hover:bg-blue-700'}"
            >
                Previous
            </button>
            <button
                    on:click={handleNextPage}
                    disabled={currentPage === Math.ceil(books.length / booksPerPage)}
                    class="p-2 rounded transition-colors duration-200 {currentPage === Math.ceil(books.length / booksPerPage) ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white hover:bg-blue-700'}"
            >
                Next
            </button>
        </div>
    {:else}
        <div class="markdown-content p-4 max-w-5xl overflow-y-auto max-h-[80vh] text-left" in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
            <div class="prose max-w-5xl">
                {@html marked(bookContent)}
            </div>
            <button class="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200" on:click={handleBack}>Back to Book List</button>
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
