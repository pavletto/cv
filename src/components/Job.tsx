export default function Job({ title, duration, duties = [] }:EmploymentHistory) {
    return (
        <div className="mb-6">
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-sm text-gray-500 mb-2">{duration}</p>
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
