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
            { title: "Courses Information", url: "https://catalog.unl.edu/undergraduate/courses/raik/" },
        ],
        description: 'Teach Software Engineering III-IV and Computer Science I-II to <strong>160+</strong> Honors students. Topics include data structures and algorithms, web development, object-oriented programming, and more.',
        contributions: [
            "Create and lead coding labs",
            "Grade assignments, projects, and exams",
            "Assist with course planning and curriculum development",
            "Host weekly office hours to help students with coding questions"
        ],
        skills: ['JavaScript', 'Java', 'Python', 'SQL']
    },
    {
        title: 'Pi Kappa Alpha',
        company: 'Technology Chair',
        image: 'experience/work_pike.png',
        screen: 'experienceScreens/pike_screen.png',
        background: 'backgrounds/pike_back.jpg',
        time: 'Jan. 2025 - Present',
        location: 'Lincoln, Nebraska',
        links: [
            { title: "Chapter Website", url: "https://app.pikeunl.com/" },
        ],
        description: "Develop new features for the Gamma Beta website to optimize chapter operations and communication for <strong>140+</strong> active members.",
        contributions: [
            "Launched sections to display shifts, meeting notes, events, and attendance with view settings and admin CRUD",
            "Created campus involvement leaderboard with complex forms and rankings to boost member engagement",
            "Implemented a CDN and in-memory caching to significantly reduce cloud costs",
            "Integrated email/text notifications for forum posts and shifts",
            "Porting website to a mobile application"
        ],
        skills: ['TypeScript', 'Next.js', 'React', 'Firebase', 'React Native']
    },
    {
        title: 'NIYOU',
        company: 'Contracted Software Developer',
        image: 'experience/work_niyou.png',
        screen: 'experienceScreens/niyou_screen.png',
        background: 'backgrounds/niyou_back.jpg',
        time: 'Mar. 2025 - May 2025',
        location: 'Remote',
        links: [
            { title: "Portfolio Website", url: "https://ni-you.com/" },
        ],
        description: "Created a portfolio website and admin portal for a Nebraska-based NIL agency, garnering <strong>3k+</strong> monthly views with <strong>2 min</strong> average sessions.",
        contributions: [
            "Developed home page with HD video scene and parter brands page with brand video/image galleries and information",
            "Utilized a CDN, pre-loading, content compressing, and asset caching to optimize content delivery",
            "Created stories page with text/image content and athletes page with profile cards, social handles, and bios",
            "Built About Us page with team member story, profiles, and email/newsletter contact forms",
            "Implemented NIYOU-authenticated, customizable admin CMS with CRUD for brands, athletes, and stories",
        ],
        skills: ['TypeScript', 'React', 'Firebase']
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
        description: "Early stage engineer at a startup with <strong>$120k+</strong> in VC funding and <strong>200+</strong> registered users, building front-end features for a web platform allowing developers to create algorithms and machine learning models to compete in popular strategy games.",
        contributions: [
            "Developed game logic, user interfaces, and sandboxes for Checkers, Othello, and Filler",
            "Created sections for company-sponsored contests, interactive AI/ML courses, and user model rankings",
            "Constructed coding text editor with Python support, console output and 3rd party imports",
            "Engineered game move autoplay and validation",
            "Implemented user authentication and account creation"
        ],
        skills: ['React', 'Go', 'GCP', 'Tailwind']
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
        ],
        description: "Engineered interactive web pages and modules for UNL's main news website with <strong>20k+</strong> weekly views and <strong>7k+</strong> registered users.",
        contributions: [
            'Launched 2024 Endowment page and first-ever Impact Report site for donors and alumni to promote company metrics and fundraising',
            'Built the Curious Cornhuskers Q&A component, automatically sending UNL student questions to the staff Trello board',
            'Created a component for students to sign up to the UNL newsletter',
            'Deployed a new DN sports newsletter page for external subscriptions through social media',
            'Developed new About Us and Advertise With Us pages for improved exposure to clients',
            'Generated 10+ new site subsections using query population',
            'Resolved bugs with existing software to improve user experience',
        ],
        skills: ['React', 'AWS', 'Python', 'Tailwind']
    },
];