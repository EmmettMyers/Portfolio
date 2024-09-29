import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCuy_n4ZGG8K3yB3SqgqcLmtr22JvUMXxI",
    authDomain: "emmett-myers-portfolio.firebaseapp.com",
    projectId: "emmett-myers-portfolio",
    storageBucket: "emmett-myers-portfolio.appspot.com",
    messagingSenderId: "1069425322484",
    appId: "1:1069425322484:web:7e73bd5e1be67ce049b1a1",
    measurementId: "G-J35JJF91Q1"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const logContactIconClick = (icon: string) => {
    logEvent(analytics, icon + '_clicked', {});
}

export const logExperienceBoxClick = (role: string, company: string) => {
    logEvent(analytics, 'experience_box_clicked', {
        role_name: role,
        company_name: company
    });
}

export const logProjectBoxClick = (name: string) => {
    logEvent(analytics, 'project_box_clicked', {
        project_name: name
    });
}

export const logProjectButtonClick = (button: string, project: string) => {
    logEvent(analytics, button + '_clicked', {
        project_name: project
    });
}

export const logEducationBoxClick = (school: string) => {
    logEvent(analytics, 'education_box_clicked', {
        school_name: school
    });
}