// Import libraries
import type React from "react"
import GlareHover from "../../gsap/Animations/GlareHover/GlareHover"

// Import images
import HTML from "../../assets/HTML.png"
import CSS from "../../assets/CSS.png"
import JS from "../../assets/JAVASCRIPT.png"
import TS from "../../assets/TYPESCRIPT.png"
import REACT from "../../assets/REACTJS.png"
import NestJS from "../../assets/NestJS.png"
import IONIC from "../../assets/IONIC.png"
import Tauri from "../../assets/tauri.png"
import Git from "../../assets/Git.png"
import Firebase from "../../assets/FIREBASE.png"
import Cloudinary from "../../assets/cloudinary.png"
import PostgreSQL from "../../assets/Postgresql.png"
import Render from "../../assets/Render.png"
import Vercel from "../../assets/Vercel.png"
import Postman from "../../assets/Postman.png"
import Figma from "../../assets/Figma.png"
import Tailwind from "../../assets/Tailwind.png"
import Supabase from "../../assets/supabase.png"

const ProgrammingLanguage: React.FC = () => {

    // Item
    const languages = [
        { content: "Html", img: HTML },
        { content: "Css", img: CSS },
        { content: "JavaScript", img: JS },
        { content: "TypeScript", img: TS },
        { content: "React", img: REACT },
        { content: "TailwindCSS", img: Tailwind },
        { content: "Ionic", img: IONIC },
        { content: "NestJS", img: NestJS },
        { content: "Tauri", img: Tauri },
        { content: "Git", img: Git },
        { content: "Firebase", img: Firebase },
        { content: "Cloudinary", img: Cloudinary },
        { content: "PostgreSQL", img: PostgreSQL },
        { content: "Supabase", img: Supabase },
        { content: "Render", img: Render },
        { content: "Vercel", img: Vercel },
        { content: "Postman", img: Postman },
        { content: "Figma", img: Figma },
    ]

    return (
        <div className="programmingLanguage h-fit w-full bg-secondary-dark flex flex-col gap-10 p-component-padding max-sm:p-component-padding-mobile">
            <div className="programmingLanguage__titleContainer w-fit flex gap-2.5 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-white">
                    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
                </svg>

                <h1 className="programmingLanguage__titleContainer--title text-2xl uppercase font-light text-white tracking-[2px]">
                    Technical Skills
                </h1>
            </div>

            <div className="programmingLanguage__languageList h-fit w-full flex flex-wrap gap-x-[2.5%] gap-y-5">
                {languages.map((lang, index) => {
                    return (

                        <GlareHover
                            key={index}
                            className="group"
                            height="fit-content"
                            width="fit-content"
                            background="transparent"
                            glareColor="#ffffff"
                            glareOpacity={0.3}
                            glareAngle={-30}
                            glareSize={300}
                            transitionDuration={800}
                            playOnce={false}
                        >
                            <span className="w-fit flex items-center gap-2.5 bg-secondary-dark  py-2 px-5 max-sm:px-2.5 rounded-2xl">
                                <img className="h-[40px] max-sm:h-[20px] brightness-50 group-hover:brightness-100" src={lang.img} alt={lang.content} />
                                <p className="text-text-white-darker group-hover:text-white text-[16px] max-sm:text-[14px] font-medium">{lang.content}</p>
                            </span>
                        </GlareHover>
                    )
                })}
            </div>
        </div>
    )
}

export default ProgrammingLanguage