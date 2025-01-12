export default function Job({ title, duration, duties = [] }:EmploymentHistory) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-2">
                <h4 className="text-lg font-semibold" dangerouslySetInnerHTML={{__html: title}}></h4>
                <p className="text-sm text-gray-500 ">{duration}</p>
            </div>
                {duties && duties.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1">
                        {duties.map((duty, index) => (
                            <li key={index}>{duty}</li>
                        ))}
                    </ul>
                )}
            </div>
            );
            }
