import { ref } from "vue";

export const projectsModalOpen = ref(false);
export const projectsModalInfo = ref(
    {
        title: "",
        image: "",
        screen: "",
        time: "",
        introduction: "",
        description: "",
        features: [],
        tools: [],
        links: [{ title: "", url: "" }],
    }
);


export const projectsInfo = [
    {
        title: 'BlitzDraft',
        image: 'projects/bd4.png',
        screen: 'projectScreens/bd_screen.png',
        time: 'Summer 2023',
        description: 'Multiplayer mobile web game where users pick one NFL player at time from random teams to assemble the best team possible. '
            + 'It grades the strength of each team using a machine learning model trained from <strong>50k+</strong> NFL statistics, scraped from Pro-Football-Reference.',
        features: ["NFL Machine learning model that predicts team records", "Singleplayer draft mode", "Real-time multiplayer draft mode (up to 4 players)", "Saved teams storage",
            "Stored user draft statistics, visualized with graphs", "Google authenticated login", "Snappy, a dynamic animated game assistant"],
        tools: ['TypeScript', 'Vue', 'Python', 'Flask', 'HTML/SCSS', 'Tailwind', 'MongoDB', 'Firebase', 'Scikit', 'BeautifulSoup', 'Socket.IO', 'Chart.js'],
        links: [
            { title: "Live Demo", url: "https://drive.google.com/file/d/1X9OeuzdiSbPODgQcTKTXXR1pL1DuHjRb/view" },
            { title: "Source Code", url: "https://github.com/EmmettMyers/BlitzDraft" },
        ],
    },
    {
        title: 'CivicSendNE',
        image: 'projects/civicsend 2.png',
        screen: 'projectScreens/cs_screen.png',
        time: 'Summer 2023',
        description: 'Web app that streamlines Nebraska civic communication by multi-sending/creating customizable mail to senators. Senators are '
            + ' auto-located by user location and the mail is pre-formatted with user information.' +
            ' The application gets its information by web scraping multiple sources for up-to-date government information.',
        features: ["Pre-tailored email multi-sender", "Pre-tailored letter multi-downloader", "Saved mail storage", "User Representative/Senator Information",
            "Six email and letter templates", "AI writer to generate mail based on user prompts", "User-friendly, dynamic dashboard", "Authenticated customizable profiles with user info"],
        tools: ['TypeScript', 'React', 'Python', 'Flask', 'HTML/SCSS', 'Tailwind', 'MongoDB', 'Heroku', 'OpenAI API', 'Selenium', 'BeautifulSoup', 'EmailJS SDK', 'Docamatic API'],
        links: [
            { title: "Live Demo", url: "https://drive.google.com/file/d/1CuL6cXabCZVm2w33mt-Y4uQjUmN8oNns/view" },
            { title: "Source Code", url: "https://github.com/EmmettMyers/CivicSendNE" },
        ],
    },
    {
        title: 'Seekr',
        image: 'projects/seekr2.png',
        screen: 'projectScreens/seekr_screen2.png',
        time: 'Hackathon Project - Fall 2024',
        description: 'Seekr is a scavenger hunt mobile app that gives users daily items to find and take photos of. It uses machine learning and object detection to determine whether a photo matches the prompted item.'
        + ' The project won the <strong>HackMidwest Pinata AI Challenge</strong> for <strong>$2,500</strong>!',
        features: [
            "Speed Hunt: find the daily item as fast as you can",
            "Item Hunt: look for as many prompted items as you can in a day",
            "Group Hunt: search for as many prompted groups of items as you can in a day",
            "Leaderboard storing the top daily hunt scorers with their captured photos",
            "Custom camera with an object detection machine learning model",
            "User authentication, stored game state and help pages",
        ],
        tools: ['JavaScript', 'React Native', 'Python', 'Flask', 'HTML/CSS', 'AWS', 'Firebase', 'Pinata API', 'Gemini API', 'Vision API', 'Expo'],
        links: [
            { title: "Hackathon Info", url: "https://hackmidwest.com/" },
        ],
    },
    {
        title: 'Projex',
        image: 'projects/projex.png',
        screen: 'projectScreens/projex_screen.png',
        time: 'Winter Break 2023-24',
        description: 'Projex is a web app that uses machine learning to generate coding personal project ideas based on user preferences, skills, and interests.',
        features: [
            "Project idea generation based on users' selected options and traits",
            "User coding traits storage for more personalized project generations",
            "Extensive project ideas including a description, time, difficulty, and tools",
            "Project pool storing unsaved projects generated from other users",
            "Save and unsave project ideas from generations or project pool",
            "Sleek dashboard with navigation and user's past generated projects",
            "User authentication using Google Single Sign-On"
        ],
        tools: ['TypeScript', 'Vue', 'Python', 'Django', 'HTML/SCSS', 'PostgreSQL', 'Supabase', 'OpenAI API'],
        links: [
            { title: "Live Demo", url: "https://drive.google.com/file/d/1kElBm9cdkVo2u4mbt1WujTUz563loOfe/view" },
            { title: "Source Code", url: "https://github.com/EmmettMyers/Projex" },
        ],
    },
    {
        title: 'PickupUNL',
        image: 'projects/pickupunl 2.png',
        screen: 'projectScreens/punl_screen2.png',
        time: 'Summer 2022',
        description: 'Web application that facilitates the creation of pickup sports games around the University of Nebraska' +
            ' through open registering and communication.',
        features: ['Interactive campus map with points at every sports location', 'Real-time chat rooms for each facility based on time and sport',
            'Real-time signup pages for each facility based on time and sport', 'Customizable profiles with contact and sport information',
            'Find signed-up players feature based on sport, time, and outdoor/indoor', 'Google authentication login system'],
        tools: ['JavaScript', 'React', 'Node', 'Express', 'HTML/SCSS', 'Bootstrap', 'MySQL', 'Firebase', 'Socket.IO', 'OpenLayers'],
        links: [
            { title: "Live Demo", url: "https://drive.google.com/file/d/137ThzYqqBBeXxhHGenjB2Tm3HvgjQ-si/view" },
            { title: "Source Code", url: "https://github.com/EmmettMyers/PickupUNL" },
        ],
    },
    {
        title: 'Blokus',
        image: 'projects/blokus 1.png',
        screen: 'projectScreens/blokus_screen.png',
        time: 'School Project - Spring 2024',
        description: 'Real-time multiplayer web game based on the popular board game Blokus.',
        features: [
            "4-player local gameplay",
            "Rotate/flip piece, turn timers, pause game functionalities",
            "Online gameplay with game lobbies and public games",
            "Intelligent bots (easy, medium, hard)",
            "Online leaderboard and game statistics",
            "Customizable user profiles with nicknames and profile pictures",
            "Secure accounts with password hashing and 2-factor authentication",
            "Game rules modal with PDF download",
            "Extensive game logic testing",
        ],
        tools: ['JavaScript', 'React', 'Python', 'Flask', 'HTML/CSS', 'Firebase', 'Socket.IO'],
        links: [
            { title: "2nd Presentation", url: "https://docs.google.com/presentation/d/1sTvqjjg-xdg9GPXPbcc5EDNPNzWsgae8kcIn5KCfmVU/edit?usp=sharing" },
            { title: "1st Presentation", url: "https://docs.google.com/presentation/d/139YdosKyl75yl2Gmjuyp_be5NmV_B-0E8FNGJkNHgc8/edit?usp=sharing" },
            { title: "Source Code", url: "https://github.com/EmmettMyers/Blokus" },
        ],
    },
    {
        title: 'Sure',
        image: 'projects/sure 3.png',
        screen: 'projectScreens/sure_screen2.png',
        time: 'Summer 2022',
        description: 'Web multi-messenger aimed at making communication and access to it as secure as possible,'
            + ' even to someone sitting right next to you.',
        features: [
            "5 types of passwords (text, pin, grid, colors, slides)",
            "Password locks on chats (optional and removable)",
            "Customizable redirect URL when webpage is double-clicked",
            "Edit/Delete options for any text you send",
            "Real-time messaging with multiple users in different chats",
            "Resizable and draggable chatboxes to allow maximum chat use",
            "Add/Request/Remove friends features",
            "Customizable profile pictures",
            "Secure login system",
            "Remove all chat locks with email verification",
            "Forgot password email verification"
        ],
        tools: ['JavaScript', 'jQuery', 'PHP', 'HTML/SCSS', 'Bootstrap', 'MySQL', 'phpMyAdmin', 'EmailJS SDK'],
        links: [
            { title: "Live Demo", url: "https://drive.google.com/file/d/13nnKTg7-8vtTcfH8g6AGDbO4fOUHspUh/view" },
            { title: "Source Code", url: "https://github.com/EmmettMyers/Sure" },
        ],
    },
    {
        title: 'NewsGuesser',
        image: 'projects/ng2.png',
        screen: 'projectScreens/ng_screen.png',
        time: 'Fall 2022',
        description: 'Web game in which users have 2 minutes to guess as many words in a news article as possible from seeing only its picture and title.'
            + ' The longer the word and the more times it appears in the article, the more points you receive.'
            + ' The server pulls news article data from NewsAPI, then the client-side parses the data to use for the game.',
        features: ['Normal Mode (random news articles)', 'Topics Mode (specific news topics)'],
        tools: ['JavaScript', 'React', 'Node', 'Express', 'HTML/SCSS', 'Tailwind', 'News API'],
        links: [
            { title: "Live Demo", url: "https://drive.google.com/file/d/12MqS4YXL6hBH59ZvPJJDdxUdV7nwTFow/view" },
            { title: "Source Code", url: "https://github.com/EmmettMyers/NewsGuesser" },
        ],
    },
    {
        title: 'GuessNBA',
        image: 'projects/guessnba1.png',
        screen: 'projectScreens/guessnba_screen.png',
        time: 'Winter Break 2022-23',
        description: 'Mobile-based web game in which a user has to guess a random NBA player based on three of their stats, or more if they need hints.' +
            ' The program scrapes NBA data from the website basketball-reference.com and finds information about a random player.',
        features: [],
        tools: ['JavaScript', 'React', 'Python', 'Flask', 'HTML/CSS', 'Tailwind', 'BeautifulSoup'],
        links: [
            { title: "Live Demo", url: "https://drive.google.com/file/d/1BpM5OlblCiiMnrE6K2Nu4yhVCsPQRFHj/view" },
            { title: "Source Code", url: "https://github.com/EmmettMyers/GuessNBA" },
        ],
    },
    /*{
        title: 'Portfolio',
        image: 'projects/portfolio.png',
        screen: 'projectScreens/port_screen.png',
        time: 'Summer 2023',
        description: "The site you're on right now, my personal portfolio!",
        features: [
            'Google Analytics tracking clicks, website views, and user demographics',
            'Dynamic information rendering, responsive user interface'
        ],
        tools: ['TypeScript', 'Vue', 'HTML/SCSS', 'Tailwind', 'Firebase'],
        links: [
            { title: "Source Code", url: "https://github.com/EmmettMyers/Portfolio" },
        ],
    },
    {
        title: 'Connect 4 Bot',
        image: 'projects/connect 4 1.png',
        screen: 'projectScreens/c4_screen.png',
        time: 'Summer 2021',
        description: 'Advanced, comprehensive Connect 4 web game meant to challenge your prowess at the game.'
        + ' Includes a hard bot that detects win/loss and double win/double loss scenarios 100% correctly.',
        features: [
            "3 bot difficulties with different play styles: easy, medium, hard",
            "Bot strategies based on predictions up to three rounds in the future",
            "Take-turns style local play mode",
            "Win tracking for each player with a scoreboard above the gameboard"
          ],
        tools: ['JavaScript', 'HTML', 'CSS'],
        demo: 'https://emmetts-connect-4.emmettleemyers.repl.co/',
        code: 'https://github.com/EmmettMyers/Connect-4-Bot'
    }*/
];