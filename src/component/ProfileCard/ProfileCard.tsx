// Import libraries
import type React from "react"
import GlareHover from "../../gsap/Animations/GlareHover/GlareHover"

// Import images
import MyAvatar from "../../assets/MyAvatar.jpg"


const ProfileCard: React.FC = () => {
    return (
        <div className="profileCard sticky top-0 w-[350px] min-w-[350px] h-fit bg-secondary-dark p-[20px] flex flex-col gap-5 rounded-tl-[20px] rounded-bl-[20px] max-sm:w-full max-sm:min-w-full max-sm:static max-sm:top-auto max-sm:rounded-tl-[20px] max-sm:rounded-tr-[20px] max-sm:rounded-bl-[0] max-sm:py-[40px]">
            <div className="profileCard__imgContainer flex justify-center">
                <img className="w-full rounded-tl-[20px] max-sm:w-[80%] max-sm:rounded-tl-[20px] max-sm:rounded-tr-[20px]" src={MyAvatar} alt="My avatar" />
            </div>

            <div className="profileCard__nameContainer w-full flex items-center flex-col gap-2.5">
                <h1 className="text-white text-3xl">Tuong Duy</h1>
                <p className="profileCard__nameContainer--status text-[16px] uppercase text-text-white-darker">Past gone, Future on.</p>
                <p className="text-primary-blue text-[14px] flex justify-center items-center gap-2.5">
                    <i className="fas fa-envelope"></i>
                    duytran.290804@gmail.com
                </p>
            </div>

            <div className="profileCard__directionContainer">
                <div className="profileCard__directionContainer__socialBox flex gap-2.5">
                    <GlareHover className="flex-1" height="fit-content" background="transparent" glareColor="#ffffff" glareOpacity={0.3} glareAngle={-30} glareSize={300} transitionDuration={800}>
                        <a className="bg-[#010101] text-white w-full px-[5px] py-[10px] flex  items-center justify-center gap-2.5 rounded-[5px]" href="https://github.com/duy08k4" target="_blank"><i className="fab fa-github-alt"></i>Github</a>
                    </GlareHover>

                    <GlareHover className="flex-1" height="fit-content" background="transparent" glareColor="#ffffff" glareOpacity={0.3} glareAngle={-30} glareSize={300} transitionDuration={800}>
                        <a className="bg-[#010101] text-white w-full px-[5px] py-[10px] flex  items-center justify-center gap-2.5 rounded-[5px]" href="https://www.tiktok.com/@duy08k4" target="_blank"><i className="fab fa-tiktok"></i>Tiktok</a>
                    </GlareHover>
                </div>

                <GlareHover className="mt-2.5" height="fit-content" width="100%" background="transparent" glareColor="#ffffff" glareOpacity={0.3} glareAngle={-30} glareSize={300} transitionDuration={800}>
                    <a className="group w-full flex items-center justify-center gap-2.5 bg-[#010101] text-[#ffa116] py-[10px] rounded-[10px] hover:transition" href="https://leetcode.com/u/dfR5iQk3yV/" target="_blank"><i className="devicon-leetcode-plain colored"></i>LeetCode</a>
                </GlareHover>

                <GlareHover className="mt-2.5" height="fit-content" width="100%" background="transparent" glareColor="#ffffff" glareOpacity={0.3} glareAngle={-30} glareSize={300} transitionDuration={800}>
                    <a className="w-full flex items-center justify-center gap-2.5 bg-primary-dark text-white py-[10px] rounded-[10px] hover:bg-primary-blue hover:transition" href="https://www.topcv.vn/xem-cv/A1xWAFRRUFAGAA8HAAJXAFpXDgIFAVFSBAFUAgeb1c" target="_blank"><i className="far fa-file-pdf"></i>My cv</a>
                </GlareHover>

            </div>
        </div>
    )
}

export default ProfileCard