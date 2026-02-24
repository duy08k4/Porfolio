// Import libraries
import type React from "react"

const Skill: React.FC = () => {
    return (
        <div className="skill h-fit bg-secondary-dark flex flex-col gap-10 p-component-padding max-sm:p-component-padding-mobile">
            <div className="skill__titleContainer w-fit flex gap-2.5 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-white">
                    <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                </svg>


                <h1 className="skill__titleContainer--title text-2xl uppercase font-light text-white tracking-[2px]">Soft Skills</h1>
            </div>

            <div className="skill__skillList">
                <ul className="flex flex-col gap-5 p-component-content-padding max-sm:p-[0]">
                    <li className="flex items-center gap-2.5 text-text-white-darker max-sm:text-[14px]">️🎯 Demonstrated ability to solve problems efficiently</li>

                    <li className="flex items-center gap-2.5 text-text-white-darker max-sm:text-[14px]">🕵️ Self-motivated and independent worker</li>

                    <li className="flex items-center gap-2.5 text-text-white-darker max-sm:text-[14px]">🤝 Able to work effectively in a team</li>

                    <li className="flex items-center gap-2.5 text-text-white-darker max-sm:text-[14px]">⚡ Quick to learn new technologies</li>
                </ul>
            </div>
        </div>
    )
}

export default Skill