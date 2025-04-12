import { ref } from 'vue';

export const leadershipModalOpen = ref(false);
export const leadershipModalInfo = ref(
    {
        title: "",
        company: "",
        image: "",
        logo: "",
        screen: "",
        background: "",
        time: "",
        location: "",
        links: [{ title: "", url: "" }],
        description: "",
        contributions: [""],
        skills: []
    }
);

export const leadershipInfo = [
    {
        title: 'UNL Raikes School',
        company: 'Teaching Assistant',
        image: 'experience/work_ta.png',
        screen: 'experienceScreens/ta_screen.png',
        background: 'backgrounds/unl_back.jpg',
        time: 'Aug. 2023 - Present',
        location: 'Lincoln, Nebraska',
        links: [
            { title: "Courses Info", url: "https://catalog.unl.edu/undergraduate/courses/raik/" },
        ],
        description: 'Teach Software Engineering courses to <strong>110+</strong> students. Currently teaching Honors Software Engineering IV. Previously taught Software Engineering III, Honors Computer Problem Solving and Honors Software Development Essentials.',
        contributions: [
            'Grade coding assignments, projects, and tests',
            'Host TA hours to assist students with their assignments and understanding of core concepts',
            'Lead lab groups and assist in lectures'
        ],
        skills: ['React', 'Java', 'Python', 'SQL', 'Data Structures', 'Algorithms', 'OOP', 'Discrete Math']
    },
    {
        title: 'Pi Kappa Alpha',
        company: 'Technology Chair',
        image: 'experience/work_pike.png',
        screen: 'experienceScreens/pike_screen.png',
        background: 'backgrounds/pike_back.jpg',
        time: 'Nov. 2024 - Present',
        location: 'Lincoln, Nebraska',
        links: [
            { title: "Main Site", url: "https://app.pikeunl.com/" },
        ],
        description: "Develop new features for the Gamma Beta website to optimize chapter operations and communication for <strong>140+</strong> active members.",
        contributions: [],
        skills: ['TypeScript', 'Next.js', 'React', 'Firebase', 'PostgreSQL', 'HTML/CSS', 'MaterialUI', 'Jest']
    },
    {
        title: 'brainrotcode',
        company: 'Software Engineer',
        image: 'experience/work_brainrot.png',
        screen: 'experienceScreens/brainrot_screen2.png',
        background: 'backgrounds/brainrot_back.jpg',
        time: 'Sep. 2024 - Apr. 2025',
        location: 'Remote',
        links: [
            { title: "Home Page", url: "https://brainrotcode.com/" },
        ],
        description: "Early stage engineer at a startup with <strong>$100k+</strong> in VC funding and <strong>150+</strong> registered users, building front-end features for a web platform allowing developers to create algorithms and machine learning models to compete in popular strategy games.",
        contributions: [
            'Built front-end game logic and user interfaces for Othello and Filler',
            'Created contests page showing upcoming and past competitions sponsored by companies',
            'Developed real-time leaderboard displaying rankings for each game',
            'Implemented submit and edit model workflows with validation',
            'Created authentication system with login/register pages and forgotten password functionality',
            'Pushed various UI/UX improvements to code editor, model insights, profile and games pages',
        ],
        skills: ['JavaScript', 'React', 'Go', 'HTML/CSS', 'Tailwind', 'Firebase']
    },
    {
        title: 'NIYOU',
        company: 'Contracted Software Developer',
        image: 'experience/work_pike.png',
        screen: 'experienceScreens/pike_screen.png',
        background: 'backgrounds/pike_back.jpg',
        time: 'Mar. 2025 - Apr. 2025',
        location: 'Remote',
        links: [
            { title: "Main Site", url: "https://app.pikeunl.com/" },
        ],
        description: "Develop new features for the Gamma Beta website to optimize chapter operations and communication for <strong>140+</strong> active members.",
        contributions: [],
        skills: ['TypeScript', 'Next.js', 'React', 'Firebase', 'PostgreSQL', 'HTML/CSS', 'MaterialUI', 'Jest']
    },
    {
        title: 'The Daily Nebraskan',
        company: 'Software Developer',
        image: 'experience/work_dn3.png',
        screen: 'experienceScreens/dn_screen2.png',
        background: 'backgrounds/dn_back.jpg',
        time: 'Aug. 2023 - Aug. 2024',
        location: 'Lincoln, Nebraska',
        links: [
            { title: "Main Site", url: "https://www.dailynebraskan.com/" },
            { title: "Impact Report", url: "https://dn-impact.web.app/" },
            { title: "Sports Newsletter", url: "https://daily-nebraskan-sports.web.app/" },
        ],
        description: "Engineer interactive web pages and modules for UNL's main news website with <strong>20k+</strong> weekly views and <strong>7k+</strong> registered users.",
        contributions: [
            'Launched 2024 Endowment page and first-ever Impact Report site for <strong>3k+</strong> donors and alumni to promote company metrics and fundraising',
            'Built the Curious Cornhuskers Q&A component, automatically sending UNL student questions to the staff Trello board',
            'Created a component for students to sign up to the <strong>26k+</strong> subscriber University newsletter',
            'Constructed a centralized server to handle <strong>200k+</strong> API requests monthly, utilizing SSL and CORS for robust security measures',
            'Deployed a new DN sports newsletter page for external subscriptions through social media',
            'Developed new About Us and Advertise With Us pages for improved exposure to clients',
            'Generated <strong>10+</strong> new site subsections using query population',
            'Resolved bugs with existing software to improve user experience',
            'Placed <strong>2nd</strong> in National College Media Website of the Year',
        ],
        skills: ['JavaScript', 'React', 'Python', 'Flask', 'HTML/SCSS', 'Tailwind', 'AWS', 'Firebase']
    },
];