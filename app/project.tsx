// import Image from "next/image";
// import Link from "next/link";

// interface ProjectProps{
//     name: string;
//     image: string;
//     link: string;
// }

// export default function Project({ name, image, link }: ProjectProps) {
//     return (
//         <div className="w-1/6 h-4/5 bg-black group">
//             <div className="flex justify-end w-full h-4/6 bg-red-900 transition-all duration-300 group-hover:translate-x-7">
//                 <div className="">
//                     <Link href={link}>
//                         <span className="w-1 writing-vertical">View Project</span>
//                     </Link>
//                 </div>
//             </div>
//             <div className="shadow-lg transition-all duration-300 ">
//                 <Image
//                     src={image}
//                     alt={name}
//                     width={200}
//                     height={500}
//                     className="bg-green-950 rotate-90 relative h-full"
//                 />
//                 <div className="bg-yellow-800 bg-opacity-50 text-white p-4">
//                     <h3 className="text-xl font-bold">{name}</h3>
//                 </div>
//             </div>
//         </div>
//     )
// }

import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
    name: string;
    image: string;
    link: string;
}

export default function Project({ name, image, link }: ProjectProps) {
    return (
        <div className="relative w-full aspect-[3/2] group">
            <div className="absolute inset-0 z-10 rounded-lg bg-red-700 bg-opacity-65 overflow-hidden">
                <Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <h3 className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">{name}</h3>
            </div>
            <div className="absolute inset-0 rounded-lg overflow-hidden flex z-0 items-center justify-end group-hover:translate-x-8 duration-300">
                <Link href={link} className="text-white font-bold writing-vertical">
                    View Project
                </Link>
            </div>
        </div>
    );
}
