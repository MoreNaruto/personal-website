<script>
    export let currentSection;
    export let skillsData;

    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    // Flag to indicate when the component is mounted
    let mounted = false;

    // Set the mounted flag to true when the component is mounted
    onMount(() => {
        mounted = true;
    });
</script>

<style>
    .progress {
        transition: width 1s ease-in-out;
    }
</style>

{#if currentSection === 'frontend'}
    <div in:fly={{ x: -200, duration: 800 }}>
        <h2 class="text-xl font-bold mb-4">Frontend Skills</h2>
        {#each skillsData.frontend as { name, level }}
            <div class="flex items-center mb-2">
                <div class="w-32 mr-4">{name}</div>
                <div class="flex-1 bg-gray-300 rounded-lg overflow-hidden">
                    <div
                            class="bg-blue-500 text-white text-right py-1 px-2 progress"
                            style="width: {mounted ? level : 0}%"
                    >
                        {level}%
                    </div>
                </div>
            </div>
        {/each}
    </div>
{:else if currentSection === 'backend'}
    <div in:fly={{ x: -200, duration: 800 }}>
        <h2 class="text-xl font-bold mb-4">Backend Skills</h2>
        {#each skillsData.backend as { name, level }}
            <div class="flex items-center mb-2">
                <div class="w-32 mr-4">{name}</div>
                <div class="flex-1 bg-gray-300 rounded-lg overflow-hidden">
                    <div
                            class="bg-green-500 text-white text-right py-1 px-2 progress"
                            style="width: {mounted ? level : 0}%"
                    >
                        {level}%
                    </div>
                </div>
            </div>
        {/each}
    </div>
{:else if currentSection === 'devops'}
    <div in:fly={{ x: -200, duration: 800 }}>
        <h2 class="text-xl font-bold mb-4">Devops Skills</h2>
        {#each skillsData.devOps as { name, level }}
            <div class="flex items-center mb-2">
                <div class="w-32 mr-4">{name}</div>
                <div class="flex-1 bg-gray-300 rounded-lg overflow-hidden">
                    <div
                            class="bg-red-500 text-white text-right py-1 px-2 progress"
                            style="width: {mounted ? level : 0}%"
                    >
                        {level}%
                    </div>
                </div>
            </div>
        {/each}
    </div>
{:else if currentSection === 'database'}
    <div in:fly={{ x: -200, duration: 800 }}>
        <h2 class="text-xl font-bold mb-4">Database Skills</h2>
        {#each skillsData.database as { name, level }}
            <div class="flex items-center mb-2">
                <div class="w-32 mr-4">{name}</div>
                <div class="flex-1 bg-gray-300 rounded-lg overflow-hidden">
                    <div
                            class="bg-yellow-500 text-white text-right py-1 px-2 progress"
                            style="width: {mounted ? level : 0}%"
                    >
                        {level}%
                    </div>
                </div>
            </div>
        {/each}
    </div>
{:else if currentSection === 'security'}
    <div in:fly={{ x: -200, duration: 800 }}>
        <h2 class="text-xl font-bold mb-4">Security Skills</h2>
        {#each skillsData.security as { name, level }}
            <div class="flex items-center mb-2">
                <div class="w-32 mr-4">{name}</div>
                <div class="flex-1 bg-gray-300 rounded-lg overflow-hidden">
                    <div
                            class="bg-stone-500 text-white text-right py-1 px-2 progress"
                            style="width: {mounted ? level : 0}%"
                    >
                        {level}%
                    </div>
                </div>
            </div>
        {/each}
    </div>
{:else if currentSection === 'testing'}
    <div in:fly={{ x: -200, duration: 800 }}>
        <h2 class="text-xl font-bold mb-4">Testing Skills</h2>
        {#each skillsData.testing as { name, level }}
            <div class="flex items-center mb-2">
                <div class="w-32 mr-4">{name}</div>
                <div class="flex-1 bg-gray-300 rounded-lg overflow-hidden">
                    <div
                            class="bg-teal-500 text-white text-right py-1 px-2 progress"
                            style="width: {mounted ? level : 0}%"
                    >
                        {level}%
                    </div>
                </div>
            </div>
        {/each}
    </div>
{:else if currentSection === 'cicd'}
    <div in:fly={{ x: -200, duration: 800 }}>
        <h2 class="text-xl font-bold mb-4">CI/CD Skills</h2>
        {#each skillsData.cicd as { name, level }}
            <div class="flex items-center mb-2">
                <div class="w-32 mr-4">{name}</div>
                <div class="flex-1 bg-gray-300 rounded-lg overflow-hidden">
                    <div
                            class="bg-fuchsia-500 text-white text-right py-1 px-2 progress"
                            style="width: {mounted ? level : 0}%"
                    >
                        {level}%
                    </div>
                </div>
            </div>
        {/each}
    </div>
{/if}
