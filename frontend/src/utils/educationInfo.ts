import { ref } from 'vue';

export const educationModalOpen = ref(false);
export const educationModalInfo = ref(
    {
        school: "", image: "", time: "", location: "", title: "", links: [{ title: "", url: "" }],
        academics: [], activities: [], honors: [], coursework: []
    }
);

export const educationInfo = [
    {
        school: 'University of Nebraska-Lincoln',
        image: 'https://bloximages.newyork1.vip.townnews.com/dailynebraskan.com/content/tncms/assets/v3/editorial/f/7f/f7f89afe-dffa-11e9-9ee8-734ed0d5a3ed/5d8c1129759c9.image.jpg?resize=1200%2C800',
        time: 'Aug. 2022 - May 2026',
        location: 'Lincoln, NE',
        title: 'Bachelor of Science, Computer Science',
        links: [
            { title: "Raikes School Overview", url: "https://raikes.unl.edu/" },
        ],
        academics: ['Focus Area: Software Engineering', 'Minor: Business', 'GPA: 3.94', 'Major GPA: 4.00'],
        activities: ['Raikes School of Computer Science and Management', 'University Honors Program', 'Pi Kappa Alpha Fraternity', 'Intramural Basketball & Football'],
        honors: ['Intellectual Curiosity Raikes Core Value Award', '2025 Raikes Design Studio Gold Project of the Year', '2023 Raikes Design Studio Gold Project of the Year', 'Raikes Foundation Scholar', 'Nebraska Career Scholar', 'Regents Scholar', "5x Deans' List"],
        coursework: [
            "Computer Problem Solving",
            "Software Development",
            "Data Structures & Algorithms",
            "Advanced Algorithms",
            "Software Engineering",
            "User Interfaces",
            "Programming Language Concepts",
            "Computer Systems Engineering",
            "Operating Systems Principles",
            "Unix Environment",
            "Data Science Fundamentals",
            "Machine Learning I & II",
            "Innovation Processes",
            "Leadership I & II",
        ]
    },
    {
        school: 'Elkhorn South High School',
        image: 'https://watkinsconcreteblock.com/wp-content/uploads/2015/03/Picture15.jpg?',
        time: 'Aug. 2018 - May 2022',
        location: 'Omaha, NE',
        title: 'High School Diploma',
        links: [],
        academics: ['ACT: 35 (36 Math)', 'SAT: 1530 (790 Math)', 'GPA: 4.319', 'Rank: 15/356'],
        activities: ['Track and Field', 'Striv.TV Sports Broadcasting', 'Computer Science and Math Tutoring', 'Football', 'Basketball', 'Math Team'],
        honors: ['ACHIEVE Gold Scholar', 'Elkhorn Excellence Award', 'AP Scholar with Distinction',
            'National Honor Society', '4x Academic Letter', '8x Honor Roll'],
        coursework: [
            "AP Computer Science A (5)",
            "AP Calculus BC (5)",
            "AP Statistics (5)",
        ]
    }
];