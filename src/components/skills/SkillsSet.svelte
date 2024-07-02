<script>
    import Skills from './Skills.svelte';

    let currentSection = 'frontend';

    const skillsData = {
        frontend: [
            { name: 'ReactJS', level: 90 },
            { name: 'Typescript', level: 85 },
            { name: 'Javascript', level: 85 },
            { name: 'HTML/CSS', level: 85 },
            { name: 'Tailwind', level: 80 },
            { name: 'Yarn/NPM', level: 75 },
            { name: 'NodeJS', level: 70 },
            { name: 'Svelte', level: 60 },
            { name: 'NextJS', level: 50 },
            { name: 'ReactNative', level: 45 },
            { name: 'AngularJS', level: 25 },
            { name: 'EmberJS', level: 20 },
        ],
        backend: [
            { name: 'Java/Spring', level: 95 },
            { name: 'Java/J2EE', level: 75 },
            { name: 'Java/Vert.x', level: 70 },
            { name: 'Java/Webflux', level: 70 },
            { name: 'GraphQL', level: 70 },
            { name: 'RxJava', level: 68 },
            { name: 'GoLang/Gin', level: 65 },
            { name: 'Scala', level: 45 },
            { name: 'C#/.NET', level: 40 },
            { name: 'PHP/Laravel', level: 40 },
            { name: 'Ruby/Rails', level: 30 },
            { name: 'Ruby/Sinatra', level: 25 },
            { name: 'Python', level: 15 },
        ],
        devOps: [
            { name: 'AWS Services', level: 55 },
            { name: 'RabbitMQ', level: 50 },
            { name: 'UNIX', level: 50 },
            { name: 'Docker', level: 40 },
            { name: 'Terraform', level: 25 },
            { name: 'GCP', level: 20 },
            { name: 'Apache Kafka', level: 15 },
            { name: 'Azure', level: 5 },
            { name: 'Ansible', level: 5 },
            { name: 'Chef', level: 5 },
            { name: 'Saltstack', level: 5 },
        ],
        database: [
            { name: 'Postgres', level: 80 },
            { name: 'MySQL', level: 77 },
            { name: 'MongoDB', level: 75 },
            { name: 'DocumentDB', level: 50 },
            { name: 'DynamoDB', level: 25 },
        ],
        security: [
            { name: 'JWT', level: 80 },
            { name: 'Oatuh', level: 30 },
            { name: 'LDAP', level: 20 },
            { name: 'SAML', level: 15 },
        ],
        testing: [
            { name: 'Junit/Jupiter', level: 90 },
            { name: 'Jest', level: 70 },
            { name: 'React Testing', level: 65 },
            { name: 'Scala Testing', level: 60 },
            { name: 'Cucumber', level: 55 },
            { name: 'Selenium', level: 50 },
            { name: 'Cypress', level: 45 },
            { name: 'Karma', level: 30 },
            { name: 'PHPUnit', level: 25 },
            { name: 'NUnit', level: 25 },
            { name: 'RSpec', level: 20 },
            { name: 'Gatling', level: 15 },
        ],
        cicd: [
            {name: 'Github', level: 65},
            {name: 'Jenkins', level: 50},
            {name: 'Circle CI', level: 30},
            {name: 'AWS', level: 25}
        ]
    };
</script>

<div class="p-4">
    <h1 class="text-2xl font-bold mb-4">My Technical Skills</h1>
    <nav class="mb-4">
        <button
                on:click={() => currentSection = 'frontend'}
                class="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 focus:outline-none mr-4">
            Frontend
        </button>
        <button
                on:click={() => currentSection = 'backend'}
                class="bg-green-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-green-600 focus:outline-none mr-4">
            Backend
        </button>
        <button
                on:click={() => currentSection = 'devops'}
                class="bg-red-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-red-600 focus:outline-none mr-4">
            Devops
        </button>
        <button
                on:click={() => currentSection = 'database'}
                class="bg-yellow-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-yellow-600 focus:outline-none mr-4">
            Database
        </button>

        <button
                on:click={() => currentSection = 'security'}
                class="bg-stone-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-stone-600 focus:outline-none mr-4">
            Security
        </button>

        <button
                on:click={() => currentSection = 'testing'}
                class="bg-teal-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-teal-600 focus:outline-none mr-4">
            Testing
        </button>

        <button
                on:click={() => currentSection = 'cicd'}
                class="bg-fuchsia-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-fuchsia-600 focus:outline-none">
            CI/CD
        </button>
    </nav>

    <Skills {currentSection} {skillsData} />
</div>
