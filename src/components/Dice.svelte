<script>
    import {onMount} from "svelte";
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    let dice;
    let isDragging = false;
    let startX, startY, currentX, currentY;
    let rotationX = 0, rotationY = 0;

    const onMouseDown = (event) => {
        isDragging = true;
        startX = getClientX(event);
        startY = getClientY(event);
    };

    const onTouchStart = (event) => {
        const touch = event.touches[0];
        isDragging = true;
        startX = getClientX(touch);
        startY = getClientY(touch);
    };

    const onMouseMove = (event) => {
        if (!isDragging) return;
        currentX = getClientX(event);
        currentY = getClientY(event);

        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;

        dice.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        startX = currentX;
        startY = currentY;
    };

    const onTouchMove = (event) => {
        if (!isDragging || event.touches.length !== 1) return;
        const touch = event.touches[0];
        currentX = getClientX(touch);
        currentY = getClientY(touch);

        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;

        dice.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        startX = currentX;
        startY = currentY;
    };

    const onMouseUp = () => {
        isDragging = false;
    };

    const onTouchEnd = () => {
        isDragging = false;
    };

    function handleButtonClick(page) {
        dispatch('modalOpenClick', {page: page});
    }

    onMount(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        dice.addEventListener('touchmove', onTouchMove);
        dice.addEventListener('touchend', onTouchEnd);
    });

    function getClientX(event) {
        return event.clientX || event.touches[0].clientX;
    }

    function getClientY(event) {
        return event.clientY || event.touches[0].clientY;
    }
</script>

<style>
    .scene {
        perspective: 1000px;
    }

    .dice {
        transform-style: preserve-3d;
        transition: transform 0.3s ease-out;
    }
</style>

<div class="scene w-[32vw] h-[32vw] mx-auto mt-24"
     on:mousedown={onMouseDown}
     on:touchstart={onTouchStart}>
    <div class="dice w-full h-full relative" bind:this={dice}>
        <div class="face front absolute w-[32vw] h-[32vw] bg-red-200 border items-center justify-center text-center text-[3vw] font-bold"
             style="transform: translateZ(calc(32vw / 2));">
            <p class="mb-10">Who am I?</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("about-me")}>
                Click Me
            </button>
        </div>
        <div class="face back absolute w-[32vw] h-[32vw] bg-amber-200 border items-center justify-center text-center text-[3vw] font-bold"
             style="transform: rotateY(180deg) translateZ(calc(32vw / 2));">
            <p class="mb-10">Look at what I can do!</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("skills")}>
                Click Me
            </button>
        </div>
        <div class="face left absolute w-[32vw] h-[32vw] bg-lime-200 border items-center justify-center text-center text-[3vw] font-bold"
             style="transform: rotateY(-90deg) translateZ(calc(32vw / 2));">
            <p class="mb-10">Want to chat?</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("contact")}>
                Click Me
            </button>
        </div>
        <div class="face right absolute w-[32vw] h-[32vw] bg-teal-200 border items-center justify-center text-center text-[3vw] font-bold"
             style="transform: rotateY(90deg) translateZ(calc(32vw / 2));">
            <p class="mb-10">Learn a new word!</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("random-word")}>
                Click Me
            </button>
        </div>
        <div class="face top absolute w-[32vw] h-[32vw] bg-indigo-200 border items-center justify-center text-center text-[3vw] font-bold"
             style="transform: rotateX(90deg) translateZ(calc(32vw / 2));">
            <p class="mb-10">Follow my career!</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("career")}>
                Click Me
            </button>
        </div>
        <div class="face bottom absolute w-[32vw] h-[32vw] bg-yellow-400 border items-center justify-center text-center text-[3vw] font-bold"
             style="transform: rotateX(-90deg) translateZ(calc(32vw / 2));">
            <p class="mb-10">My Book Reviews!</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("book-reviews")}>
                Click Me
            </button>
        </div>
    </div>
</div>
