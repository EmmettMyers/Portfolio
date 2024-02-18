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
        description: "", 
        skills: []
    }
);

export const experienceInfo = [
    /*{
        title: 'Software Engineer Intern',
        company: 'Garmin',
        image: 'experience/work_garmin3.png',
        screen: 'experienceScreens/garmin_screen.png',
        background: 'backgrounds/garmin_back.jpg',
        time: 'May 2024 - Present',
        location: 'Olathe, KS',
        description: 'Worked on new report application for sponsors, deploying numerous UI and data changes to the main site weekly.'
        + ' Spearheaded creation of report favoriting feature, led major data changes to loan reports, improved front-end of reporting dashboard.'
        + ' Created AI code documentation solution for company, and presented its importance, business value & implementation to executives.'
        + ' Tested report functionalities to ensure protection of user information in multiple environments.',
        skills: ['Kotlin', 'Java', 'Android Studio', 'Swift', 'XCode']
    },
    {
        title: 'Software Engineer Intern',
        company: 'Nestimate',
        image: 'experience/work_nest.png',
        screen: 'experienceScreens/nest_screen.png',
        background: 'backgrounds/nest_back.jpg',
        time: 'Feb. 2024 - Present',
        location: 'Lincoln, NE',
        description: 'Worked on new report application for sponsors, deploying numerous UI and data changes to the main site weekly.'
        + ' Spearheaded creation of report favoriting feature, led major data changes to loan reports, improved front-end of reporting dashboard.'
        + ' Created AI code documentation solution for company, and presented its importance, business value & implementation to executives.'
        + ' Tested report functionalities to ensure protection of user information in multiple environments.',
        skills: ['JavaScript', 'React', 'Ruby', 'Rails', 'HTML/CSS']
    },*/
    {
        title: 'Software Developer',
        company: 'The Daily Nebraskan',
        image: 'experience/work_dn2.png',
        screen: 'experienceScreens/dn_screen.png',
        background: 'backgrounds/dn_back.jpg',
        time: 'Aug. 2023 - Present',
        location: 'Lincoln, NE',
        description: 'Only web developer for news website with <strong>30k+</strong> weekly views and <strong>$500k+</strong> annual revenue.'
        + ' Developer new About Us and Advertise With Us pages for clients.'
        + ' Created <strong>10+</strong> new site subsections for <strong>7k+</strong> registered users.'
        + ' Created components for newsletter with <strong>26k+</strong> subscribers, campus Q&A (Curious Cornhuskers), and sports podcasts.'
        + ' Built first-ever Impact Report site for <strong>3k+</strong> donors/alumni to promote company metrics and fundraising.',
        skills: ['JavaScript', 'React', 'Python', 'Flask', 'HTML/SCSS', 'Tailwind', 'Material UI', 'Beehiiv API', 'Trello API', 'Spotify API', 'Firebase', 'Figma']
    },
    {
        title: 'Computer Science-------Teaching Assistant',
        company: 'University of Nebraska-Lincoln',
        image: 'experience/work_ta.png',
        screen: 'experienceScreens/ta_screen.png',
        background: 'backgrounds/unl_back.jpg',
        time: 'Aug. 2023 - Present',
        location: 'Lincoln, NE',
        description: 'Teach Raikes Honors Computer Science courses to <strong>40+</strong> students.'
        + ' Grade assignments & tests, host TA hours, assist in labs & lectures.'
        + ' Currently teaching Software Development (CS 2), last semester taught Computer Problem Solving (CS 1).',
        skills: ['Java', 'SQL', 'OOP', 'Algorithms', 'Relations', 'Optimization', 'Data Structures', 
        'Discrete Math', 'Terminal', 'GUIs']
    },
    {
        title: 'Software Engineer Intern',
        company: 'Principal Financial Group',
        image: 'experience/work_principal2.png',
        screen: 'experienceScreens/principal_screen.png',
        background: 'backgrounds/principal_back.jpg',
        time: 'May 2023 - Aug. 2023',
        location: 'Des Moines, IA',
        description: 'Built client web apps for a <strong>$700b</strong> AUM financial company in an agile team of 7.'
        + ' Worked on sponsor companies reporting app with <strong>12k+</strong> monthly active users, deploying numerous UI and data changes to the main site weekly.'
        + ' Spearheaded creation of report favoriting feature, led major data changes to loan reports, improved front-end of reporting dashboard.'
        + ' Presented AI solution to <strong>300+</strong> employees and executives to streamline code documentation time by <strong>98%</strong>, placed <strong>3rd</strong> in Intern Innovation Projects.'
        + ' Tested report functionalities to ensure protection of user information in multiple environments.',
        skills: ['TypeScript', 'React', 'Java', 'Spring', 'HTML/CSS', 'Bootstrap', 'Google Analytics', 'JUnit', 'Jenkins']
    },
    {
        title: 'Software Developer Intern',
        company: 'Olsson',
        image: 'experience/work_olsson2.png',
        screen: 'experienceScreens/olsson_screen.png',
        background: 'backgrounds/olsson_back.jpg',
        time: 'Jan. 2023 - May 2023',
        location: 'Lincoln, NE',
        description: 'Front-end development for Project ZeroDelta, a full-stack app that visualizes difference calculations between Revit models & LiDAR point clouds in a 3D space. '
        + ' Implemented user authentication functionalties, modern dashboard, and navigation features.'
        + ' Assisted with machine learning model that optimized comparison times by <strong>94%</strong>.'
        + ' Awarded <strong>Design Studio Gold Project of the Year</strong>.',
        skills: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'Python', 'Django', 'Autodesk API', 'Auth0 API' ]
    },
    {
        title: 'Computer Science Tutor',
        company: 'Elkhorn Public Schools',
        image: 'experience/work_tutor2.png',
        screen: 'experienceScreens/tutor_screen.png',
        background: 'backgrounds/eshs_back.jpg',
        time: 'Sep. 2020 - Mar. 2022',
        location: 'Omaha, NE',
        description: 'Taught AP Computer Science A to 10+ high school students 5 times a week.' 
        + ' Improved grades of all students by creating extensive learning modules tailored to each student.',
        skills: ['Java', 'OOP', 'Algorithms', 'Inheritance', 'Lists', 'Polymorphism', 'GUIs']
    }
];