<script>
    import Dice from '../components/Dice.svelte';
    import AboutMe from "../components/aboutMe/AboutMe.svelte";
    import Career from "../components/Career.svelte";
    import BookReviews from "../components/BookReviews.svelte";
    import Contact from "../components/Contact.svelte";
    import Skills from "../components/skills/SkillsSet.svelte";
    import RandomWord from "../components/RandomWord.svelte";
    import {fade} from 'svelte/transition';

    let showModal = false;
    let currentModalPage = AboutMe;

    const pageComponentMap = new Map([
        ['about-me', AboutMe],
        ['book-reviews', BookReviews],
        ['career', Career],
        ['contact', Contact],
        ['skills', Skills],
        ['random-word', RandomWord]
    ]);

    function handleModalOpenClick(event) {
        const pageName = event.detail.page;
        currentModalPage = pageComponentMap.get(pageName) || AboutMe;
        showModal = true;
    }

    const closeModal = () => {
        showModal = false;
    };
</script>

<main class="flex flex-col items-center justify-center h-screen w-screen">
    <h1 class="mb-5 text-3xl font-bold text-white">Built with Svelte</h1>
    <Dice on:modalOpenClick={handleModalOpenClick}/>
    {#if showModal}
        <div class="fixed inset-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center z-50"
             in:fade out:fade>
            <div class="relative bg-white p-8 rounded-md max-w-4xl text-center {currentModalPage === Contact ? '' : 'w-screen'}">
                <button class="absolute top-2 right-2 bg-transparent border-none text-2xl cursor-pointer"
                        on:click={closeModal}>&times;
                </button>
                <svelte:component this="{currentModalPage}"/>
            </div>
        </div>
    {/if}
</main>
