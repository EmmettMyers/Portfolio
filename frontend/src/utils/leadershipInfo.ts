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
        title: 'Pi Kappa Alpha',
        company: 'Internet Chair',
        image: 'experience/work_pike.png',
        screen: 'experienceScreens/pike_screen.png',
        background: 'backgrounds/pike_back.jpg',
        time: 'Nov. 2024 - Present',
        location: 'Lincoln, NE',
        links: [
            { title: "Main Site", url: "https://app.pikeunl.com/" },
        ],
        description: "Develop new features for the Gamma Beta website to optimize chapter operations and communication for <strong>200+</strong> active members and alumni.",
        contributions: [],
        skills: ['TypeScript', 'React', 'Firebase', 'PostgreSQL', 'HTML/CSS', 'MaterialUI', 'Jest']
    },
    {
        title: 'The Daily Nebraskan',
        company: 'Software Development Lead',
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
        description: "Engineer interactive web pages and modules for UNL's main news website with <strong>20k+</strong> weekly views and <strong>7k+</strong> registered users. Placed <strong>2nd</strong> in National College Media Website of the Year.",
        contributions: [
            'Placed <strong>2nd</strong> in National College Media Website of the Year',
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
];