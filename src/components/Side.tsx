export default function Side({contact, links, skills, languages}: Details) {
    return (
        <div className="w-full  min-w-[200px]   border-r-0 border-gray-200 pr-6 sm:w-1/4 sm:border-r-2 print:pr-0">
            <div className="mb-8 text-center">
                <h3 className="text-lg font-semibold mb-2">DETAILS</h3>
                <ul className="space-y-1">
                    {contact.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-8 text-center">
                <h3 className="text-lg font-semibold mb-2">LINKS</h3>
                <ul className="space-y-1">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} target="_blank" className="text-blue-500 hover:underline">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-8 text-center">
                <h3 className="text-lg font-semibold mb-2">SKILLS</h3>
                <ul className="space-y-1">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">LANGUAGES</h3>
                <ul className="space-y-1">
                    {languages.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
            </div>
        </div>)
}
