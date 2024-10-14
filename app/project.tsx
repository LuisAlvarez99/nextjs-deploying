import Image from "next/image";
import Link from "next/link";

interface ProjectProps{
    name: string;
    image: string;
    link: string;
}

export default function Project({ name, image, link }: ProjectProps) {
    return (
        <div className="w-64 group">
            <div className="top-0 right-0 w-full bg-gray-200 rounded-lg shadow-lg transition-all duration-300 group-hover:translate-x-7">
                <div className="flex items-center justify-end">
                    <Link href={link}>
                        <span className="text-lg font-semibold w-1 writing-vertical">View Project</span>
                    </Link>
                </div>
            </div>
            <div className="relative w-full rounded-lg bg-slate-700 overflow-hidden shadow-lg transition-all duration-300 ">
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="z-0 rotate-90"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-xl font-bold">{name}</h3>
                </div>
            </div>
        </div>
    )
}