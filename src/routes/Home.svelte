<script>
    import Dice from '../components/Dice.svelte';
    import AboutMe from "../components/aboutMe/AboutMe.svelte";
    import Career from "../components/Career.svelte";
    import BookReviews from "../components/BookReviews.svelte";
    import Contact from "../components/Contact.svelte";
    import Skills from "../components/skills/SkillsSet.svelte";
    import RandomWord from "../components/RandomWord.svelte";
    import { fade } from 'svelte/transition';

    let showModal = false;
    let currentModalPage = AboutMe;
    let diceRef;

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

    function handleBackdropClick(event) {
        if (event.target.classList.contains('fixed')) {
            closeModal();
        }
    }

    const closeModal = () => {
        showModal = false;
    };

    function rollDice() {
        diceRef.rotateDice();
    }
</script>

<style>
    h1 {
        font-size: revert;
        font-weight: revert;
        color: white;
        cursor: pointer;
    }
</style>

<main class="flex flex-col items-center justify-center h-screen w-screen">
    <button class="px-4 py-2 bg-blue-500 text-white xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl rounded" on:click={rollDice}>Roll the Die!</button>
    <h6 class="xs:mb-2 sm:mb-4 lg:mb-8 xl:mb-16 mt-2 text-white">Or move it yourself</h6>
    <Dice bind:this={diceRef} on:modalOpenClick={handleModalOpenClick}/>
    {#if showModal}
        <div class="fixed inset-0 h-screen bg-black bg-opacity-70 flex justify-center items-center z-10"
             in:fade out:fade on:click={handleBackdropClick}>
            <div class="relative bg-white rounded-md max-h-screen
                    {currentModalPage === Contact || currentModalPage === Career ? '' : 'w-screen'}
                    {currentModalPage === Career ?  '' : 'text-center max-w-4xl'}
                    {currentModalPage === BookReviews ? 'overflow-auto' : 'overflow-hidden'}">
                <button class="absolute top-2 right-2 bg-transparent border-none text-2xl cursor-pointer"
                        on:click={closeModal}>&times;
                </button>
                <svelte:component this="{currentModalPage}"/>
            </div>
        </div>
    {/if}
</main>

<footer class="fixed bottom-0 w-full bg-gray-800 text-white text-center p-4">
    &copy; 2024 Thomas Morris. All rights reserved. IllOptimumHydro LLC. Built in Svelte
</footer>
