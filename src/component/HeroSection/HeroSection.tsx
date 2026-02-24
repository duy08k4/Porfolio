// Import libraries
import type React from "react"
import TextType from "../../gsap/Animations/TextType/TextType"

// Import images
import illustrationDev from "../../assets/illustrationImage.png"

const HeroSection: React.FC = () => {
    return (
        <div className="heroSection bg-secondary-dark p-component-padding py-[60px] flex gap-10 rounded-tr-[20px] max-sm:flex-col-reverse max-sm:rounded-tr-[0] max-sm:p-component-padding-mobile">
            <div className="heroSection--content flex-2 flex flex-col gap-7.5">
                <h1 className="heroSection__major text-5xl font-medium text-white flex gap-2.5 max-sm:text-3xl max-sm:flex max-sm:flex-col">
                    <TextType
                        text={[ "👋 Hi, I'm Tuong Duy", "You can also call me 👉 WallDy", "💻 I'm a Web Developer 💻"]}
                        typingSpeed={75}
                        pauseDuration={3000}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </h1>

                <p className="heroSection__introduction leading-relaxed text-[14px] tracking-[1px] text-justify text-text-white-darker">
                    I'm currently a student at Ho Chi Minh City University of Agriculture and Forestry, majoring in Information Systems. I wrote my very first lines of code back in 2021, aiming to become a professional full-stack web developer.
                    <br />
                    <br />
                    Honestly, it was a rough beginning. I had no guidance and often felt lost and discouraged. It wasn't until 2023 that I started learning programming formally at university.
                    <br />
                    <br />
                    For each course project, I always chose unique ideas, ones that few people tackled and that aimed to solve real-world problems. Because of that, I often had very little reference material, which challenged me to be more creative and pushed me to level up my technical skills.
                    <br />
                    <br />
                    For me, stepping out of my comfort zone is essential for growth but I believe every risk should be well-managed, not just taken for the sake of being bold.
                </p>

                <div className="heroSection__moreInformation flex flex-wrap gap-5">
                    <span className="h-fit w-fit heroSection__moreInformation--info flex items-center gap-2.5 px-5 py-2 border border-primary-blue rounded-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-primary-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        <p className="text-text-white-darker text-[12px]">Hoc Mon, Ho Chi Minh city</p>
                    </span>

                    <span className="h-fit w-fit heroSection__moreInformation--info flex items-center gap-2.5 px-5 py-2 border border-primary-blue rounded-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-primary-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                        </svg>

                        <p className="text-text-white-darker text-[12px]">Information System</p>
                    </span>

                    <span className="h-fit w-fit heroSection__moreInformation--info flex items-center gap-2.5 px-5 py-2 border border-primary-blue rounded-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-primary-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>


                        <p className="text-text-white-darker text-[12px]">Ho Chi Minh City University of Agriculture and Forestry</p>
                    </span>
                </div>

            </div>

            <div className="heroSection__imageContainer flex-1 flex items-center">
                <img src={illustrationDev} alt="Web dev illustration image" />
            </div>
        </div>
    )
}

export default HeroSection