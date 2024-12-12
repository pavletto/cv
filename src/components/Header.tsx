import Image from "next/image";

export default function Header({data}: {data: Header}) {
    return (
        <header className="flex flex-col items-center">
            <Image src={data.profileImage} alt={`${data.name}'s photo`} width={72} height={72} className="rounded-lg mb-4" />
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-wide">{data.name}</h1>
                <h2 className="text-xl text-gray-600 mt-2">{data.title}</h2>
            </div>
        </header>
    );
}