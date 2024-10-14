import {didactGothic} from "../utils/fonts";

export default function About() {
  return (
    <div className="h-full w-4/5">
      <h1 className={` ${didactGothic} text-xl`}>
        I am a results-oriented Software Engineer with 4+ years of experience developing and maintaining full-stack web applications and data pipelines. Proven ability to condense and visualize complex data sets, create efficient CI/CD pipelines, and collaborate effectively with cross-functional teams. Passionate about leveraging technology to solve real-world problems and drive business value.
        <strong className="text-3xl"> MODIFY AND EXPAND</strong>
      </h1>
    </div>
  );
}