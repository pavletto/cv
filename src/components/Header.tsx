import Image from "next/image";

export default function Header({ name, role, location, profileImage, contacts }: ResumeHeader) {
    return (
        <header className="flex flex-wrap items-center gap-x-5 gap-y-3 print:gap-y-1">
            <Image src={profileImage} alt="" width={72} height={72} priority
                   className="h-[72px] w-[72px] rounded-lg object-cover print:hidden"/>
            <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl print:text-2xl">{name}</h1>
                <p className="mt-1 text-xl text-slate-700 dark:text-slate-300 print:text-base">{role}</p>
            </div>
            <ul aria-label="Contact details" className="flex w-full flex-wrap gap-x-4 gap-y-1 text-sm print:text-xs">
                <li>{location}</li>
                {contacts.map(({ name, url }) => (
                    <li key={url} className="break-all"><a href={url}>{name}</a></li>
                ))}
            </ul>
        </header>
    );
}
