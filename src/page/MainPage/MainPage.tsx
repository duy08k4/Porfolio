// Import libraries
import type React from "react";

// Import component
import ProfileCard from "../../component/ProfileCard/ProfileCard";
import HeroSection from "../../component/HeroSection/HeroSection";
import Skill from "../../component/Skill/Skill";
import ProgrammingLanguage from "../../component/ProgrammingLanguage/ProgrammingLanguage";
import Project from "../../component/Project/Project";

const MainPage: React.FC = () => {
    return (
        <div className="mainPage h-fit w-[80%] flex justify-center gap-5 max-sm:w-full max-sm:flex-col max-sm:px-5 ">
            <ProfileCard />

            <div className="h-fit flex-1 flex flex-col gap-5">
                <HeroSection />
                <Skill />
                <ProgrammingLanguage />
                <Project />
                <div className="w-full flex justify-center-safe items-center-safe pb-5">
                    <p className="text-white text-[12px] font-light tracking-[2px]">© 2025 dDev. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default MainPage