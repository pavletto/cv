// data.js
const data = {
    title: "Pavel Sukhodolskii - Senior Fullstack Engineer",
    meta: {
        description: "CV of Pavel Sukhodolskii, a Senior Frontend Developer based in Dubai with extensive experience in JavaScript, TypeScript, React, WebGL, WebRTC, Docker, and Go. Contributing to OpenGlobus and creating React component kits. Over 10 years in frontend development and 4 years in the drone industry.",
        keywords: "Pavel Sukhodolskii, Senior Frontend Developer, Frontend Engineer, JavaScript, TypeScript, React, WebGL, WebRTC, Docker, Go, Drone Industry, GIS, OpenGlobus, Dubai",
        author: "Pavel Sukhodolskii",
        robots: "index, follow",
        google_verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
        og: {
            title: "Pavel Sukhodolskii - Senior Engineer Developer",
            description: "CV of Pavel Sukhodolskii, a Senior Frontend Developer based in Dubai with extensive experience in JavaScript, TypeScript, React, WebGL, WebRTC, Docker, and Go. Contributing to OpenGlobus and creating React component kits. Over 10 years in frontend development and 4 years in the drone industry.",
            type: "website",
            url: process.env.NEXT_PUBLIC_SITE_URL,
            image: `${process.env.NEXT_PUBLIC_SITE_URL}/profile.jpg`,
            site_name: "Pavel Sukhodolskii CV"
        }
    },
    header: {
        name: "PAVEL SUKHODOLSKII",
        title: "Senior Engineer Developer",
        location: "Dubai, United Arab Emirates",
        profileImage: "profile.jpg"
    },
    details: {
        contact: [
            "Dubai, United Arab Emirates",
            {
                name: "+971 58 502 3783",
                url: "tel:+971585023783"
            },
            {
                name: "sukhodolskii.com",
                url: "https://sukhodolskii.com"
            },
            {
                name: "pavel@sukhodolskii.com",
                url: "mailto:pavel@sukhodolskii.com"
            }
        ],
        links: [
            {
                name: "Github",
                url: "https://github.com/pavletto/"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/pvlt/"
            }
        ],
        skills: [
            "JavaScript",
            "TypeScript",
            "React",
            "Go",
            "CSS",
            "Web Socket",
            "WebRTC",
            "WebGL",
            "MobX",
            "Vue",
            "Redux",
            "Mapbox",
            "Openglobus",
            "Vite",
            "Cypress",
            "Webpack",
            "Jest",
            "ViTest",
            "Docker",
            "Storybook",
            "Python",
            "Git",
            "Bash",
            "Jira",
            "Figma"
        ],
        languages: [
            "English",
            "Belarusian",
            "Russian"
        ]
    },
    profile: {
        summary: "Software engineer with over 10 years of front-end development experience and 2 years of back-end development experience, specializing in building high-performance real-time web applications and optimizing front-end solutions. Experienced in working at both mid-sized companies and startups. Contributor to the <a class='text-blue-600 hover:underline' href='https://github.com/openglobus'>OpenGlobus</a> open-source project, creator of <a class='text-blue-600 hover:underline' href='https://openglobus.github.io/storybook/'>React component kit</a> based on it."
    },
    educations: [
        {
            title: "Saint Petersburg University of Telecommunications",
            degree: "Bachelor of Computer Networks",
            duration: "2014"
        },
        {
            title: "ITMO University, Extension School",
            degree: "Web Development",
            duration: "2015"
        }
    ],
    projects: [
        {
            title: "OpenGlobus",
            duration: "December 2020 — Present",
            duties: [
                "Added the ability to view 3D objects with textures, including support for the .obj format",
                "Improved engine performance by more than 70% through extensive profiling efforts",
                "Refactored multi-touch support for seamless interaction on mobile devices",
                "Established a comprehensive pipeline for linting, building, testing, and documentation generation",
                "Created a package in the npm repository and added a publish stage to the pipeline"
            ]
        }
    ],
    employmentHistory: [
        {
            title: "Senior Fullstack Developer<br/>Senior Frontend Developer at <a class='text-blue-600 hover:underline' href='https://microavia.com'>Microavia</a>",
            skills: [],
            duration: "November 2020 — Present",
            duties: [
                "Developed and maintained a high-performance web-based 3D application for real-time control of UAVs and ground stations, enabling mission creation and editing, flight history viewing, and flight scheduling",
                "Rapidly learned Go and stepped in to replace the departing Backend Lead Developer during a financially challenging period, ensuring seamless project continuity without requiring external hiring.",
                "Created video camera control from scratch and refactored WebRTC signaling for real-time monitoring and control",
                "Optimized the 3D application’s performance during idle periods, improving the event loop and increasing overall efficiency by more than 50%",
                "Handled diverse geospatial tasks, including developing a proxy-caching tile server for offline use and quickly creating an area-based mission-building algorithm, enabling clients to efficiently manage large geodetic workloads"

            ]
        },
        {
            title: "Middle Frontend Developer at <a class='text-blue-600 hover:underline' href='https://edisoft.io/en'>Ediweb</a>",
            skills: [],
            duration: "December 2017 — November 2020",
            duties: [
                "Developed the interface for an integration platform used in electronic document management",
                "Optimized and refactored existing code, added new features, overhauled the entire application by converting it into a single-page application, and carried out a full redesign",
                "Successfully created a sales MVP using React, Redux, and RxJs",
                "Wrote and maintained server-side Java controllers and services, involving REST APIs",
                "Conducted code reviews and provided training for new team members"
            ]
        },
        {
            title: "Junior Frontend Developer<br/>Middle Frontend Developer at SkyTel",
            skills: [],
            duration: "September 2014 — December 2017",
            duties: [
                "Developed an SPA solution to display statistics and manage the virtual PBX, including support and testing",
                "Supported and updated company websites",
                "Created a callback widget for the client’s site, as well as a module for its generation and integration",
                "Developed widgets for CRM systems using WebRTC",
                "Configured Apache and Nginx, wrote scripts for project builds, and created Docker images for projects"
            ]
        }
    ]
};

export default data;
