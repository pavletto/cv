// data.js
const data = {
    title: "Pavel Sukhodolskii - Senior Frontend Developer",
    meta: {
        description: "CV of Pavel Sukhodolskii, a Senior Frontend Developer based in Dubai with extensive experience in JavaScript, TypeScript, React, WebGL, WebRTC, Docker, and Go. Contributing to OpenGlobus and creating React component kits. Over 10 years in frontend development and 4 years in the drone industry.",
        keywords: "Pavel Sukhodolskii, Senior Frontend Developer, Frontend Engineer, JavaScript, TypeScript, React, WebGL, WebRTC, Docker, Go, Drone Industry, GIS, OpenGlobus, Dubai",
        author: "Pavel Sukhodolskii",
        robots: "index, follow",
        google_verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
        og: {
            title: "Pavel Sukhodolskii - Senior Frontend Developer",
            description: "CV of Pavel Sukhodolskii, a Senior Frontend Developer based in Dubai with extensive experience in JavaScript, TypeScript, React, WebGL, WebRTC, Docker, and Go. Contributing to OpenGlobus and creating React component kits. Over 10 years in frontend development and 4 years in the drone industry.",
            type: "website",
            url: process.env.NEXT_PUBLIC_SITE_URL,
            image: `${process.env.NEXT_PUBLIC_SITE_URL}/profile.jpg`,
            site_name: "Pavel Sukhodolskii CV"
        }
    },
    header: {
        name: "PAVEL SUKHODOLSKII",
        title: "Senior Frontend Developer",
        location: "Dubai, United Arab Emirates",
        profileImage: "profile.jpg"
    },
    details: {
        contact: [
            "Dubai",
            "United Arab Emirates",
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
            "CSS",
            "TypeScript",
            "React",
            "WebGL",
            "WebRTC",
            "Docker",
            "Go",
            "Git",
            "Nginx",
            "Bash",
            "Python"
        ],
        languages: [
            "English",
            "Belarusian",
            "Russian"
        ]
    },
    profile: {
        summary: "I am a front-end developer with over 10 years of experience in frontend development and 4 of them in the drone industry. I worked closely with video streaming, 3D, and GIS. In my free time, I actively contribute to the <a class='text-blue-600 hover:underline' href='https://github.com/openglobus'>OpenGlobus</a> open-source project and create <a class='text-blue-600 hover:underline' href='https://openglobus.github.io/storybook/'>React component kit</a> based on it."
    },
    educations: [
        {
            title: "Saint Petersburg University of Telecommunications, Saint Petersburg, Russia",
            degree: "Bachelor of Computer Networks",
            duration: "2009 — 2014"
        },
        {
            title: "ITMO University, Extension School, Saint Petersburg, Russia",
            degree: "Web Development",
            duration: "2015"
        }
    ],
    projects: [
        {
            title: "OpenGlobus",
            duration: "December 2020 — Present",
            duties: [
                "Added the ability to view 3D objects.",
                "Developed a Python script to export 3D objects from Blender, improved workflow efficiency.",
                "Added texture mapping capabilities and introduced object creation from .obj format.",
                "Improved engine performance more than 70% through extensive profiling efforts.",
                "Improved multi-touch support for seamless interaction on mobile devices.",
                "Implemented a ruler tool for measuring height and length.",
                "Established a comprehensive pipeline for linting, build testing and documentation generation.",
                "Created a package in the npm repository and added a publish stage to the pipeline.",
                "Integrated a documentation publishing stage to ensure up-to-date documentation on the project website."
            ]
        }
    ],
    employmentHistory: [
        {
            title: "Senior Frontend Developer at Microavia, Dubai",
            duration: "October 2022 — Present",
            duties: []
        },
        {
            title: "Senior Frontend Developer at Microavia, Saint Petersburg",
            duration: "November 2020 — September 2022",
            duties: [
                "Develop and maintain a high-performance web-based 3D application for real-time control of UAVs and ground stations.",
                "Mission editor for planning and modifying UAV routes and objectives.",
                "Video camera control and streaming for real-time monitoring and control.",
                "Scheduling for managing automated drone dispatch based on predefined timetables.",
                "Flight log panel to display detailed flight history and mission data.",
                "Optimized the 3D application's performance during idle periods, improving the event loop and increasing overall efficiency by more than 50%."
            ]
        },
        {
            title: "Senior Frontend Developer at Ediweb, Saint Petersburg",
            duration: "December 2017 — November 2020",
            duties: [
                "Interface developing of an integration platform for electronic document management based on Ext JS.",
                "Optimization and refactoring of current code, implementation of new features, overhaul of the entire application, porting it to a single-page application, and full re-design.",
                "Creation of a sales MVP using React/Redux and RxJs.",
                "Writing and editing server-side Java controllers and services, involving REST APIs and services.",
                "Configuring the build of a legacy Ext JS 4 application using webpack and setting up Maven builds to include static assets in the pipeline.",
                "Conducting code reviews and providing training for new team members."
            ]
        },
        {
            title: "Frontend developer at SkyTel, Saint Petersburg",
            duration: "September 2014 — December 2017",
            duties: [
                "Development of an SPA solution to display statistics and manage the virtual PBX, it's support and testing. (ExtJS, PHP).",
                "Support and development of company websites.",
                "Development of a call-back widget to connect to the client's site, as well as a module for its generation and connection. (JS, Stylus, Gulp, PHP).",
                "Development of widgets for CRM systems Bitrix24 and AmoCRM (Gulp, JS).",
                "Configuration of Apache, nginx. Writing scripts to build the project. Creation of Docker images for projects"
            ]
        }
    ]
};

export default data;
