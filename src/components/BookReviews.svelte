<script>
    import { fade, slide } from 'svelte/transition';
    import { marked } from 'marked';
    import { onMount } from 'svelte';
    import bookReviews from '../markdowns/bookReviews/*.md';

    let books = [
        { title: "Thinking Fast and Slow", author: "Daniel Kahneman", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/938db228-5030-411b-88e3-e5da76c9cb27" },
        { title: "The Universe from Nothing", author: "Lawrence Krause", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/9238e9ec-26c6-47e9-a25e-92a674e74a82" },
        { title: "The Selfish Gene", author: "Richard Dawkins", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/7752311b-fc01-4f12-895b-a7186951d10e" },
        { title: "Awaken The Giant Within", author: "Anthony Robbins", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/d92ff541-a711-4813-a69b-9ed461791220" },
        { title: "The 5 Love Languages", author: "Gary Chapman", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/08b5ab73-2348-43a8-b363-d5bd084b00e1" },
        { title: "Living with a SEAL", author: "Jesse Itzler", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/c92cdb9a-4e40-44c7-bbd1-c23ff7fdeabe" },
        { title: "The Extended Phenotype", author: "Richard Dawkins", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/cc29fe07-2b61-460e-b58f-d99604a700a7" },
        { title: "Dead Aid", author: "Dambisa Moyo", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/11859617-2a81-43d7-a7c1-00df79cbed5f" },
        { title: "Don't Make Me Think: A Common Sense Approach to Web Usability", author: "Steve Krug", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/071150c3-ec1a-403b-8f2b-58d7158ece76" },
        { title: "The Blind Watchmaker", author: "Richard Dawkins", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2aa056a2-935e-4b0e-a60c-7b1fb4b3d40f" },
        { title: "How the West was Lost", author: "Dambisa Moyo", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/b070bf07-68dd-428f-8405-0f5bedc6c273" },
        { title: "Clean Code: A Handbook of Agile Software Craftsmanship", author: "Robert C Martin", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/12e95fa9-3f0f-4235-adc0-53a074a1088f" },
        { title: "Software Systems Architecture", author: "Nick Rozanski and Eoin Woods", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/5c17d7c5-4f85-45ff-a123-b64e80e9e6b2" },
        { title: "Why There is No God", author: "Armin Navabi", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/10c84d8d-9363-40e4-a2b5-c37d74a23973" },
        { title: "Enterprise Integration Patterns, Designing, Building, and Deploying Messaging Solutions", author: "Gregor Hope and Bobby Woolf", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/45f65628-08dd-4eca-b516-ee200739bfa7" },
        { title: "Brain rules for Baby", author: "John Medina", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/a1f01cb5-2e4d-417a-83c6-5356eb46dbeb" },
        { title: "Foundational Falsehoods of Creationism", author: "Aron Ra", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/4a5e18ca-c749-49f2-93bb-3763ded13f13" },
        { title: "Building Great Software Engineering Teams", author: "Josh Tyler", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f94edfc6-38b5-487c-ac49-4978f7bde0ac" },
        { title: "Calculating the Cosmos: How Mathematics unveils the Universe", author: "Ian Stewart", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/5c5607ea-2692-4ae9-ac52-513f5e45b0bb" },
        { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/9804710d-7bb3-44a6-916c-145be6d26d02" },
        { title: "What Every Real Estate Investor Needs to Know About Cash Flow", author: "Gallinelli, Frank", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/4629a796-82ef-495f-a082-9d042fd70e16" },
        { title: "Trade Your Way to Financial Freedom", author: "Van K. Tharp", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/cbcbe32f-a0ca-4b6b-a338-1ae27143c2fc" },
        { title: "The Book on Investing in Real Estate with No (and low) Money Down", author: "Brandon Turner", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/fc36be65-a6d7-4298-9ef3-924a007003e0" },
        { title: "How to Influence People and Make Friends", author: "Dale Carnegie", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/e7620a84-5f0e-44b3-b2fb-77133b9b1d43" },
        { title: "One up on Wall Street", author: "Peter Lynch", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/77f9c8f1-b3e3-4305-9914-3fb07cb579ce" },
        { title: "How I Turned $1,000 into Five Million in Real Estate", author: "William Nickerson", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/5ae13c5b-5c7b-4615-a92d-faacd7d449b2" },
        { title: "Radical Focus", author: "Christina Wodtke", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/bf588d9d-6726-415a-aed7-c4e1e27ca23f" },
        { title: "Godless: How an evangelical Preacher Became One of America's Leading Atheists", author: "Dan Baker", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2f01a28e-f791-4168-89c6-ea3937add2ab" },
        { title: "Decisive: How to Make Better Choices in Life and Work", author: "Chip and Dan Heath", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/1348bf2d-32f6-4b88-9bd4-b5100995109a" },
        { title: "Tetralogue: I'm Right, You're Wrong", author: "Timothy Williamson", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2da32da7-c50f-4623-a19b-3b10d6628a7c" },
        { title: "The Essays of Warren Buffett", author: "Lawrence A. Cunningham", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/64a2ac18-39ab-4f5c-b0f6-d1f2e5b3f479" },
        { title: "Atheist Universe: The Thinking Person's Answer to Christian Fundamentalism", author: "David Mills", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2a60dc35-ab94-4420-b183-259d96d83a84" },
        { title: "The Book on Rental Property Investing", author: "Brandon Turner", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/86093c14-be82-4c91-ab02-2e29d96e34a8" },
        { title: "Fighting God: An Atheist Manifesto For a Religious World", author: "David Silverman", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2f7e5978-a359-4404-8b71-0f92e8cfcd4f" },
        { title: "The Bell Curve: Intelligence and Class Structure in American Life", author: "Richard J. Herrnstein and Charles Murray", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/7f082a00-2a41-47cf-b992-1a1fa89d8935" },
        { title: "The Moral Landscape", author: "Sam Harris", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/8699187f-8816-4fb9-810b-42fd5ed288dc" },
        { title: "The Coddling of the American Mind: How Good Intentions and Bad Ideas Are Setting Up a Generation for Failure", author: "Jonathan Haidt and Greg Lukianoff", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/c7b80be0-0714-45fc-87d6-e3aa4d415a0d" },
        { title: "The Greatest Story Ever Told - So Far", author: "Lawrence M. Krauss", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/faa02da7-cdca-46a7-9c93-768f3e04e787" },
        { title: "The End of Faith", author: "Sam Harris", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f1a2677e-86d0-43d9-93c5-e711515d1b66" },
        { title: "Outliers: The Story of Success", author: "Malcolm Gladwell", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/9c41cca4-cbf3-449b-86ba-48b74f37cb6f" },
        { title: "Lying", author: "Sam Harris", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/e217fb60-155f-4a2e-b098-178f08a54f14" },
        { title: "The Gaslight Effect", author: "Dr. Robin Stern", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/d1dfac52-8a51-4c9a-b126-6d7ec607a974" },
        { title: "The Sociopaths Guide to Getting Ahead", author: "P.T. Elliott", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/cb700eee-6fa3-4630-afca-4766667a29d3" },
        { title: "Antifragile: Things That Gain From Disorder", author: "Nassim Taleb", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2e2d04df-ec8d-40fc-a7a2-8ef61a285cff" },
        { title: "On Tyranny: Twenty Lessons from the Twentieth Century", author: "Timothy Synder", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/9e4aa573-51e2-4524-93e1-4133c3bfd296" },
        { title: "Captivate", author: "Vanessa Van Edwards", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/450672f2-fc8d-4aaf-bf58-ddac0f528db6" },
        { title: "The Upward Spiral: Using Neuroscience to Reverse the Course of Depression, One Small Change at a Time", author: "Alex Korb", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f94877c0-788e-46c2-a91b-41b9f2ae246e" },
        { title: "The Whole-Brain Child: 12 Revolutionary Strategies to Nurture your Child's Developing Mind", author: "Daniel J. Siegel and Tina Payne Bryson", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f75e4ddc-3cf0-492e-99b7-f6dc5dc7aa66" },
        { title: "Talking to Strangers", author: "Malcolm Gladwell", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/cc691621-a652-4dc4-a291-21fe1145fba4" },
        { title: "Forget 'Having It All': How America Messed Up Motherhood--and How to Fix It", author: "Amy Westervelt", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/ba40bc16-5835-4a88-ba52-a9051aef1438" },
        { title: "How to Change Minds The Art of Influence Without Manipulation", author: "Rob Jolles", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/d012ce1b-06ec-4b69-a7f8-d8ab0bb2cf31" },
        { title: "How to Have Impossible Conversations", author: "Peter Boghossian and James Lindsay", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/e2336728-2f05-42a9-8244-a4123cd2f232" },
        { title: "Everyone Lies", author: "Seth Stephens-Davidowitz", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/5ca4fbd7-f0a2-44da-bff1-38e3844ee2fe" },
        { title: "When Breath Becomes Air", author: "Paul Kalanithi", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/04aa0919-6c77-4932-95db-e6d966688b5c" },
        { title: "The Madness of Crowds", author: "Douglass Murray", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/79768804-0343-47e2-b7c0-25527298bd59" },
        { title: "The Tipping Point", author: "Malcolm Gladwell", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2674b0f5-7616-4c0b-b54d-45e9961fc6bd" },
        { title: "The Lucifer Effect", author: "Philip Zimbardo", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/d854fd57-8026-4059-af01-a57f43ddf1e2" },
        { title: "Dare to Lead", author: "Brene Brown", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/4b65e639-22c2-46d6-8eed-e5adf0d72881" },
        { title: "Start with Why", author: "Simon Sinek", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f3408589-e687-4fbb-a853-be8f6164fe14" },
        { title: "Human Diversity: The Biology of Gender, Race, and Class", author: "Charles Murray", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/95948f81-bd2a-436a-934c-b305a5625530" },
        { title: "Understanding the Dark Side of Human Nature", author: "Daniel Breyer", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/6c8a8dae-1500-480a-b9c4-ec2ebaf83af2" },
        { title: "Letter to a Christian Nation", author: "Sam Harris", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/a7baa741-1dd4-4688-bbcf-ef0a3b97e5b6" },
        { title: "How will you measure your life?", author: "Clayton M. Christensen, James Allworth, and Karen Dillon", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/a8d6c580-e5a6-48a1-99b4-0012a0e62a2a" },
        { title: "Twelve Pillars", author: "Jim Rohn and Chris Widener", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/de2c5c3d-682e-4da1-a96e-c5e4845f3fb4" },
        { title: "Fantasyland: How American Went Haywire, A 500-Year History", author: "Kurt Andersen", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/1d975a4e-f611-42fc-a742-c5650c39f2b6" },
        { title: "Team Human | The Social Dilemma", author: "Douglas Rushkoff | Tristian Harris", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/a5abd74c-840b-4641-87d0-c4eca5c43031" },
        { title: "Loneliness: Human Nature and the Need for Social Connection", author: "John T. Cacioppo & William Patrick", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/b0603505-83aa-4d40-b4de-29364fbbcd88" },
        { title: "Democracy At Work: A Cure For Capitalism", author: "Richard D. Wolff", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/a996ea79-0df3-4cc6-b5a1-220de1f81cad" },
        { title: "The Meritocracy Trap", author: "Daniel Markovits", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/1acecc01-5f09-4443-a0c3-024e95668b2c" },
        { title: "Creativity Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration", author: "Ed Catmull", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/5f69791f-2b3b-4acc-ba64-08d7b9246a86" },
        { title: "Blueprint: The Evolutionary Origins of a Good Society", author: "Nicholas A Christakis", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/59377ba5-acfd-4c8f-8c00-490254ddfc44" },
        { title: "The Four Horsemen: The Conversation that Sparked an Atheist Revolution", author: "Stephen Fry", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/64d234ce-c67b-4aa6-b801-d6d0881bac5f" },
        { title: "The Precipice: Existential Risk and the Future of Humanity | Engineering The Apocalypse", author: "Toby Ord | Rob Reid", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/ead10920-2950-40e3-b752-282c4e363803" },
        { title: "Management: Tasks, Responsibilities, Practices", author: "Peter F. Drucker", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/7be83522-9eec-4c96-9b9b-9199b7c4bc0a" },
        { title: "The Phoenix Project", author: "Gene Kim, Kevin Behr, and George Spafford", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/4bb69f6b-fbc2-4de6-b9bc-2b209426ca2c" },
        { title: "Conscious: A Brief Guide to the Fundamental Mystery of the Mind", author: "Annaka Harris", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/196bf5a9-bdeb-41de-a6b4-bdf2e0813c77" },
        { title: "How to Avoid A Climate Disaster: The Solution we have to and the Breakthroughs We Need", author: "Bill Gates", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/26c3be10-cba4-4d3a-bf48-3d6a6a2628b7" },
        { title: "Human Compatible: Artificial Intelligence And The Problem of Control", author: "Stuart Russell", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/436ed520-169d-4251-b59b-e479e13812b8" },
        { title: "Evicted: Poverty and Profit in the American City", author: "Matthew Desmond", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/8f86e6d1-96b4-4ec1-9620-69c3854f4e95" },
        { title: "The Master and His Emissary: The Divided Brain and the Making of the Western World", author: "Iain McGilchrist", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/a6dbaa47-d406-4942-a974-c7efb5688830" },
        { title: "Invisible Women: Data Bias in a World Designed for Men", author: "Caroline Criado Perez", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/dcdbfa83-dad2-49b5-a2e6-0ff898d8bddb" },
        { title: "Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets", author: "Nassim Nicholas Taleb", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/696436f5-9c1e-4dee-910a-432e326ae6cd" },
        { title: "Nudge: The Final Edition", author: "Richard H. Thaler and Cass R. Sunstein", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/939196bf-af54-4776-9b53-23a58b70e17e" },
        { title: "Never Lose a Customer Again: Turn Any Sale Into LifeLong Loyalty in 100 Days", author: "Joey Coleman", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/d051ed6c-2b3b-4230-b793-20128c91fb75" },
        { title: "Superbugs: The Race to Stop an Epidemic", author: "Matt McCarthy MD", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/ae0ebcd0-f828-4c64-ac0f-5c8efe9d3129" },
        { title: "Crucial Conversations: Tools for Talking When Stakes are High", author: "Joseph Grenny", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/217cd67d-1dcf-4260-9a75-58e76a7b4f6e" },
        { title: "Transcend: The New Science of Self-Actualization", author: "Scott Barry Kaufman", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/0f67d64b-e6d8-4dbf-94b5-b29407cc8ad1" },
        { title: "Bullshit Jobs", author: "David Graeber", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f919f2ee-d4c3-4033-9d88-7ef2543bf824" },
        { title: "David and Goliath", author: "Malcolm Gladwell", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/3bd71ce7-f00e-4669-8979-bd5e39a20672" },
        { title: "Why We Sleep: Unlocking the Power of Sleep and Dreams", author: "Matthew Walker, PhD", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f90a4462-7a82-4e83-b943-ec2afe2f6c8d" },
        { title: "Woke Racism: 'How a New Religion Has Betrayed Black America'", author: "John McWhorter", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/a69805d6-c729-47df-b2b1-41562677c912" },
        { title: "The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race", author: "Walter Isaacson", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/d860fbb2-a3e8-4b06-aa58-f02eee548357" },
        { title: "Why We’re Polarized", author: "Ezra Klein", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/2aea96c1-a58d-461b-8157-787e3656b64a" },
        { title: "Startup CEO: A Field Guild to Scaling Up Your Business", author: "Matt Blumberg", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/0e03330a-36a5-4e99-8381-d00fffc25a80" },
        { title: "When Men Behave Badly: The Hidden Roots of Sexual Deception, Harassment, and Assault", author: "David M. Buss", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/51f33f9e-51b5-4d26-bd92-190e4b4f6c37" },
        { title: "A Thousand Brains: A New Theory of Intelligence", author: "Jeff Hawkins", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/7bd8efe5-8f03-4d8f-adca-202234b51bab" },
        { title: "A Beginner’s Guide to the End: Practical Advice for Living Life and Facing Death", author: "BJ Miller and Shoshana Berger", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/e5386ade-1a18-4548-b5ed-70d3fe4564f6" },
        { title: "Infectious Greed: How Deceit and Risk Corrupted the Financial Markets", author: "Frank Partnoy", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/5622aa2a-574c-4191-9e8e-f2a2448e15cf" },
        { title: "Smarter Tomorrow: How 15 Minutes of Neurohacking a Day Can Help You Work Better, Think Faster, and Get More Done", author: "Elizabeth R. Ricker", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/8b2018b3-3528-4911-b306-2722fe091d83" },
        { title: "The Age of Surveillance Capitalism: The Fight for a Human Future At the New Frontier of Power", author: "Shoshana Zuboff", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/8fe493c3-f8bd-43ec-9eca-969c20926b15" },
        { title: "Men Without Work: Post-Pandemic Edition", author: "Nicholas Eberstadt", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f9f7d582-9e1b-426e-956a-676309296c0a" },
        { title: "Sam Harris: Making Sense Podcast Episode #335", author: "Sam Harris", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/55e75a79-6575-43f0-8842-5b3e5785bd0b" },
        { title: "Bad Blood: Secrets and Lies in a Silicon Valley Startup", author: "John Carreyrou", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/1fc0517b-688b-40da-8fff-5c398786ae0b" },
        { title: "Manufacturing Consent: The Political Economy of the Mass Media", author: "Edwards S. Herman & Noam Chomsky", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/a083e258-236a-48d6-ab32-e31e0439cf7d" },
        { title: "Accelerate: Building and Scaling High Performing Technology Organizations", author: "Nicole Forsgen, Jez Humble, and Gene Kim", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/5099438f-a20e-4bea-981a-a42d50e5698b" },
        { title: "Good Economics for Hard Times", author: "Abhijit V. Banerjee and Esther Duflo", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/c7343f82-d50c-4f6b-bfbe-a53add72805e" },
        { title: "Useful Delusions: The Power & Paradox of the Self-Deceiving Brain", author: "Shankar Vedantam & Bill Mesler", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/847bb31e-fb5d-4bc9-9942-8749634ba148" },
        { title: "Editing Humanity: The Crispr Revolution and The New Era of Genome Editing", author: "Kevin Davies", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/8f2d49bc-ad60-4442-90f4-90d4e4310120" },
        { title: "Venture Deals: Be Smarter Than Your Lawyer and Venture Capitalist (4th Edition)", author: "Brad Feld & Jason Mendelson", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/f00f8350-de71-4cc1-8dcb-93a0a4efd6b3" },
        { title: "Strangers in Their Own Land", author: "Arlie Russell Hochschild", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/735a458c-5f39-455c-9fdd-7b50d2bad12d" },
        { title: "The Abandonment of the Jews: America and the Holocaust, 1941-1945", author: "David S. Wyman", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/b083dae0-b57b-41fc-8360-a7aaa00d86f7" },
        { title: "Our Revolution", author: "Bernie Sanders", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/bbc8c48a-f354-4ba6-94fa-be024eefe816" },
        { title: "Managing Humans: Biting and Humorous Tales of Software Engineering Manager", author: "Michael Lopp", image: "https://github.com/MoreNaruto/personal-website/assets/2292947/d141ada3-cf17-4d72-a60d-1cf2b82edb26" },
        { title: "Like, Comment, Subscribe: Inside YouTube’s Chaotic Rise to World Domination", author: "Mark Bergen", image: "https://github.com/user-attachments/assets/6fde64f7-0c9f-422c-89e2-21f8ffe5b0b4" },
        { title: "Apollo’s Arrow: The Profound And Enduring Impact of Coronavirus on the Way We Live", author: "Nicholas A Christakis", image: "https://github.com/user-attachments/assets/4b428738-b251-4d06-9ce6-8a2aacb45ae1" },
        { title: "Debt: The First 5,000 Years", author: "David Graeber", image: "https://github.com/user-attachments/assets/3e638e66-1a6b-4824-a34c-cb5893310d6c" },
        { title: "Savage Inequalities: Children in America’s Schools", author: "Jonathan Kozol", image: "https://github.com/user-attachments/assets/f58e42a5-593e-4d28-9246-955a71f5dc40" },
        { title: "As Gods: A Moral History of the Genetic Age", author: "Matthew Cobb", image: "https://github.com/user-attachments/assets/0498243f-581d-459b-99a0-a35cc91580af" },
        { title: "How the Mind Works", author: "Steven Pinker", image: "https://github.com/user-attachments/assets/320bb707-714d-4451-a035-85f38dc3efd7" },
        { title: "Woke, Inc.: Inside Corporate America’s Social Justice Scam", author: "Vivek Ramaswamy", image: "https://i.imgur.com/fX5bOPB.jpeg" },
        { title: "Startup CXO: A Field Guide to Scaling Up Your Company’s Critical Functions and Teams", author: "Matt Blumberg", image: "https://i.imgur.com/ot5OLTX.jpeg" },
        { title: "Lies My Teacher Told Me: Everything Your American History Textbook Got Wrong", author: "James W. Loewen", image: "https://imgur.com/a/yeYy4LZ" },
        { title: "Hardball: Are You Playing to Play or Playing to Win?", author: "George Stalk and Rob Lachenauer", image: "https://imgur.com/a/b56x5gT" }
    ].reverse();

    let currentPage = 1;
    let booksPerPage;
    let paginatedBooks = [];
    let screenSize;

    const breakpoints = {
        xs: 8,
        sm: 12,
        lg: 16,
        xl: 20
    };

    function updateBooksPerPage() {
        const width = window.innerWidth;

        if (width >= 1280) {
            booksPerPage = breakpoints.xl;
        } else if (width >= 900) {
            booksPerPage = breakpoints.lg;
        } else if (width >= 640) {
            booksPerPage = breakpoints.sm;
        } else {
            booksPerPage = breakpoints.xs;
        }
        paginateBooks();
    }

    onMount(() => {
        window.addEventListener('resize', updateBooksPerPage);
        updateBooksPerPage();
        paginateBooks();

        return () => {
            window.removeEventListener('resize', updateBooksPerPage);
        };
    });

    function paginateBooks() {
        const startIndex = (currentPage - 1) * booksPerPage;
        const endIndex = startIndex + booksPerPage;
        paginatedBooks = books.slice(startIndex, endIndex);
    }

    function handleNextPage() {
        if (currentPage < Math.ceil(books.length / booksPerPage)) {
            currentPage++;
            paginateBooks();
        }
    }

    function handlePreviousPage() {
        if (currentPage > 1) {
            currentPage--;
            paginateBooks();
        }
    }

    let bookContent = '';
    let selectedBookIndex = null;

    async function loadBookContent(index) {
        let bookFiles = Object.values(bookReviews).reverse();
        bookContent = bookFiles[index + ((currentPage-1) * booksPerPage)];
    }

    function handleBookClick(index) {
        selectedBookIndex = index;
        loadBookContent(index);
    }

    function handleBack() {
        selectedBookIndex = null;
    }
</script>

<main class="p-4 bg-slate-200">
    {#if selectedBookIndex === null}
        <h1 class="text-center">My Personal Reviews</h1>
        <div class="mb-4">
            <div class="relative max-w-4xl mx-auto">
                <div class="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center items-center" in:fade>
                    {#each paginatedBooks as { title, author, image }, index}
                        <div class="border border-gray-300 rounded-lg p-4 cursor-pointer text-center min-h-full-available transform transition-transform duration-200 hover:scale-105 w-40" on:click={() => handleBookClick(index)}>
                            <div class="w-full h-full flex justify-center items-center">
                                <img src={image} alt={title} class="w-40 h-40 object-cover rounded-lg"/>
                            </div>
                        </div>
                    {/each}
                </div>
                <div class="fixed bottom-0 left-0 right-0 mx-auto max-w-4xl flex justify-between p-4 bg-slate-200">
                    <button
                            on:click={handlePreviousPage}
                            disabled={currentPage === 1}
                            class="p-2 rounded transition-colors duration-200 {currentPage === 1 ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white hover:bg-blue-700'}"
                    >
                        Previous
                    </button>
                    <button
                            on:click={handleNextPage}
                            disabled={currentPage === Math.ceil(books.length / booksPerPage)}
                            class="p-2 rounded transition-colors duration-200 {currentPage === Math.ceil(books.length / booksPerPage) ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white hover:bg-blue-700'}"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    {:else}
        <div class="markdown-content p-4 max-w-5xl overflow-y-auto max-h-[80vh] text-left" in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
            <button class="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200" on:click={handleBack}>Back to Book List</button>
            <div class="prose max-w-5xl">
                {@html marked(bookContent)}
            </div>
            <button class="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200" on:click={handleBack}>Back to Book List</button>
        </div>
    {/if}
</main>


<style>
    h1 {
        @apply text-3xl;
    }
    .prose h1 {
        @apply text-2xl;
    }
    .prose p {
        @apply mt-2;
    }
</style>
