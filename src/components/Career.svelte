<script>
    import { marked } from 'marked';
    import Thoughtworks from '../markdowns/careersJobs/thoughtworks.md';
    import Allstate from '../markdowns/careersJobs/allstate.md';
    import ActiveCampaign from '../markdowns/careersJobs/activecampaign.md';
    import RallyHealth from '../markdowns/careersJobs/rallyHealth.md';
    import Clearstep from '../markdowns/careersJobs/clearstep.md';
    import Improovy from '../markdowns/careersJobs/improovy.md';
    import Makalogistics from '../markdowns/careersJobs/makalogistics.md';
    import Discover from '../markdowns/careersJobs/discover.md';

    const jobs = [
        {
            content: Thoughtworks,
            styling: 'bg-thoughtworks text-white'
        },
        {
            content: Allstate,
            styling: 'bg-allstate text-white'
        },
        {
            content: ActiveCampaign,
            styling: 'bg-activecampaign text-white'
        },
        {
            content: RallyHealth,
            styling: 'bg-rallyHealth text-white'
        },
        {
            content: Clearstep,
            styling: 'bg-clearstep text-white'
        },
        {
            content: Improovy,
            styling: 'bg-improovy text-white'
        },
        {
            content: Clearstep,
            styling: 'bg-clearstep text-white'
        },
        {
            content: Makalogistics,
            styling: 'bg-makalogistics text-white'
        },
        {
            content: Discover,
            styling: 'bg-discover text-white'
        }
    ];

    let currentPage = 0;

    function nextPage() {
        if (currentPage < jobs.length - 1) {
            currentPage += 1;
        }
    }

    function previousPage() {
        if (currentPage > 0) {
            currentPage -= 1;
        }
    }
</script>

<style>
    .markdown-content {
        height: 100%;
        overflow-y: auto;
    }
</style>

<div class="h-full flex flex-col items-center">
    <div class="w-full max-w-5xl flex flex-col justify-between h-full">
        <div class="markdown-content prose job p-4 {jobs[currentPage].styling} overflow-y-auto max-h-[80vh]">
            {@html marked(jobs[currentPage].content)}
        </div>

        <div class="sticky bottom-0 left-0 right-0 flex justify-between p-4 {jobs[currentPage].styling}">
            <button
                    on:click={previousPage}
                    class="px-4 py-2 rounded {currentPage === 0 ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white'}"
                    disabled={currentPage === 0}>
                Previous
            </button>
            <button
                    on:click={nextPage}
                    class="px-4 py-2 rounded {currentPage === jobs.length - 1 ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white'}"
                    disabled={currentPage === jobs.length - 1}>
                Next
            </button>
        </div>
    </div>
</div>

