import Image from "next/image";
import Link from "next/link";

interface ProjectProps{
    name: string;
    image: string;
    link: string;
}

export default function Project({name, image, link}: ProjectProps){
    return (
        <div className="relative w-64 h-96 group">
            <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-lg">
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
            <Link href={link}>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-lg shadow-lg -z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="flex items-center justify-center h-full">
                <span className="text-lg font-semibold">View Project</span>
            </div>
            </div>
        </Link>
      </div>
    )
}