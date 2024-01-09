import { ref } from 'vue';

export const educationModalOpen = ref(false);
export const educationModalInfo = ref(
    {school: "", image: "", time: "", location: "", title: "", 
    academics: [], activities: [], honors: [], coursework: []}
);

export const educationInfo = [
    {
        school: 'University of Nebraska-Lincoln',
        image: 'https://bloximages.newyork1.vip.townnews.com/dailynebraskan.com/content/tncms/assets/v3/editorial/f/7f/f7f89afe-dffa-11e9-9ee8-734ed0d5a3ed/5d8c1129759c9.image.jpg?resize=1200%2C800',
        time: 'Aug. 2022 - May 2026',
        location: 'Lincoln, NE',
        title: 'Bachelor of Science, Computer Science',
        academics: ['Focus Area: Software Engineering', 'Minor: Entreprenuership', 'GPA: 3.85', 
        'Raikes School of Computer Science and Management', 'University Honors Program'],
        activities: ['Pi Kappa Alpha Fraternity', 'Intramural Sports', 'Competitive Coding Club', 'CornHacks'],
        honors: ['Design Studio Gold Project Award 2022-2023', "2x Deans' List", 'Raikes Foundation Scholar',
        'Nebraska Career Scholar', 'Regents Scholar'],
        coursework: [
            "Computer Problem Solving",
            "Software Development",
            "Data Structures & Algorithms",
            "Software Engineering",
            "Data Science",
            "Artificial Intelligence",
            "User Interfaces",
            "Computer Systems",
            "Unix Environment",
            "Innovation Processes"
        ]
    },
    {
        school: 'Elkhorn South High School',
        image: 'https://watkinsconcreteblock.com/wp-content/uploads/2015/03/Picture15.jpg?',
        time: 'Aug. 2018 - May 2022',
        location: 'Omaha, NE',
        title: 'High School Diploma',
        academics: ['ACT: 35 (36 Math)', 'SAT: 1530 (790 Math)', 'GPA: 4.319', 'Rank: 15/356'],
        activities: ['Track and Field', 'Football', 'Basketball', 'Striv Sports Broadcasting', 'Math Team'],
        honors: ['ACHIEVE Gold Scholar', 'Elkhorn Excellence Award', 'AP Scholar with Distinction',
        'National Honor Society', '4x Academic Letter', '8x Honor Roll'],
        coursework: []
    }
];