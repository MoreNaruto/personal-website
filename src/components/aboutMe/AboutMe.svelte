<script>
    import {onMount} from 'svelte';
    import {marked} from 'marked';
    import FamilyPhoto from "../../markdowns/family-photo.md";
    import Introduction from "../../markdowns/introduction.md";
    import Interests from "../../markdowns/interests.md";

    let currentPage = 0;

    const pages = [
        FamilyPhoto,
        Introduction,
        Interests
    ];

    let content = [];

    onMount(() => {
        content = pages.map(page => marked(page));
    });

    function nextPage() {
        if (currentPage < pages.length - 1) {
            currentPage++;
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
        }
    }
</script>

<style>
    .page-turn {
        transition: transform 0.6s ease-in-out;
    }
</style>

<div class="container mx-auto my-10">
    <div class="relative w-full h-96 overflow-hidden bg-white shadow-lg rounded-lg">
        <div class="page-turn flex w-full h-full transform" style="transform: translateX(-{currentPage * 100}%)">
            {#each content as page, index}
                <div class="w-full flex-shrink-0 p-10 prose max-w-full {index === 0 ? 'first-page' : ''}">
                    {@html page}
                </div>
            {/each}
        </div>
    </div>
    <div class="flex justify-between mt-4">
        <button
                class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                on:click={prevPage}
                disabled={currentPage === 0}
        >
            Previous
        </button>
        <button
                class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                on:click={nextPage}
                disabled={currentPage === pages.length - 1}
        >
            Next
        </button>
    </div>
</div>
