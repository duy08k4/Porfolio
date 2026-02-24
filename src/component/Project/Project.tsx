// Import libraries
import type React from "react"
import GlareHover from "../../gsap/Animations/GlareHover/GlareHover"

// Import Images
// import NECARImg from "../../assets/project/NECAR.png"
import AlertMe from "../../assets/project/AlertMe.png"
// import FocusMe from "../../assets/project/FocusMe.png"
import MListen from "../../assets/project/MListen.png"
import ReporaImg from "../../assets/project/Repora.png"
import WyAImg from "../../assets/project/WyA.png"
import ICOE from "../../assets/project/ICOE.png"

const Project: React.FC = () => {
    const projects = [
        {
            name: "Sinh Vật Biển Việt Nam",
            thumbnail: ICOE,
            date: "October 13, 2025 - December 31, 2025",
            typeProject: "Internship Project - Sole Developer",
            shortDes: "This web application provides free access to marine biology data, allowing users to explore marine species through interactive map layers.",
            techList: ["Ionic React (TypeScript)", "NestJS", "Tauri", "Supabase", "Vercel", "Render", "Cloudinary"],
            gitSource: "",
            demo: "https://alert-me-iota.vercel.app/",
            subContent: ""
        },
        {
            name: "AlertMe",
            thumbnail: AlertMe,
            date: "October 13, 2025 - December 25, 2025",
            typeProject: "Team project (School)",
            shortDes: "AlertMe is a incident reporting system which connects three object. It contains Users - Admin -  Staffs. After the users can create a report with real-time position and one image of a incident. The admin baseds on the postion's report to assign to staff.",
            techList: ["Ionic React (TypeScript)", "NestJS", "Supabase", "Vercel", "Render", "Cloudinary"],
            gitSource: "https://github.com/duy08k4/AlertMe.git",
            demo: "https://alert-me-iota.vercel.app/",
            subContent: ""
        },
        {
            name: "MListen",
            thumbnail: MListen,
            date: "August 3, 2025 - August 14, 2025",
            typeProject: "Personal project",
            shortDes: "MListen is a free app that lets you create English vocabulary collection to improve your listening skills. In this app, you can create a new collection to save the word you want to listen to.",
            techList: ["Tauri Framework", "React (TypeScript)", "Redux Toolkit", "Tailwind CSS", "Free Dictionary API", "Cambridge Dictionary"],
            gitSource: "https://github.com/duy08k4/MListen",
            demo: "https://github.com/duy08k4/MListen/releases/tag/v1.0.0",
            subContent: ""
        },
        {
            name: "Repora",
            thumbnail: ReporaImg,
            thumbnail_error: "Repora image",
            date: "May 29, 2025 - June 19, 2025",
            typeProject: "Team project (School)",
            shortDes: "Repora is a real-time incident reporting system. It allows citizens to create incident reports and send them to the system. Administrators receive these reports and coordinate staff to handle and resolve the issues.",
            techList: ["Ionic React (TypeScript)", "NodeJS", "JWT", "Websocket", "Firebase", "Cloudinary", "Render", "Vercel"],
            gitSource: "https://github.com/duy08k4/Repora_Frontend_Web.git",
            demo: "https://repora-frontend-web.vercel.app/",
            subContent: ""
        },
        {
            name: "WyA",
            thumbnail: WyAImg,
            thumbnail_error: "WyA image",
            date: "March 28, 2025 - May 31, 2025",
            typeProject: "Team project (School)",
            shortDes: "WyA is a social app that combines real-time location sharing with seamless chatting, inspired by apps like Zenly. Built with Firebase for robust data handling and WebSocket for ultra-fast, real-time communication.",
            techList: ["Ionic React (TypeScript)", "NodeJS", "JWT", "Websocket", "Firebase", "Cloudinary", "Render", "Vercel"],
            gitSource: "https://github.com/duy08k4/WyA_Introduction.git",
            demo: "https://wy-a-introduction.vercel.app/",
            subContent: ""
        }
    ]

    return (
        <div className="projects h-fit w-full bg-secondary-dark flex flex-col gap-10 p-component-padding rounded-br-[20px] mb-2.5 max-sm:rounded-bl-[20px] max-sm:p-component-padding-mobile">
            <div className="projects__titleContainer w-fit flex gap-2.5 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-white">
                    <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                </svg>

                <h1 className="projects__titleContainer--title text-2xl uppercase font-light text-white tracking-[2px]">Projects <span className="max-sm:hidden">Showcase</span></h1>
            </div>

            <div className="projects__projectsList h-fit w-full flex flex-row justify-between gap-5 flex-wrap">
                {projects.map((project, index) => {
                    return (
                        <GlareHover key={index}
                            className="project min-h-[400px] w-[48%] max-w-[48%] flex flex-col gap-5 border-[0.5px] border-primary-dark p-5 rounded-[10px] hover:shadow-[0_0_5px_1px_#808080] hover:transition-all
                            max-sm:w-full max-sm:max-w-full
                            "
                            width="100%"
                            height="auto"
                            background="transparent"
                            glareColor="#ffffff"
                            glareOpacity={0.3}
                            glareAngle={-30}
                            glareSize={300}
                            transitionDuration={800}
                            playOnce={false}
                        >
                            <div className="project__imageContainer h-[200px] flex justify-center items-center max-sm:h-[150px]">
                                <img className="h-full w-auto" src={project.thumbnail} alt={project.thumbnail_error} />
                            </div>

                            <div className="project__infoContainer w-full h-auto flex flex-1 flex-col gap-2 shrink">
                                <h3 className="project__infoContainer--name text-white text-3xl font-medium max-sm:text-2xl">{project.name}</h3>
                                <p className="project__infoContainer--time h-fit w-full text-[#FF7070] text-[16px] font-medium max-sm:text-[10px]">{project.typeProject}</p>
                                <p className="project__infoContainer--time h-fit w-full text-text-white-darker text-[12px] font-medium italic max-sm:text-[10px]">{project.date}</p>
                                <p className="project__infoContainer--shortDescription mt-5 font-light text-text-white-darker text-justify max-sm:text-[14px]">{project.shortDes}</p>
                            </div>

                            <div className="project__techContainer w-full flex items-center gap-5 overflow-auto scrollbar-custom py-2.5">
                                <div className="flex w-max items-center gap-5">
                                    {project.techList.map((tech, techIndex) => (
                                        <p
                                            key={techIndex}
                                            className="project__techContainer--tech shrink-0 text-sm px-4 py-1 bg-primary-dark text-text-white-darker border border-text-white-darker rounded-[10px] whitespace-nowrap max-sm:text-[10px]"
                                        >
                                            {tech}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="project__directionContainer w-full flex gap-2.5">
                                <a className="text-primary-blue p-2.5 w-[40%] flex items-center justify-center gap-2 rounded-tl-2xl rounded-bl-2xl max-sm:w-[20%]" target="_blank" href={project.demo ? project.demo : ""}><i className={`fas fa-globe text-[16px] ${project.demo ? "text-primary-blue" : "text-[#FF7070]"}`}></i> <span className={`${project.demo ? "text-primary-blue" : "text-[#FF7070]"} text-[12px] max-sm:hidden`}>{project.demo ? `Demo ${project.subContent}` : `Not working ${project.subContent}`}</span></a>
                                <a className={`text-white flex-1 ${project.gitSource ? "bg-primary-blue" : "bg-[#FF7070]"} flex justify-center items-center gap-2`} target="_blank" href={project.gitSource ? project.gitSource : ""}><i className="fab fa-github-alt text-[16px] "></i><span className="text-[12px]">{project.gitSource ? "View source" : "No source available"}</span></a>
                            </div>
                        </GlareHover>
                    )
                })}

            </div>
        </div>
    )
}

export default Project