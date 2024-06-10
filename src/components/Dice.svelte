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
        startX = event.clientX;
        startY = event.clientY;
    };

    const onMouseMove = (event) => {
        if (!isDragging) return;
        currentX = event.clientX;
        currentY = event.clientY;

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

    function handleButtonClick(page) {
        dispatch('modalOpenClick', {page: page});
    }

    onMount(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    });
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

<div class="scene w-[32vw] h-[32vw] mx-auto mt-24" on:mousedown={onMouseDown}>
    <div class="dice w-full h-full relative" bind:this={dice}>
        <div class="face front absolute w-[32vw] h-[32vw] bg-red-200 border items-center justify-center text-center text-[2vw] font-bold"
             style="transform: translateZ(calc(32vw / 2));">
            <p class="mb-4">This is a description. Click the button to learn more!</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("about-me")}>About Me</button>
        </div>
        <div class="face back absolute w-[32vw] h-[32vw] bg-amber-200 border flex items-center justify-center text-[4vw] font-bold"
             style="transform: rotateY(180deg) translateZ(calc(32vw / 2));">6
        </div>
        <div class="face left absolute w-[32vw] h-[32vw] bg-lime-200 border flex items-center justify-center text-[4vw] font-bold"
             style="transform: rotateY(-90deg) translateZ(calc(32vw / 2));">3
        </div>
        <div class="face right absolute w-[32vw] h-[32vw] bg-teal-200 border flex items-center justify-center text-[4vw] font-bold"
             style="transform: rotateY(90deg) translateZ(calc(32vw / 2));">4
        </div>
        <div class="face top absolute w-[32vw] h-[32vw] bg-indigo-200 border flex items-center justify-center text-[4vw] font-bold"
             style="transform: rotateX(90deg) translateZ(calc(32vw / 2));">5
        </div>
        <div class="face bottom absolute w-[32vw] h-[32vw] bg-yellow-400 border flex items-center justify-center text-[4vw] font-bold"
             style="transform: rotateX(-90deg) translateZ(calc(32vw / 2));">2
        </div>
    </div>
</div>
