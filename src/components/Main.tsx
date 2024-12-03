import Job from './Job';

export default function Main({profile,employmentHistory, projects,educations}: {educations: Education[],profile: Profile, employmentHistory: EmploymentHistory[], projects: Project[]}) {
    return (
        <div className="w-3/4 pl-6 ">
            <section className="mb-6">
                <h3 className="text-xl font-semibold border-b-2 border-black pb-2 mb-4">PROFILE</h3>
                <p dangerouslySetInnerHTML={{__html:profile.summary}}></p>
            </section>
            <section>
                <h3 className="text-xl font-semibold border-b-2 border-black pb-2 mb-4">EMPLOYMENT HISTORY</h3>
                {employmentHistory.map((job, index) => (
                    <Job key={index} title={job.title} duration={job.duration} duties={job.duties}/>
                ))}
            </section>
            <section>
                <h3 className="text-xl font-semibold border-b-2 border-black pb-2 mb-4">PROJECTS</h3>
                {projects.map((project, index) => (
                    <Job key={index} title={project.title} duration={project.duration} duties={project.duties}/>
                ))}
            </section>
            <section>
                <h3 className="text-xl font-semibold border-b-2 border-black pb-2 mb-4">EDUCATION</h3>
                {educations.map(({degree,title,duration}, index) => (
                    <div  key={index} className="mb-6">
                        <h4 className="text-lg font-semibold">{title}</h4>
                        <h4 className="font-semibold text-gray-500 mb-2">{degree}</h4>
                        <p className="text-sm text-gray-500 mb-2">{duration}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
