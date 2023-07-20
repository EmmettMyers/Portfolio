import { ref } from 'vue';

export const experienceModalOpen = ref(false);
export const experienceModalInfo = ref(
    {title: "", company: "", image: "", time: "", location: "", description: "", skills: []}
);

export const experienceInfo = [
    {
        title: 'Teaching Assistant',
        company: 'University of Nebraska-Lincoln',
        image: 'https://raikes.unl.edu/images/student/pan-kauffman.jpg',
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
        image: 'https://newsroom.unl.edu/announce/files/file135564.jpg',
        time: 'Aug. 2023 - Present',
        location: 'Lincoln, NE',
        description: 'Produce software to facilitate user interaction with existing news site, most notably seamlessly' + 
        ' integrated full-stack code blocks. Developing authenticated admin dashboard that visualizes user interaction on blocks.',
        skills: ['Java', 'SQL', 'OOP', 'Algorithms', 'Relations', 'Optimization', 'Data Structures', 
        'Discrete Math', 'Terminal', 'GUIs']
    },
    {
        title: 'Software Engineer Intern',
        company: 'Principal Financial Group',
        image: 'https://www.desmoinesregister.com/gcdn/presto/2021/02/22/PDEM/6107d8e6-31a4-44f6-ae20-30777e4a7f93-012221_Principal_building_04.jpg',
        time: 'May 2023 - Aug. 2023',
        location: 'Remote',
        description: 'Worked on new report application for sponsors, deploying numerous UI and data changes to the main site weekly.'
        + ' Created AI code documentation solution for company, and presented its importance, business value & implementation to executives.',
        skills: ['TypeScript', 'React', 'Next.js', 'Java', 'Spring', 'Bootstrap', 'Testing', 'Deployment']
    },
    {
        title: 'Software Developer Intern',
        company: 'Olsson',
        image: 'https://helixus.com/wp-content/uploads/2023/04/Olsson_Associates_Headquaters_Helix3-scaled.jpg',
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
        image: 'https://www.elkhornweb.org/eshs/wp-content/uploads/sites/4/2021/06/ESHS-scaled.jpg',
        time: 'Sep. 2020 - Mar. 2022',
        location: 'Omaha, NE',
        description: 'Taught AP Computer Science A to 10+ high school students 5x a week. Improved grades of all students by '
        + 'creating extensive learning modules tailored to each student.',
        skills: ['Java', 'OOP', 'Algorithms', 'Inheritance', 'Lists', 'Polymorphism', 'GUIs']
    }
];