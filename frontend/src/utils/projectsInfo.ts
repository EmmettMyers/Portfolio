import { ref } from "vue";

export const projectsModalOpen = ref(false);
export const projectsModalInfo = ref(
    {
        title: "", 
        image: "", 
        screen: "",
        time: "", 
        description: "", 
        features: [], 
        tools: [], 
        demo: '', 
        code: ''
    }
);


export const projectsInfo = [
    {
        title: 'BlitzDraft',
        image: 'projects/bd4.png',
        screen: 'projectScreens/bd_screen.png',
        time: 'Summer 2023',
        description: 'Multiplayer mobile web game where users pick one NFL player at time from random teams to assemble the best team possible. '
        + 'It grades the strength of each team using a machine learning model trained from over 50,000 NFL statistics, scraped from Pro-Football-Reference.',
        features: ["Machine learning model that predicts team records", "Singleplayer draft mode", "Multiplayer draft mode (up to 4 players)", "Saved teams storage", 
        "Stored user draft statistics", "Google authenticated login", "Snappy, a dynamic animated game assistant"],
        tools: ['TypeScript', 'Vue', 'Python', 'Pandas', 'Scikit', 'BeautifulSoup', 'Flask', 'Socket.io', 'MongoDB', 'Firebase', 
        'HTML/SCSS', 'Tailwind', 'Chart.js'],
        demo: 'https://drive.google.com/file/d/1X9OeuzdiSbPODgQcTKTXXR1pL1DuHjRb/view',
        code: 'https://github.com/EmmettMyers/BlitzDraft'
    },
    {
        title: 'CivicSendNE',
        image: 'projects/civicsend 2.png',
        screen: 'projectScreens/cs_screen.png',
        time: 'Summer 2023',
        description: 'Web app that streamlines civic communication by multi-sending/creating customizable mail to senators. Senators are '
        + ' auto-located by user location and the mail is pre-formatted with user information.' + 
        ' The application gets its information by web scraping multiple sources for up-to-date government information.',
        features: ["Pre-tailored email multi-sender", "Pre-tailored letter multi-downloader", "Saved mail storage", "User Representative/Senator Information", 
        "Six email and letter templates", "AI writer to generate mail based on user prompts", "User-friendly, dynamic dashboard", "Authenticated customizable profiles with user info"],
        tools: ['TypeScript', 'React', 'Python', 'OpenAI API', 'Selenium', 'BeautifulSoup', 'EmailJS SDK', 'Docamatic API', 'Flask', 
        'MongoDB', 'Heroku', 'HTML/SCSS', 'Tailwind'],
        demo: 'https://drive.google.com/file/d/1CuL6cXabCZVm2w33mt-Y4uQjUmN8oNns/view',
        code: 'https://github.com/EmmettMyers/CivicSendNE'
    },
    {
        title: 'Portfolio',
        image: 'projects/portfolio.png',
        screen: 'projectScreens/port_screen.png',
        time: 'Summer 2023',
        description: "The site you're on right now, my personal portfolio!",
        features: [],
        tools: ['TypeScript', 'Vue', 'Firebase', 'SCSS', 'Tailwind', 'HTML'],
        demo: '',
        code: 'https://github.com/EmmettMyers/Portfolio'
    },
    {
        title: 'GuessNBA',
        image: 'projects/guessnba1.png',
        screen: 'projectScreens/guessnba_screen.png',
        time: 'Winter Break 2022-2023',
        description: 'Mobile-based web game in which a user has to guess a random NBA player based on three of their stats, or more if they need hints.' + 
        ' The program scrapes NBA data from the website basketball-reference.com and finds information about a random player.',
        features: [],
        tools: ['JavaScript', 'React', 'Python', 'BeautifulSoup', 'Flask', 'HTML/CSS', 'Tailwind'],
        demo: 'https://drive.google.com/file/d/1BpM5OlblCiiMnrE6K2Nu4yhVCsPQRFHj/view',
        code: 'https://github.com/EmmettMyers/GuessNBA'
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
        tools: ['JavaScript', 'React', 'Node', 'Axios', 'Express', 'Readability', 'HTML/SCSS', 'Tailwind'],
        demo: 'https://drive.google.com/file/d/12MqS4YXL6hBH59ZvPJJDdxUdV7nwTFow/view',
        code: 'https://github.com/EmmettMyers/NewsGuesser'
    },
    {
        title: 'PickupUNL',
        image: 'projects/pickupunl 2.png',
        screen: 'projectScreens/punl_screen.png',
        time: 'Summer 2022',
        description: 'Web application that facilitates the creation of pickup sports games around the University of Nebraska' + 
        ' through open registering and communication.',
        features: ['Interactive campus map with points at every sports location', 'Real-time chat rooms for each facility based on time and sport',
        'Real-time signup pages for each facility based on time and sport', 'Customizable profiles with contact and sport information', 
        'Find signed-up players feature based on sport, time, and outdoor/indoor', 'Google authentication login system'],
        tools: ['JavaScript', 'React', 'OpenLayers', 'Node', 'Socket.io', 'Express', 'MySQL', 'Firebase', 'HTML/SCSS', 'Bootstrap'],
        demo: 'https://drive.google.com/file/d/137ThzYqqBBeXxhHGenjB2Tm3HvgjQ-si/view',
        code: 'https://github.com/EmmettMyers/PickupUNL'
    },
    {
        title: 'Sure',
        image: 'projects/sure 3.png',
        screen: 'projectScreens/sure_screen.png',
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
        tools: ['JavaScript', 'jQuery', 'PHP', 'MySQL', 'phpMyAdmin', 'EmailJS SDK', 'HTML/SCSS', 'Bootstrap'],
        demo: 'https://drive.google.com/file/d/13nnKTg7-8vtTcfH8g6AGDbO4fOUHspUh/view',
        code: 'https://github.com/EmmettMyers/Sure'
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
    }
];