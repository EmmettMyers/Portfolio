import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = { CONFIG };

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