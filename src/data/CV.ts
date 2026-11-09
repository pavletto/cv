const name = "Pavel Sukhodolskii";
const role = "Senior Frontend Engineer | React, TypeScript, Flutter";
const summary = "Software engineer with 10+ years of frontend experience building data-rich web applications in JavaScript, TypeScript, and React, with additional Flutter and Dart client development experience. Open-source contributor to OpenGlobus and creator of a React component toolkit. Experience in performance optimization, REST APIs, Go, Linux, and Docker.";
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
            { name: "github.com/pavletto", url: "https://github.com/pavletto/" },
            { name: "linkedin.com/in/pvlt", url: "https://www.linkedin.com/in/pvlt/" },
        ],
    },
    meta: {
        title: `${name} | ${role}`,
        description: "Pavel Sukhodolskii, a senior frontend engineer in Dubai with experience in React, TypeScript, Flutter, open-source software, and performance optimization.",
        siteUrl,
        image: `${siteUrl}/profile.jpg`,
        verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
    summary,
    skills: [
        { name: "Frontend", technologies: "JavaScript (JS), TypeScript, React, HTML, CSS, Vue 3, Redux, MobX, WebGL" },
        { name: "Cross-platform", technologies: "Flutter, Dart, map interfaces, UDP networking, SQLite" },
        { name: "Backend & protocols", technologies: "Go (Golang), REST APIs, PostgreSQL, WebSocket, WebRTC" },
        { name: "Testing & delivery", technologies: "Jest, Vitest, Cypress, Storybook, Git, Vite, CI/CD, GitHub Actions, GitLab CI" },
        { name: "Systems", technologies: "Linux, Docker, Docker Compose, Nginx, Traefik, Bash" },
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
                "Profiled and optimized the 3D application’s idle event loop to reduce unnecessary processing and improve frontend performance.",
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
                "Conducted code reviews and trained new team members.",
            ],
        },
        {
            title: "SkyTel",
            subtitle: "Junior Frontend Developer → Mid-level Frontend Developer",
            duration: "September 2014 – December 2017",
            highlights: [
                "Developed and tested a web application for managing a virtual phone system (PBX) and viewing usage statistics.",
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
                "Created a React component toolkit for the WebGL globe engine, with examples in Storybook.",
                "Added support for rendering textured OBJ models and refactored multi-touch controls for mobile devices.",
                "Profiled and optimized the WebGL engine.",
                "Established continuous integration for linting, builds, tests, and documentation generation, with automated npm publishing.",
            ],
            link: { name: "React toolkit examples in Storybook", url: "https://openglobus.github.io/storybook/" },
        },
    ],
    education: [
        { title: "Saint Petersburg University of Telecommunications", subtitle: "Computer Networks", duration: "2014" },
        { title: "ITMO University, Extension School", subtitle: "Web Development", duration: "2015" },
    ],
    languages: ["English", "Russian", "Belarusian"],
};

export default data;
