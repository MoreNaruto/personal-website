<script>
    import Dice from '../components/Dice.svelte';
    import AboutMe from "../components/AboutMe.svelte";
    import Career from "../components/Career.svelte";
    import BookReviews from "../components/BookReviews.svelte";
    import Contact from "../components/Contact.svelte";
    import Skills from "../components/Skills.svelte";
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
        currentModalPage = pageComponentMap.get(event.detail.page);
        showModal = true;
    }

    const closeModal = () => {
        showModal = false;
    };
</script>

<main class="flex flex-col items-center justify-center h-screen w-screen">
    <h1 class="mb-5 text-3xl font-bold text-white">Pick a side</h1>
    <Dice on:modalOpenClick={handleModalOpenClick}/>
    {#if showModal}
        <div class="modal" transition:fade>
            <div class="modal-content">
                <button class="close-button" on:click={closeModal}>&times;</button>
                <svelte:component this="{currentModalPage}"/>
            </div>
        </div>
    {/if}
</main>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        position: relative;
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        max-width: 500px;
        text-align: center;
    }

    .close-button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: transparent;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }
</style>
