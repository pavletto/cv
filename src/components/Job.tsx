export default function Job({ title, subtitle, duration, url, highlights, link }: ResumeEntry) {
    return (
        <article className="mt-4 print:mt-2 print:break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold print:text-sm">{url ? <a href={url}>{title}</a> : title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 print:text-xs">{duration}</p>
            </div>
            <p className="font-medium">{subtitle}</p>
            {highlights && (
                <ul className="mt-1 list-disc space-y-1 pl-5 print:space-y-0">
                    {highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                </ul>
            )}
            {link && <p className="mt-1"><a href={link.url}>{link.name}</a></p>}
        </article>
    );
}
