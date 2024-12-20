
interface ResumeData {
    header: Header;
    details: Details;
    profile: Profile;
    employmentHistory: EmploymentHistory[];
}

interface Header {
    name: string;
    title: string;
    location: string;
    profileImage: string;
}

interface Details {
    contact: (string|Link)[];
    links: Link[];
    skills: string[];
    languages: string[];
}

interface Link {
    name: string;
    url: string;
}

interface Profile {
    summary: string;
}

interface EmploymentHistory {
    title: string;
    duration: string;
    duties?: string[];
}
type Project = EmploymentHistory
interface Education {
    title: string;
    duration: string;
    degree: string;
}
declare const resumeData: ResumeData;

interface Meta {
    description: string;
    keywords: string
    author: string
    robots: string
    google_verification?: string
    og: OpengraphMeta
}

interface OpengraphMeta {
    title: string
    description: string
    type: string
    url?: string
    image: string
    site_name: string
}