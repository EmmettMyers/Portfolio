import { ref } from 'vue';

export const experienceModalOpen = ref(false);
export const experienceModalInfo = ref(
    {title: "", company: "", image: "", time: "", location: "", description: "", skills: []}
);

export const experienceInfo = [
    {
        title: 'Computer Science------Teaching Assistant',
        company: 'University of Nebraska-Lincoln',
        image: 'work_ta.png',
        logo: 'raikes_logow.png',
        time: 'Aug. 2023 - Present',
        location: 'Lincoln, NE',
        description: 'Teach Raikes Honors Computer Science (RAIK 184H) 1-2 to 40 Raikes Freshmen.'
        + ' Grade assignments & tests, host TA hours, assist in labs & lectures.',
        skills: ['Java', 'SQL', 'OOP', 'Algorithms', 'Relations', 'Optimization', 'Data Structures', 
        'Discrete Math', 'Terminal', 'GUIs']
    },
    {
        title: 'Software Developer',
        company: 'The Daily Nebraskan',
        image: 'work_dn2.png',
        logo: 'dn_logow.png',
        time: 'Aug. 2023 - Present',
        location: 'Lincoln, NE',
        description: 'Produce software to facilitate user interaction with existing news site, most notably seamlessly' + 
        ' integrated full-stack code blocks. Developing authenticated admin dashboard that visualizes user interaction on blocks.',
        skills: ['TypeScript', 'React', 'Chart.js', 'Data Visualization', 'Firebase', 'Cloud Storage', 'HTML/SCSS', 'Tailwind']
    },
    {
        title: 'Software Engineer Intern',
        company: 'Principal Financial Group',
        image: 'work_principal2.png',
        logo: 'principal_logow.png',
        time: 'May 2023 - Aug. 2023',
        location: 'Remote',
        description: 'Worked on new report application for sponsors, deploying numerous UI and data changes to the main site weekly.'
        + ' Created AI code documentation solution for company, and presented its importance, business value & implementation to executives.',
        skills: ['TypeScript', 'React', 'Next.js', 'Java', 'Spring', 'HTML/CSS', 'Bootstrap', 'Testing', 'Deployment']
    },
    {
        title: 'Software Developer Intern',
        company: 'Olsson',
        image: 'work_olsson2.png',
        logo: 'olsson_logow.png',
        time: 'Jan. 2023 - May 2023',
        location: 'Lincoln, NE',
        description: 'Front-end development for Project ZeroDelta, a full-stack app that visualizes difference calculations'
        + ' between Revit models & LiDAR point clouds in a 3D space. Implemented user authentication functionalties and sleek UI. '
        + 'Awarded Design Studio Gold Project of the Year.',
        skills: ['JavaScript', '3D Visualization', 'Autodesk API', 'Authentication', 'CSS', 'Bootstrap', 'HTML', 'Python', 'Django']
    },
    {
        title: 'Computer Science Tutor',
        company: 'Elkhorn Public Schools',
        image: 'work_tutor2.png',
        logo: 'tutor_logow.png',
        time: 'Sep. 2020 - Mar. 2022',
        location: 'Omaha, NE',
        description: 'Taught AP Computer Science A to 10+ high school students 5x a week. Improved grades of all students by '
        + 'creating extensive learning modules tailored to each student.',
        skills: ['Java', 'OOP', 'Algorithms', 'Inheritance', 'Lists', 'Polymorphism', 'GUIs']
    }
];