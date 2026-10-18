import {didactGothic} from "./utils/fonts";

interface ContactProps {
    name: string;
    link: Array<string>;
}

export function LinkBubble({name, link}: ContactProps) {
    return (
            <div className="flex items-center justify-center w-2/6 h-2/6 rounded-full bg-gray-200">
                <a href={link[0]}></a>
                <h1>{name}</h1>
            </div>
)}

export default function Contact() {
  return (
    <div className={`${didactGothic} h-full w-screen flex justify-between`}>
        <LinkBubble name="Github" link={["https://github.com/joshuachen101"]} />
        <LinkBubble name="Github" link={["https://github.com/joshuachen101"]} />
        <LinkBubble name="Github" link={["https://github.com/joshuachen101"]} />
        <LinkBubble name="Github" link={["https://github.com/joshuachen101"]} />
        <LinkBubble name="Github" link={["https://github.com/joshuachen101"]} />
        <LinkBubble name="Github" link={["https://github.com/joshuachen101"]} />
        {/* <h1>List of platform links</h1>
        <ul>
            <li className="text-lg">Github</li>
            <li className="text-lg">LinkedIn</li>
            <li className="text-lg">Instagram + hover effect with smaller circles for different profiles</li>
            <li className="text-lg">Certify? find platform name for displaying professional certifications</li>
            <li className="text-lg">Email + hover effect smaller circles for different platforms</li>
        </ul>
        <h1>Personal phone number</h1> */}
    </div>
  );
}