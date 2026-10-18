import {Edu_VIC_WA_NT_Beginner, Didact_Gothic} from "next/font/google";

export const eduVicWaNtBeginner_init = Edu_VIC_WA_NT_Beginner({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-edu-vic-wa-nt-beginner",
    weight: ["400","500","600","700"],
});

export const didactGothic_init = Didact_Gothic({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-didact-gothic",
    weight: ["400"],
});

export const eduVicWaNtBeginner = eduVicWaNtBeginner_init.className;
export const didactGothic = didactGothic_init.className;