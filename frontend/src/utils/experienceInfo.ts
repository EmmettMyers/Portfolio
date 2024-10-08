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
        title: 'Nestimate',
        company: 'Software Engineer Intern',
        image: 'experience/work_nest2.png',
        screen: 'experienceScreens/nest_screen2.png',
        background: 'backgrounds/nest_back.jpg',
        time: 'Mar. 2024 - Present',
        location: 'Remote',
        links: [
            { title: "Product Overview", url: "https://www.mynestimate.com/" },
        ],
        description: 'Full-stack development for a retirement solutions and analytics startup with <strong>$1m+</strong> in VC funding and Fortune 500 clients.',
        contributions: [
            'Created Sales Enablement section and Participant Engagement page with interactive parameters, graphs, and themes for advisors to demonstrate lifetime income effects on retirement to clients',
            'Launched Product Recordkeeper Adoption page with search and filter functionalities to streamline 401k plan provider matching',
            'Pushed <strong>20+</strong> user interface improvements to workflow builder, income calculator, product profile, proposal PDFs, and financial ratings',
            'Developed Nestimate playground site to demo new features to clients and iterate on feedback',
        ],
        skills: ['JavaScript', 'Stimulus', 'Ruby', 'Ruby on Rails', 'HTML/CSS', 'Tailwind']
    },
    {
        title: 'brAIn rot',
        company: 'Software Engineer',
        image: 'experience/brainrot.png',
        screen: 'experienceScreens/brainrot_screen2.png',
        background: 'backgrounds/brainrot_back.jpg',
        time: 'Sep. 2024 - Present',
        location: 'Remote',
        links: [
            { title: "Home Page", url: "https://brainrotcode.com/" },
        ],
        description: "Early stage engineer at a startup with <strong>$100k+</strong> in VC funding and <strong>70+</strong> registered users. Build front-end features for a web platform allowing developers to create algorithms and machine learning models to compete in popular strategy games.",
        contributions: [],
        skills: ['JavaScript', 'React', 'Go', 'HTML/CSS', 'Tailwind', 'Firebase']
    },
    {
        title: 'The Daily Nebraskan',
        company: 'Software Developer',
        image: 'experience/work_dn3.png',
        screen: 'experienceScreens/dn_screen2.png',
        background: 'backgrounds/dn_back.jpg',
        time: 'Aug. 2023 - Present',
        location: 'Lincoln, NE',
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
        ],
        skills: ['JavaScript', 'React', 'Python', 'Flask', 'HTML/SCSS', 'Tailwind', 'AWS', 'Firebase']
    },
    {
        title: 'Nebraska School<br/>of Computing',
        company: 'SWE Teaching Assistant',
        image: 'experience/work_ta.png',
        screen: 'experienceScreens/ta_screen.png',
        background: 'backgrounds/unl_back.jpg',
        time: 'Aug. 2023 - Present',
        location: 'Lincoln, NE',
        links: [
            { title: "Current Course Info", url: "https://catalog.unl.edu/undergraduate/courses/soft/" },
            { title: "Past Courses Info", url: "https://catalog.unl.edu/undergraduate/courses/raik/" },
        ],
        description: 'Teach Software Engineering courses to <strong>110+</strong> Computer Science students. Currently teaching Software Engineering III, used to teach Honors Computer Problem Solving and Honors Software Development Essentials.',
        contributions: [
            'Grade coding assignments, projects, and tests',
            'Host TA hours to assist students with their assignments and understanding of core concepts',
            'Lead lab groups and assist in lectures'
        ],
        skills: ['JavaScript', 'Java', 'React', 'SQL', 'Data Structures', 'Algorithms', 'OOP', 'Discrete Math']
    },
    {
        title: 'Garmin',
        company: 'Software Engineer Intern',
        image: 'experience/work_garmin3.png',
        screen: 'experienceScreens/garmin_screen.png',
        background: 'backgrounds/garmin_back.jpg',
        time: 'May 2024 - Aug. 2024',
        location: 'Kansas City, KS',
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
        skills: ['Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'Java', 'Spring', 'Android SDK']
    },
    {
        title: 'Principal Financial Group',
        company: 'Software Engineer Intern',
        image: 'experience/work_principal2.png',
        screen: 'experienceScreens/principal_screen.png',
        background: 'backgrounds/principal_back.jpg',
        time: 'May 2023 - Aug. 2023',
        location: 'Des Moines, IA',
        links: [
            { title: "Sponsor App Demo", url: "https://landing.principal.com/advisor-retirement-dashboard-demo" },
        ],
        description: "Worked on Principal's new client reporting web app for sponsor companies with <strong>12k+</strong> monthly active users.",
        contributions: [
            'Led creation of report favoriting feature, including its own page and logic, to streamline report access for <strong>2k+</strong> users',
            'Pushed UI and data pipeline improvements to loan reports, reports dashboard and report builder',
            'Added user customization to report scheduling calendar and implemented analytics tracking on <strong>10+</strong> pages.',
            'Presented AI solution to <strong>300+</strong> employees and executives to streamline code documentation time on existing repositories by <strong>98%</strong>, placing <strong>3rd</strong> in Intern Innovation Projects',
            'Resolved <strong>8+</strong> client issues to optimize user experience and tested report event to ensure data privacy in various user environments',
        ],
        skills: ['TypeScript', 'React', 'Java', 'Spring', 'HTML/CSS', 'Bootstrap']
    },
    {
        title: 'UNL Raikes School',
        company: 'Design Studio Developer Intern',
        image: 'experience/work_olsson2.png',
        screen: 'experienceScreens/olsson_screen.png',
        background: 'backgrounds/olsson_back.jpg',
        time: 'Jan. 2023 - May 2023',
        location: 'Lincoln, NE',
        links: [
            { title: "Olsson Project Story", url: "https://www.olsson.com/projects/seeing-the-possibilities" },
        ],
        description: 'Developed the Project ZeroDelta web app under the Raikes School Design Studio Program to streamline building comparisons for Olsson engineers.',
        contributions: [
            'Visualized difference calculations between Revit models & LiDAR point clouds in a 3D interface, automating the old <strong>80+</strong> hour manual task for Olsson engineers',
            'Built an employee-authenticated login page, dynamic dashboard and navigation features',
            'Assisted with the difference calculation machine learning model that optimized comparison times by <strong>94%</strong>',
            'Awarded <strong>Design Studio Gold Project Award</strong>, placing <strong>2nd</strong> in Design Studio Projects out of 20+ teams',
        ],
        skills: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'Python', 'Django', 'Auth0']
    },
];