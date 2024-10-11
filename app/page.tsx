import Image from "next/image";
import Project from "./project";
// import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Luis Alvarez</h1>
      <h3>Software Engineer</h3>
      <h3>Student</h3>
      <h3>Human</h3>
      <Image src="images/selfie.png" alt="This is what Luis Alvarez looks like" width={300} height={300} />
      <br/>
      <br/>
      <Project name="Project 1" image="images/vercel.png" link="https://github.com/LuisAlvarez99/nextjs-deploying" />
    </main>
  );
}
