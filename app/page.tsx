import Image from "next/image";
import Project from "./project";
import About from "./about";
import Contact from "./contact";
import {eduVicWaNtBeginner} from "./utils/fonts";
// import Link from "next/link";

export default function Home() {
  return (
  <main className="flex h-screen flex-col bg-slate-300">
    <div className="flex mt-5 mx-3 border-r-2 border-t-2 rounded-tr-xl border-slate-400 h-1/5">
      <div className="flex flex-col w-full pl-4">
        <h1 className={`${eduVicWaNtBeginner} font-bold text-8xl`}>Luis Alvarez</h1>
        <h3 className={` ${eduVicWaNtBeginner} font-medium text-3xl`}>Human</h3>
        <h3 className={` ${eduVicWaNtBeginner} font-medium text-3xl`}>Student</h3>
        <h3 className={` ${eduVicWaNtBeginner} font-medium text-3xl`}>Software Engineer</h3>
      </div>
        <Image className="self-end pr-4" src="/selfie.png" alt="This is what Luis Alvarez looks like" width={230} height={10} />
    </div>
    <div className="whitespace-nowrap overflow-x-auto pl-14 pt-12 no-scrollbar h-3/5">
      <div className="inline-flex w-1/6 h-full gap-12">
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      <Project name="Project 1" image="/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
      </div>
    </div>
    <div className="mt-5 flex w-full h-2/5 bg-blue-800">
      <About />
      <Contact />
    </div>
    </main>
    );
}
