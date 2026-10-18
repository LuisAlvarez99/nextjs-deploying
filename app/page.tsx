import Image from "next/image";
import Projects from "../src/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Luis Alvarez</h1>
      <h3>Software Engineer</h3>
      <h3>Student</h3>
      <h3>Human</h3>
      <Image src="/selfie.jpg" alt="This is what Luis Alvarez looks like" width={300} height={300} />
      <br/>
      <br/>
      <Projects />
    </div>
  );
}
