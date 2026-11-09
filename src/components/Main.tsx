import Job from "./Job";

type MainProps = Pick<ResumeData, "summary" | "experience" | "projects" | "skills" | "education" | "languages">;

const headingStyle = "border-b border-slate-300 pb-1 text-xl font-semibold dark:border-slate-600 print:text-sm";

export default function Main({ summary, experience, projects, skills, education, languages }: MainProps) {
    return (
        <main className="space-y-6 print:space-y-1">
            <section aria-labelledby="summary">
                <h2 id="summary" className={headingStyle}>Summary</h2>
                <p className="mt-2">{summary}</p>
            </section>
            <section aria-labelledby="skills">
                <h2 id="skills" className={headingStyle}>Technical Skills</h2>
                <dl className="mt-2 grid gap-2 sm:grid-cols-2 print:grid-cols-1 print:gap-1">
                    {skills.map(({ name, technologies }) => (
                        <div key={name} className="print:flex print:gap-x-2">
                            <dt className="font-semibold print:shrink-0">{name}</dt>
                            <dd>{technologies}</dd>
                        </div>
                    ))}
                </dl>
            </section>
            <section aria-labelledby="experience">
                <h2 id="experience" className={headingStyle}>Experience</h2>
                {experience.map(job => <Job key={job.title} {...job}/>)}
            </section>
            <section aria-labelledby="projects">
                <h2 id="projects" className={headingStyle}>Open Source</h2>
                {projects.map(project => <Job key={project.title} {...project}/>)}
            </section>
            <section aria-labelledby="education">
                <h2 id="education" className={headingStyle}>Education</h2>
                {education.map(entry => <Job key={entry.title} {...entry}/>)}
            </section>
            <section aria-labelledby="languages" className="print:break-inside-avoid">
                <h2 id="languages" className={headingStyle}>Languages</h2>
                <p className="mt-2">{languages.join(", ")}</p>
            </section>
        </main>
    );
}
