interface ResumeData {
    header: ResumeHeader;
    meta: ResumeMeta;
    summary: string;
    skills: { name: string; technologies: string }[];
    experience: ResumeEntry[];
    projects: ResumeEntry[];
    education: ResumeEntry[];
    languages: string[];
}

interface ResumeHeader {
    name: string;
    role: string;
    location: string;
    profileImage: string;
    contacts: ResumeLink[];
}

interface ResumeLink {
    name: string;
    url: string;
}

interface ResumeEntry {
    title: string;
    subtitle: string;
    duration: string;
    url?: string;
    highlights?: string[];
    link?: ResumeLink;
}

interface ResumeMeta {
    title: string;
    description: string;
    siteUrl: string;
    image: string;
    verification?: string;
}
