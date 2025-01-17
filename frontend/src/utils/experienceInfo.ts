import { ref } from 'vue';

export const experienceModalOpen = ref(false);
export const experienceModalInfo = ref(
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

export const experienceInfo = [
    /*{
        title: 'Bosch',
        company: 'Software Engineer Intern',
        image: 'experience/work_bosch3.jpg',
        screen: 'experienceScreens/bosch_screen.png',
        background: 'backgrounds/bosch_back2.jpg',
        time: 'Jan. 2025 - Present',
        location: 'Lincoln, Nebraska',
        links: [
            { title: "RDC Overview", url: "https://products.telex.com/na/en/remote-dispatch-console/" },
        ],
        description: 'Building a new Radio Dispatch Console mobile app to facilitate real-time, remote communication between multiple radio lines.',
        contributions: [],
        skills: ['Swift', 'SwiftUI', 'Go', 'Node.js', 'SQLite', 'Azure', 'LiveKit']
    },*/
    {
        title: 'brAIn rot',
        company: 'Software Engineer',
        image: 'experience/work_brainrot.png',
        screen: 'experienceScreens/brainrot_screen2.png',
        background: 'backgrounds/brainrot_back.jpg',
        time: 'Sep. 2024 - Present',
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
        title: 'Nestimate',
        company: 'Software Engineer Intern',
        image: 'experience/work_nest2.png',
        screen: 'experienceScreens/nest_screen2.png',
        background: 'backgrounds/nest_back.jpg',
        time: 'Mar. 2024 - Jan. 2025',
        location: 'Remote',
        links: [
            { title: "Product Overview", url: "https://www.mynestimate.com/" },
        ],
        description: 'Full-stack development for a retirement solutions and analytics startup with <strong>4k+</strong> users and <strong>$1m+</strong> in VC funding.',
        contributions: [
            'Created Sales Enablement section and Participant Engagement page with interactive parameters, graphs, and themes for advisors to demonstrate lifetime income effects on retirement to clients',
            'Launched Product Recordkeeper Adoption page with search and filter functionalities to streamline 401k plan provider matching',
            'Built interactive target date fund flow with <strong>20+</strong> pages including complex financial charts and tables',
            'Automated email notifications for plan demographics file uploads',
            'Pushed <strong>30+</strong> user interface improvements to workflow builder, income calculator, product profile, proposal PDFs, and financial ratings',
            'Developed Nestimate playground site to demo new features to clients and iterate on feedback',
        ],
        skills: ['JavaScript', 'Stimulus', 'Ruby', 'Ruby on Rails', 'HTML/CSS', 'Tailwind', 'Docker']
    },
    {
        title: 'Garmin',
        company: 'Software Engineer Intern',
        image: 'experience/work_garmin3.png',
        screen: 'experienceScreens/garmin_screen.png',
        background: 'backgrounds/garmin_back.jpg',
        time: 'May 2024 - Aug. 2024',
        location: 'Olathe, Kansas',
        links: [
            { title: "Clipboard Overview", url: "https://www.garmin.com/en-US/p/739176" },
            { title: "Clipboard Demo", url: "https://www.youtube.com/watch?v=_Saq212NlYc&ab_channel=GarminTraining" },
        ],
        description: 'Worked on a Labs R&D team to develop Garmin Clipboard, a sports mobile app designed to help teams build workouts and review stats, for <strong>120k+</strong> registered users.',
        contributions: [
            'Spearheaded creation of markup feature enabling <strong>22k+</strong> coaches to annotate on athlete workout charts with paint tools, tags, notes, sharing, notifications, and more',
            'Implemented coach scratchpad to facilitate quick note taking on athletes including formatted text, charts, lists, images, and drawings',
            'Launched new bulletin board used by <strong>28k+</strong> athletes to view coach announcements with search, filter, bookmark and share features',
            'Revamped UI and front-end architecture for athlete profile, statistics, personal bests and milestones pages, improving user experience and code efficiency',
            'Deployed <strong>12+</strong> UI/UX enhancements to the workout builder and athlete portal to match new design system and iOS interfaces',
            'Addressed and resolved <strong>6+</strong> app issues reported by coaches'
        ],
        skills: ['Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'Java', 'Spring Boot', 'Android SDK']
    },
    {
        title: 'Principal Financial Group',
        company: 'Software Engineer Intern',
        image: 'experience/work_principal2.png',
        screen: 'experienceScreens/principal_screen.png',
        background: 'backgrounds/principal_back.jpg',
        time: 'May 2023 - Aug. 2023',
        location: 'Des Moines, Iowa',
        links: [
            { title: "Sponsor App Demo", url: "https://landing.principal.com/advisor-retirement-dashboard-demo" },
        ],
        description: "Worked on Principal's new client reporting web application for sponsor companies with <strong>12k+</strong> monthly active users.",
        contributions: [
            'Led creation of report favoriting feature, including its own pages and logic, to streamline report access for <strong>2k+</strong> users',
            'Pushed UI and data pipeline improvements to loan reports, reports dashboard and report builder',
            'Added user customization to report scheduling calendar and implemented analytics tracking on <strong>10+</strong> pages.',
            'Presented AI solution to <strong>300+</strong> employees and executives to streamline code documentation time on existing repositories by <strong>98%</strong>, placing <strong>3rd</strong> in Intern Innovation Projects',
            'Resolved <strong>8+</strong> client issues to optimize user experience and tested report event to ensure data privacy in various user environments',
        ],
        skills: ['TypeScript', 'React', 'Java', 'Spring', 'HTML/CSS', 'Bootstrap', 'JUnit']
    },
    {
        title: 'Olsson',
        company: 'Design Studio Developer Intern',
        image: 'experience/work_olsson2.png',
        screen: 'experienceScreens/olsson_screen.png',
        background: 'backgrounds/olsson_back.jpg',
        time: 'Jan. 2023 - May 2023',
        location: 'Lincoln, Nebraska',
        links: [
            { title: "Olsson Project Story", url: "https://www.olsson.com/projects/seeing-the-possibilities" },
        ],
        description: 'Developed the Project ZeroDelta web app under the Raikes School Design Studio Program to streamline building comparisons for Olsson engineers.',
        contributions: [
            'Visualized difference calculations between Revit models & LiDAR point clouds in a 3D interface, automating the old <strong>80+</strong> hour manual task for Olsson engineers',
            'Built a secure employee-authenticated login page with animated visuals',
            'Created a dynamic dashboard and navigation features to enhance user experience and data input',
            'Assisted with the difference calculation machine learning model that optimized comparison times by <strong>94%</strong>',
            'Awarded <strong>Design Studio Gold Project Award</strong>, placing <strong>2nd</strong> in Design Studio Projects out of 20+ teams',
        ],
        skills: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'Python', 'Django', 'Auth0']
    },
];