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
        title: 'Software Engineer Intern',
        company: 'Garmin',
        image: 'experience/work_garmin3.png',
        screen: 'experienceScreens/garmin_screen.png',
        background: 'backgrounds/garmin_back.jpg',
        time: 'May 2024 - Present',
        location: 'Olathe, Kansas',
        links: [
            { title: "Clipboard Overview", url: "https://www.garmin.com/en-US/p/739176" },
            { title: "Clipboard Demo", url: "https://www.youtube.com/watch?v=_Saq212NlYc&ab_channel=GarminTraining" },
        ],
        description: 'Developing Garmin Clipboard, a mobile app designed to help cross country teams build workouts and review stats, for <strong>110k+</strong> registered users.',
        contributions: [
        ],
        skills: ['Kotlin', 'Java', 'Android Studio', 'Jetpack Compose']
    },
    {
        title: 'Software Engineer Intern',
        company: 'Nestimate',
        image: 'experience/work_nest2.png',
        screen: 'experienceScreens/nest_screen2.png',
        background: 'backgrounds/nest_back.jpg',
        time: 'Mar. 2024 - Present',
        location: 'Lincoln, Nebraska',
        links: [
            { title: "Product Overview", url: "https://www.mynestimate.com/" },
        ],
        description: 'Front-end development for a retirement solutions and analytics startup with <strong>$1m+</strong> in VC funding.',
        contributions: [/*
            'Created Sales Enablement page with interactive parameters and graphs for advisors to demonstrate lifetime income effects on retirement to clients',
            'Developed filterable Product Recordkeeper page to streamline 401k plan provider matching and card visuals for upcoming retirement products',*/
        ],
        skills: ['JavaScript', 'Stimulus', 'Ruby', 'Ruby on Rails', 'HTML/CSS', 'Tailwind', 'DaisyUI', 'Chart.js']
    },
    {
        title: 'Software Developer',
        company: 'The Daily Nebraskan',
        image: 'experience/work_dn3.png',
        screen: 'experienceScreens/dn_screen2.png',
        background: 'backgrounds/dn_back.jpg',
        time: 'Aug. 2023 - Present',
        location: 'Lincoln, Nebraska',
        links: [
            { title: "Main Site", url: "https://www.dailynebraskan.com/" },
            { title: "Impact Report", url: "https://dn-impact.web.app/" },
        ],
        description: "Engineer interactive web pages and modules for UNL's main news website with <strong>20k+</strong> weekly views and <strong>7k+</strong> registered users.",
        contributions: [
            'Launched 2024 Endowment page and first-ever Impact Report site for <strong>3k+</strong> donors and alumni to promote company metrics and fundraising',
            'Built the Curious Cornhuskers Q&A component, automatically sending <strong>8+</strong> student questions to the staff Trello board weekly',
            'Deployed a module and server for students to sign up to the <strong>26k+</strong> subscriber University newsletter',
            'Developed new About Us and Advertise With Us pages for improved exposure to clients, growing page views by <strong>44%</strong>',
            'Generated <strong>10+</strong> new site subsections, using query population to fill them with existing articles',
            'Resolved bugs with existing software to improve user experience',
        ],
        skills: ['JavaScript', 'React', 'Python', 'Flask', 'HTML/SCSS', 'Tailwind', 'Material UI', /*'Beehiiv API', 'Trello API', 'Spotify API',*/ 'Firebase']
    },
    {
        title: 'Computer Science-------Teaching Assistant',
        company: 'University of Nebraska-Lincoln',
        image: 'experience/work_ta.png',
        screen: 'experienceScreens/ta_screen.png',
        background: 'backgrounds/unl_back.jpg',
        time: 'Aug. 2023 - May 2024',
        location: 'Lincoln, Nebraska',
        links: [
            { title: "Course Information", url: "https://catalog.unl.edu/undergraduate/courses/raik/" },
        ],
        description: 'Taught Computer Science courses to <strong>40</strong> students in the Raikes School Honors Program.',
        contributions: [
            'Graded coding assignments, projects, and tests',
            'Hosted TA hours to assist students with their programs and understanding of assignments',
            'Led lab groups and assisted in lectures',
        ],
        skills: ['Java', 'SQL', 'OOP', 'Algorithms', 'Relations', 'Optimization', 'Data Structures',
            'Discrete Math']
    },
    {
        title: 'Software Engineer Intern',
        company: 'Principal Financial Group',
        image: 'experience/work_principal2.png',
        screen: 'experienceScreens/principal_screen.png',
        background: 'backgrounds/principal_back.jpg',
        time: 'May 2023 - Aug. 2023',
        location: 'Des Moines, Iowa',
        links: [
            { title: "Sponsor App Demo", url: "https://landing.principal.com/advisor-retirement-dashboard-demo" },
        ],
        description: "Worked on Principal's new client reporting web app for sponsor companies with <strong>12k+</strong> monthly active users.",
        contributions: [
            'Spearheaded creation of report favoriting feature, including its own page and logic, to streamline report access for <strong>2k+</strong> users',
            'Pushed major UI/data improvements to loan reports and improved front-end of reports dashboard, increasing the reports user count by <strong>14%</strong>',
            'Added user customization to report scheduling calendar and implemented analytics tracking on <strong>10+</strong> pages.',
            'Presented AI solution to <strong>300+</strong> employees and executives to streamline code documentation time on existing repositories by <strong>98%</strong>, placing <strong>3rd</strong> in Intern Innovation Projects',
            'Resolved <strong>10+</strong> client issues to optimize user experience and tested report functions to ensure data privacy in various environments',
        ],
        skills: ['TypeScript', 'React', 'Java', 'Spring', 'HTML/CSS', 'Bootstrap', 'Google Analytics', 'JUnit']
    },
    {
        title: 'Software Developer Intern',
        company: 'Olsson - Design Studio',
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
            'Visualized difference calculations between Revit models & LiDAR point clouds in a 3D platform, automating the old <strong>80+</strong> hour manual task for Olsson engineers',
            'Built an employee-authenticated login page, dynamic dashboard and navigation features',
            'Assisted with the difference calculation machine learning model that optimized comparison times by <strong>94%</strong>',
            'Awarded <strong>Design Studio Gold Project Award</strong>, placing <strong>2nd</strong> in Design Studio Projects out of 20+ teams',
        ],
        skills: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'Python', 'Django', 'Autodesk API', 'Auth0']
    },
    /*{
        title: 'Computer Science Tutor',
        company: 'Elkhorn Public Schools',
        image: 'experience/work_tutor2.png',
        screen: 'experienceScreens/tutor_screen.png',
        background: 'backgrounds/eshs_back.jpg',
        time: 'Sep. 2020 - Mar. 2022',
        location: 'Omaha, Nebraska',
        links: [
            { title: "Course Overview", url: "https://codehs.com/uploads/9f387437eb4a6e8385658ad050e33ac8" },
        ],
        description: 'Taught AP Computer Science A to <strong>10+</strong> high school students <strong>5</strong> days a week.'
            + ' Improved grades of all students by creating extensive learning modules tailored to each student.',
        skills: ['Java', 'OOP', 'Algorithms', 'Inheritance', 'Lists', 'Polymorphism', 'GUIs']
    }*/
];