<script>
    import {onMount} from "svelte";
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    let dice;
    let isDragging = false;
    let startX, startY, currentX, currentY;
    let rotationX = 0, rotationY = 0;
    let translateZValue = 'calc(40vw / 2)';

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

    function updateTranslateZ() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        let size;
        if (vw >= 1280) {
            size = 20;
        } else if (vw >= 901) {
            size = 30;
        } else if (vw >= 640) {
            size = 35;
        } else {
            size = 60;
        }

        translateZValue = `translateZ(calc(${size / 2}vw))`;
    }

    onMount(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        dice.addEventListener('touchmove', onTouchMove);
        dice.addEventListener('touchend', onTouchEnd);

        updateTranslateZ();
        window.addEventListener('resize', updateTranslateZ);

        return () => {
            window.removeEventListener('resize', updateTranslateZ);
        };
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

<div class="scene w-[60vw] h-[60vw] sm:w-[35vw] sm:h-[35vw] lg:w-[30vw] lg:h-[30vw] xl:w-[20vw] xl:h-[20vw] mx-auto mt-24"
     on:mousedown={onMouseDown}
     on:touchstart={onTouchStart}>
    <div class="dice w-full h-full relative" bind:this={dice}>
        <div class="face front absolute w-full h-full bg-red-200 border items-center justify-center text-center text-[3vw] xs:text-[10vw] font-bold"
             style="transform: {translateZValue}">
            <p class="mb-10">Who am I?</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("about-me")}>
                Click Me
            </button>
        </div>
        <div class="face back absolute w-full h-full bg-amber-200 border items-center justify-center text-center text-[3vw] xs:text-[10vw] font-bold"
             style="transform: rotateY(180deg) {translateZValue}">
            <p class="mb-10">My Skills!</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("skills")}>
                Click Me
            </button>
        </div>
        <div class="face left absolute w-full h-full bg-lime-200 border items-center justify-center text-center text-[3vw] xs:text-[10vw] font-bold"
             style="transform: rotateY(-90deg) {translateZValue}">
            <p class="mb-10">Want to chat?</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("contact")}>
                Click Me
            </button>
        </div>
        <div class="face right absolute w-full h-full bg-teal-200 border items-center justify-center text-center text-[3vw] xs:text-[10vw] font-bold"
             style="transform: rotateY(90deg) {translateZValue}">
            <p class="mb-10">Learn a new word!</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("random-word")}>
                Click Me
            </button>
        </div>
        <div class="face top absolute w-full h-full bg-indigo-200 border items-center justify-center text-center text-[3vw] xs:text-[10vw] font-bold"
             style="transform: rotateX(90deg) {translateZValue}">
            <p class="mb-10">Follow my career!</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("career")}>
                Click Me
            </button>
        </div>
        <div class="face bottom absolute w-full h-full bg-yellow-400 border items-center justify-center text-center text-[3vw] xs:text-[10vw] font-bold"
             style="transform: rotateX(-90deg) {translateZValue}">
            <p class="mb-10">My Book Reviews!</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => handleButtonClick("book-reviews")}>
                Click Me
            </button>
        </div>
    </div>
</div>
