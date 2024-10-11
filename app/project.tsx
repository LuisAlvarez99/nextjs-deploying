import Image from "next/image";
import Link from "next/link";

interface ProjectProps{
    name: string;
    image: string;
    link: string;
}

export default function Project({ name, image, link }: ProjectProps) {
    return (
        <div className="relative w-64 h-96 group">
            <div className="absolute w-full h-full bg-gray-200 rounded-lg shadow-lg transition-all duration-300 group-hover:-translate-y-16">
                <div className="flex items-start justify-center h-full">
                    <Link href={link}>
                        <span className="text-lg font-semibold">View Project</span>
                    </Link>
                </div>
            </div>
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg transition-all duration-300 ">
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-xl font-bold">{name}</h3>
                </div>
            </div>
        </div>
    )
}