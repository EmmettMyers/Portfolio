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
    {
        title: 'Google',
        company: 'Software Engineer Intern',
        image: 'experience/work_google.webp',
        screen: 'experienceScreens/google_screen.png',
        background: 'backgrounds/google_back2.jpg',
        time: 'May 2025 - Aug. 2025',
        location: 'Sunnyvale, CA',
        links: [
            { title: "Google Chat App", url: "https://play.google.com/store/apps/details?id=com.google.android.apps.dynamite&hl=en_US" },
        ],
        description: "Engineering cross-platform data infrastructure for Google Chat's web and mobile clients with <strong>100m+</strong> monthly users.",
        contributions: [],
        skills: ['Java', 'JavaScript', 'WebSockets', 'Pub/Sub']
    },
    {
        title: 'Bosch',
        company: 'Software Engineer Intern',
        image: 'experience/work_bosch2.png',
        screen: 'experienceScreens/bosch_screen.png',
        background: 'backgrounds/bosch_back2.jpg',
        time: 'Jan. 2025 - May 2025',
        location: 'Lincoln, Nebraska',
        links: [
            { title: "Old RDC Overview", url: "https://products.telex.com/na/en/remote-dispatch-console/" },
        ],
        description: 'Developed a new Radio Dispatch Console mobile app to facilitate real-time full/half duplex communication between multiple user rooms and radio lines at once.',
        contributions: [
            "Facilitated duplex communication between multiple user rooms and radio lines at once",
            "Incorporated 10+ legacy features including PTT toggling, volume options, floor control, crosspatch audio, and IP-224 auto-connection",
            "Engineered direct calling functionality with call history and admin settings for users, groups, and radios",
            "Architected audio state management system for concurrent track handling, full lifecycle control, and extensive edge case coverage",
            "Implemented admin settings for users, groups, and radios"
        ],
        skills: ['TypeScript', 'React Native', 'Node.js', 'Expo', 'LiveKit', 'Socket.IO']
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
            "Created Sales Enablement pages with interactive graphs and themes to demonstrate lifetime income effects on retirement to clients",
            "Built Target Date Fund flow with 20+ pages and layered financial charts to model investment strategies and their fit with client plans",
            "Developed filterable Product Recordkeeper page to streamline 401k plan provider matching and card visuals for upcoming products",
            "Automated email notifications for plan demographics file uploads",
            "Pushed 30+ UI/UX improvements throughout the site"
        ],
        skills: ['TypeScript', 'Stimulus', 'Ruby', 'Ruby on Rails', 'Tailwind']
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
            "Led creation of markup feature enabling coaches to annotate on athlete charts with paint tools, tags, notes, sharing, alerts, and more",
            "Developed coach scratchpad to facilitate quick note taking on athletes with pages including text, charts, lists, images, and drawings",
            "Revamped bulletin board, profile, statistics and milestones pages to improve page load times and code quality",
            "Designed data structures to optimize markup and scratchpad, improving storage efficiency and render speeds under heavy UI loads",
            "Deployed 12+ UI/UX enhancements to coach and athlete portals to match new design system"
        ],
        skills: ['Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'Java']
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
            "Spearheaded report favoriting system with dedicated page, sharing, and backend support to streamline report access for clients",
            "Pushed UI and data pipeline improvements to loan reports, reports dashboard and report builder",
            "Created and presented an AI solution to automate code documentation, placing 3rd in Intern Innovation Projects",
            "Integrated Google Analytics on 10+ pages to log user events and session statistics",
            "Resolved 8+ client issues to enhance user experience",
            "Tested events with JUnit to ensure data privacy in various user environments"
        ],
        skills: ['TypeScript', 'React', 'Java', 'Bootstrap', 'JUnit']
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
            "Rendered Revit and LiDAR building files difference calculations in a 3D environment, automating the 80+ hours manual task",
            "Visualized building model overlaps with highlighting based on user-defined tolerances",
            "Built an Olsson-authenticated login page and interactive dashboard",
            "Assisted with development of a machine learning model to optimize file comparison times"
        ],
        skills: ['JavaScript', 'Python', 'Django', 'Bootstrap']
    },
];