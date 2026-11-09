const name = "Pavel Sukhodolskii";
const role = "Senior Full-Stack Engineer";
const summary = "Senior software engineer with 10+ years of frontend experience, including building real-time software for drone operations. At Microavia, I build 3D mission planning and fleet control interfaces and develop Go services for telemetry and live video. I also contribute to OpenGlobus, an open-source WebGL globe engine.";
const website = "https://sukhodolskii.com";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || `${website}${basePath}`).replace(/\/+$/, "");

const data: ResumeData = {
    header: {
        name,
        role,
        location: "Dubai, United Arab Emirates",
        profileImage: `${basePath}/profile.jpg`,
        contacts: [
            { name: "pavel@sukhodolskii.com", url: "mailto:pavel@sukhodolskii.com" },
            { name: "sukhodolskii.com", url: website },
            { name: "GitHub", url: "https://github.com/pavletto/" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/pvlt/" },
        ],
    },
    meta: {
        title: `${name} | ${role}`,
        description: "Pavel Sukhodolskii, a senior full-stack engineer in Dubai working on drone operations software, real-time 3D maps, and Go services.",
        siteUrl,
        image: `${siteUrl}/profile.jpg`,
        verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
    summary,
    skills: [
        { name: "Frontend", technologies: "TypeScript, JavaScript, Vue 3, React, MobX, Vite" },
        { name: "Geospatial & 3D", technologies: "WebGL, OpenGlobus, Mapbox GL, Cesium" },
        { name: "Backend & real-time", technologies: "Go, PostgreSQL, REST, WebSocket, WebRTC, UDP" },
        { name: "Infrastructure", technologies: "Docker, Nginx, Traefik, GitLab CI, GitHub Actions" },
    ],
    experience: [
        {
            title: "Microavia",
            url: "https://microavia.com",
            subtitle: "Senior Frontend Developer → Senior Full-Stack Developer",
            duration: "November 2020 – Present",
            highlights: [
                "Built a real-time 3D web application for operating drones and ground stations, with mission planning, flight scheduling, and flight history.",
                "Expanded into Go backend development and took ownership of backend work after the team’s backend lead left.",
                "Built camera controls, refactored WebRTC signaling, and developed a WebRTC gateway for H.264 and H.265 video.",
                "Optimized the 3D application’s idle event loop to reduce unnecessary processing.",
                "Built a caching map-tile proxy for offline use and implemented area-based mission planning.",
            ],
        },
        {
            title: "Ediweb",
            url: "https://edisoft.io/en",
            subtitle: "Mid-level Frontend Developer",
            duration: "December 2017 – November 2020",
            highlights: [
                "Redesigned the interface of an electronic document integration platform and migrated it to a single-page application.",
                "Built a sales MVP using React, Redux, and RxJS, and maintained Java controllers and services for REST APIs.",
                "Reviewed code and onboarded new team members.",
            ],
        },
        {
            title: "SkyTel",
            subtitle: "Junior Frontend Developer → Mid-level Frontend Developer",
            duration: "September 2014 – December 2017",
            highlights: [
                "Built a web application for managing a virtual phone system (PBX) and viewing usage statistics.",
                "Developed an embeddable callback widget for customer websites and WebRTC widgets for CRM systems.",
                "Configured Apache and Nginx and automated project builds and Docker image creation.",
            ],
        },
    ],
    projects: [
        {
            title: "OpenGlobus",
            url: "https://github.com/openglobus",
            subtitle: "Open-source contributor",
            duration: "December 2020 – Present",
            highlights: [
                "Added support for rendering textured OBJ models and refactored multi-touch controls for mobile devices.",
                "Profiled and optimized the WebGL engine.",
                "Set up CI for linting, builds, tests, and documentation, and automated publishing to npm.",
            ],
            link: { name: "Created a React component kit for OpenGlobus", url: "https://openglobus.github.io/storybook/" },
        },
    ],
    education: [
        { title: "Saint Petersburg University of Telecommunications", subtitle: "Computer Networks", duration: "2014" },
        { title: "ITMO University, Extension School", subtitle: "Web Development", duration: "2015" },
    ],
    languages: ["English", "Russian", "Belarusian"],
};

export default data;
