import Job from './Job';

export default function Main({profile,details, employmentHistory, projects, educations}: {details:Details,educations: Education[], profile: Profile, employmentHistory: EmploymentHistory[], projects: Project[]}) {
    return (
        <div className="w-full pl-4">
            <div className="mb-6 text-center">
                <ul className="flex justify-around flex-col sm:flex-row">
                    {details.contact.map((detail, index) => (
                        (typeof detail === "string") ?
                            <li key={index}>{detail}</li> :
                            <li key={index}><a href={detail.url} target="_blank"
                                               className="text-blue-600 hover:underline">{detail.name}</a></li>
                    ))}
                </ul>
            </div>
            <section className="mb-4">
                <h3 className="text-xl font-semibold border-b-2 border-black dark:border-gray-300 pb-2 mb-4">SUMMARY</h3>
                <p className="text-black dark:text-white" dangerouslySetInnerHTML={{__html: profile.summary}}></p>
            </section>
            <section className="mb-4"><h3
                className="text-xl font-semibold border-b-2 border-black dark:border-gray-300 pb-2 mb-4">SKILLS</h3>
                {
                    details.skills.join(', ')
                }
            </section>
            <section  className="mb-4">
                <h3 className="text-xl font-semibold border-b-2 border-black dark:border-gray-300 pb-2 mb-4">EMPLOYMENT
                    HISTORY</h3>
                {employmentHistory.map((job, index) => (
                    <Job key={index} title={job.title} duration={job.duration} duties={job.duties}/>
                ))}
            </section>
            <section>
                <h3 className="text-xl font-semibold border-b-2 border-black dark:border-gray-300 pb-2 mb-4">PROJECTS</h3>
                {projects.map((project, index) => (
                    <Job key={index} title={project.title} duration={project.duration} duties={project.duties}/>
                ))}
            </section>
            <section className="mb-4">
                <h3 className="text-xl font-semibold border-b-2 border-black dark:border-gray-300 pb-2 mb-4">EDUCATION</h3>
                {educations.map(({degree, title, duration}, index) => (
                    <div key={index} className="mb-6">
                        <h4 className="text-lg font-semibold text-black dark:text-white">{title}</h4>
                        <h4 className="font-semibold text-gray-500 dark:text-gray-400 mb-2">{degree}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{duration}</p>
                    </div>
                ))}
            </section>
            <div className="mb-8 text-center">
                <h3 className="text-lg font-semibold mb-2">LINKS</h3>
                <ul className="space-y-1 flex justify-around">
                    {details.links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} target="_blank" className="text-blue-600 hover:underline">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
