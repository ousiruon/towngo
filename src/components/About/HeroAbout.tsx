import { motion } from "motion/react";
import { useState } from "react";
import { LuDot } from "react-icons/lu";
import { NavLink } from "react-router";

const HeroAbout = () => {
  const [buttonHover, setButtonHover] = useState<number | null>(null);
  return (
    <div className="relative w-full min-h-dvh bg-sec-bg-light dark:bg-bg-dark-sec flex flex-col justify-center items-start font-display text-main-light dark:text-main-dark px-20 gap-6">
      <div className="flex flex-col sm:flex-row text-2xl sm:text-3xl md:text-4xl font-logo w-full lg:max-w-5/6 xl:max-w-[1000px] 2xl:max-w-[1200px] justify-center md:justify-start">
        <div className="mr-2 text-tertiary-light dark:text-tertiary-dark font-semibold">
          TowN'Go
        </div>
        <div className="mr-2 text-tertiary-light dark:text-tertiary-dark font-semibold hidden sm:block">
          -
        </div>
        Where the Road Meets Your Living Room.
      </div>
      <div className="w-full lg:max-w-5/6 xl:max-w-[1000px] 2xl:max-w-[1200px] text-base sm:text-xl text-justify">
        Imagine the comfort of home, seamlessly integrated with the call of the
        wild. TowN'go provides thoughtfully equipped camping trailers, your
        mobile oasis for crafting unforgettable outdoor memories, without the
        hassle of ownership.
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <motion.button
          className="mt-4 px-4 py-2 rounded-2xl border-1 border-main-light dark:border-main-dark flex items-center gap-1 cursor-pointer relative text-xs sm:text-sm bg-tertiary-light dark:bg-tertiary-dark"
        >
          <a href="#journey" className="flex items-center gap-1 z-2 font-semibold ">
            <div>Our Journey</div>
          </a>
        </motion.button>
        <motion.button
          onHoverStart={() => setButtonHover(1)}
          onHoverEnd={() => setButtonHover(null)}
          className="mt-4 px-4 py-2 rounded-2xl border-1 border-main-light dark:border-main-dark flex items-center gap-1 cursor-pointer relative text-xs sm:text-sm overflow-hidden"
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
          <NavLink to="../contact" className="flex items-center gap-1 z-2 font-semibold">
            <div>Contact Us</div>
            <motion.div
              initial={{ x: 0 }}
              animate={
                buttonHover === 1
                  ? {
                      x: "135%",
                      transition: {
                        delay: 0.5,
                      },
                    }
                  : { x: 0 }
              }
              className="relative h-full flex items-start justify-center"
            >
              <LuDot />
            </motion.div>
            <div className="border-1 rounded-full w-4 h-4"></div>
          </NavLink>
        </motion.button>
      </div>
    </div>
  );
};

export default HeroAbout;
