import { motion } from "motion/react";
import { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { storeData } from "../../assets/store";
const Team = () => {
  const {team} = storeData();
  const [buttonHover, setButtonHover] = useState<number | null>(null);
  return (
    <div className="relative w-full bg-bg-light dark:bg-bg-dark flex items-center justify-center font-display text-main-light dark:text-main-dark p-20">
      <div className="flex flex-col md:flex-row justify-start max-w-[1400px] w-[96%]">
        <div className="w-full md:w-2/6 flex relative items-start">
          <div className="sticky top-20 left-0 flex flex-col gap-4 sm:gap-6 md:gap-8">
            <div className="text-2xl sm:text-3xl md:text-4xl">Meet our team</div>
            <div className="text-left text-sm md:text-base">
              Unveiling the faces and expertise driving
              <div className="text-tertiary-light dark:text-tertiary-dark font-semibold inline-block m-1">
                TowN'Go
              </div>
              remarkable service
            </div>
            <div>
              <motion.button
                onHoverStart={() => setButtonHover(1)}
                onHoverEnd={() => setButtonHover(null)}
                className="px-4 py-2 rounded-2xl border-1 border-main-light dark:border-main-dark flex items-center gap-1 cursor-pointer relative text-sm overflow-hidden"
              >
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={
                    buttonHover === 1
                      ? {
                          y: 0,
                          transition: {
                            duration: 0.3,
                            type: "spring",
                            stiffness: 20,
                          },
                        }
                      : { y: "-100%" }
                  }
                  className="absolute top-0 left-0 bg-tertiary-light dark:bg-tertiary-dark w-full h-full"
                ></motion.div>
                <a href="#" className="flex items-center z-2 font-semibold">
                  <div>Follow us on Linkedin</div>
                </a>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/6 flex flex-row flex-wrap">
          {team.map((e:any, i:any) => (
            <div key={i} className="sm:max-w-1/2 p-4 flex flex-col gap-4">
              <div className="relative w-full pt-[80%] rounded-2xl overflow-hidden">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={e.image}
                  alt={e.name}
                />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-base md:text-lg">{e.name}</div>
                <div className="opacity-70 text-xs md:text-sm">{e.position}</div>
              </div>
              <div className="text-sm md:text-base">{e.presentation}</div>
              <a href={e.linkedin}>
                <IoLogoLinkedin size={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
