<script lang="ts">
    import {Stepper, makeStep} from '@efstajas/svelte-stepper';

    import Description from "./Description.svelte";

    const exampleSteps = [
        makeStep({
            component: Description,
            props: undefined
        })
        // makeStep({
        //     component: MySecondStepWithProps,
        //     props: {
        //         foo: 'bar',
        //     },
        // }),
        // makeStep({
        //     component: MyFinalStep,
        //     props: undefined
        // })
    ];
</script>

<Stepper
        steps={exampleSteps}
        defaultTransitionDuration={1000}
/>
