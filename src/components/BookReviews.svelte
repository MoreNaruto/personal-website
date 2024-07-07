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
        { title: "Clean Code: A Handbook of Agile Software Craftsmanship", author: "Robert C Martin", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/12e95fa9-3f0f-4235-adc0-53a074a1088f" },
        { title: "Software Systems Architecture", author: "Nick Rozanski and Eoin Woods", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/5c17d7c5-4f85-45ff-a123-b64e80e9e6b2" },
        { title: "Why There is No God", author: "Armin Navabi", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/10c84d8d-9363-40e4-a2b5-c37d74a23973" },
        { title: "Enterprise Integration Patterns, Designing, Building, and Deploying Messaging Solutions", author: "Gregor Hope and Bobby Woolf", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/45f65628-08dd-4eca-b516-ee200739bfa7" },
        { title: "Brain rules for Baby", author: "John Medina", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/a1f01cb5-2e4d-417a-83c6-5356eb46dbeb" },
        { title: "Foundational Falsehoods of Creationism", author: "Aron Ra", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/4a5e18ca-c749-49f2-93bb-3763ded13f13" },
        { title: "Building Great Software Engineering Teams", author: "Josh Tyler", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f94edfc6-38b5-487c-ac49-4978f7bde0ac" },
        { title: "Calculating the Cosmos: How Mathematics unveils the Universe", author: "Ian Stewart", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/5c5607ea-2692-4ae9-ac52-513f5e45b0bb" },
        { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/9804710d-7bb3-44a6-916c-145be6d26d02" },
        { title: "What Every Real Estate Investor Needs to Know About Cash Flow", author: "Gallinelli, Frank", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/4629a796-82ef-495f-a082-9d042fd70e16" },
        { title: "Trade Your Way to Financial Freedom", author: "Van K. Tharp", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/cbcbe32f-a0ca-4b6b-a338-1ae27143c2fc" },
        { title: "The Book on Investing in Real Estate with No (and low) Money Down", author: "Brandon Turner", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/fc36be65-a6d7-4298-9ef3-924a007003e0" },
        { title: "How to Influence People and Make Friends", author: "Dale Carnegie", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/e7620a84-5f0e-44b3-b2fb-77133b9b1d43" },
        { title: "One up on Wall Street", author: "Peter Lynch", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/77f9c8f1-b3e3-4305-9914-3fb07cb579ce" },
        { title: "How I Turned $1,000 into Five Million in Real Estate", author: "William Nickerson", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/5ae13c5b-5c7b-4615-a92d-faacd7d449b2" },
        { title: "Radical Focus", author: "Christina Wodtke", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/bf588d9d-6726-415a-aed7-c4e1e27ca23f" },
        { title: "Godless: How an evangelical Preacher Became One of America's Leading Atheists", author: "Dan Baker", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2f01a28e-f791-4168-89c6-ea3937add2ab" },
        { title: "Decisive: How to Make Better Choices in Life and Work", author: "Chip and Dan Heath", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/1348bf2d-32f6-4b88-9bd4-b5100995109a" },
        { title: "Tetralogue: I'm Right, You're Wrong", author: "Timothy Williamson", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2da32da7-c50f-4623-a19b-3b10d6628a7c" },
        { title: "The Essays of Warren Buffett", author: "Lawrence A. Cunningham", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/64a2ac18-39ab-4f5c-b0f6-d1f2e5b3f479" },
        { title: "Atheist Universe: The Thinking Person's Answer to Christian Fundamentalism", author: "David Mills", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2a60dc35-ab94-4420-b183-259d96d83a84" },
        { title: "The Book on Rental Property Investing", author: "Brandon Turner", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/86093c14-be82-4c91-ab02-2e29d96e34a8" },
        { title: "Fighting God: An Atheist Manifesto For a Religious World", author: "David Silverman", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2f7e5978-a359-4404-8b71-0f92e8cfcd4f" },
        { title: "The Bell Curve: Intelligence and Class Structure in American Life", author: "Richard J. Herrnstein and Charles Murray", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/7f082a00-2a41-47cf-b992-1a1fa89d8935" },
        { title: "The Moral Landscape", author: "Sam Harris", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/8699187f-8816-4fb9-810b-42fd5ed288dc" },
        { title: "The Coddling of the American Mind: How Good Intentions and Bad Ideas Are Setting Up a Generation for Failure", author: "Jonathan Haidt and Greg Lukianoff", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/c7b80be0-0714-45fc-87d6-e3aa4d415a0d" },
        { title: "The Greatest Story Ever Told - So Far", author: "Lawrence M. Krauss", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/faa02da7-cdca-46a7-9c93-768f3e04e787" },
        { title: "The End of Faith", author: "Sam Harris", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f1a2677e-86d0-43d9-93c5-e711515d1b66" },
        { title: "Outliers: The Story of Success", author: "Malcolm Gladwell", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/9c41cca4-cbf3-449b-86ba-48b74f37cb6f" },
        { title: "Lying", author: "Sam Harris", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/e217fb60-155f-4a2e-b098-178f08a54f14" },
        { title: "The Gaslight Effect", author: "Dr. Robin Stern", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/d1dfac52-8a51-4c9a-b126-6d7ec607a974" },
        { title: "The Sociopaths Guide to Getting Ahead", author: "P.T. Elliott", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/cb700eee-6fa3-4630-afca-4766667a29d3" },
        { title: "Antifragile: Things That Gain From Disorder", author: "Nassim Taleb", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2e2d04df-ec8d-40fc-a7a2-8ef61a285cff" },
        { title: "On Tyranny: Twenty Lessons from the Twentieth Century", author: "Timothy Synder", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/9e4aa573-51e2-4524-93e1-4133c3bfd296" },
        { title: "Captivate", author: "Vanessa Van Edwards", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/450672f2-fc8d-4aaf-bf58-ddac0f528db6" },
        { title: "The Upward Spiral: Using Neuroscience to Reverse the Course of Depression, One Small Change at a Time", author: "Alex Korb", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f94877c0-788e-46c2-a91b-41b9f2ae246e" },
        { title: "The Whole-Brain Child: 12 Revolutionary Strategies to Nurture your Child's Developing Mind", author: "Daniel J. Siegel and Tina Payne Bryson", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f75e4ddc-3cf0-492e-99b7-f6dc5dc7aa66" },
        { title: "Talking to Strangers", author: "Malcolm Gladwell", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/cc691621-a652-4dc4-a291-21fe1145fba4" },
        { title: "Forget 'Having It All': How America Messed Up Motherhood--and How to Fix It", author: "Amy Westervelt", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/ba40bc16-5835-4a88-ba52-a9051aef1438" },
        { title: "How to Change Minds The Art of Influence Without Manipulation", author: "Rob Jolles", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/d012ce1b-06ec-4b69-a7f8-d8ab0bb2cf31" },
        { title: "How to Have Impossible Conversations", author: "Peter Boghossian and James Lindsay", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/e2336728-2f05-42a9-8244-a4123cd2f232" },
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

<main class="p-4 bg-slate-200 pb-16">
    {#if selectedBookIndex === null}
        <div class="mb-4">
            <div class="relative max-w-4xl mx-auto">
                <div class="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center" in:fade>
                    {#each paginatedBooks as { title, author, image }, index}
                        <div class="border border-gray-300 rounded-lg p-4 cursor-pointer text-center min-h-full-available transform transition-transform duration-200 hover:scale-105 w-40" on:click={() => handleBookClick(index)}>
                            <div class="w-full h-full flex justify-center items-center">
                                <img src={image} alt={title} class="w-40 h-40 object-cover rounded-lg"/>
                            </div>
                            <h3 class="mt-2 text-lg font-bold">"{title}" By {author}</h3>
                        </div>
                    {/each}
                </div>
                <div class="fixed bottom-0 left-0 right-0 mx-auto max-w-4xl flex justify-between p-4 bg-slate-200">
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
            </div>
        </div>
    {:else}
        <div class="markdown-content p-4 max-w-5xl overflow-y-auto max-h-[80vh] text-left" in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
            <button class="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200" on:click={handleBack}>Back to Book List</button>
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
