import Image from "next/image";
import ProjectsTimeline from "./components/ProjectsTimeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black text-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Luis Alvarez</h1>
        <h3 className="text-xl text-gray-400 mb-2">Software Engineer</h3>
        <h3 className="text-xl text-gray-400 mb-2">Student</h3>
        <h3 className="text-xl text-gray-400 mb-8">Human</h3>
        <Image src="/selfie.jpg" alt="This is what Luis Alvarez looks like" width={300} height={300} className="rounded-full mx-auto" />
      </div>

      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-8">Projects Showcase</h2>
        <ProjectsTimeline />
      </div>
    </main>
  );
)
