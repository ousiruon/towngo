import { motion } from "motion/react";
import { useState } from "react";
import { LuDot } from "react-icons/lu";
import Logo from "../Header/Logo";
import {
  FaFacebookF,
  FaInstagram,
  FaRegCopyright,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";
//Footer component
//
const Footer = () => {
  const [buttonHover, setButtonHover] = useState<boolean>(false);
  return (
    <div className="relative w-full bg-sec-bg-light dark:bg-bg-dark-sec flex justify-start items-center font-display text-main-light dark:text-main-dark pt-20 pb-6">
      <div className="flex flex-row w-full">
        <div className="w-2/12 md:w-1/12 px-2 flex flex-col items-center gap-5">
          <FaRegCopyright size={32} />
          <div className="flex flex-col text-2xl text-tertiary-light dark:text-tertiary-dark font-semibold">
            <div>2</div>
            <div>0</div>
            <div>2</div>
            <div>5</div>
          </div>
        </div>
        <div className="md:w-10/12 max-w-[1200px] mx-auto flex flex-col gap-8 items-center">
          <div className="flex flex-row justify-center items-start font-display w-full mx-auto bg-bg-light dark:bg-bg-dark px-4 md:px-9 py-15 rounded-2xl">
            <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between w-full">
              <div className="text-2xl text-center md:text-left">Ready to rent your trailer?</div>
              <motion.button
                onHoverStart={() => setButtonHover(true)}
                onHoverEnd={() => setButtonHover(false)}
                className="p-2 md:p-4 rounded-xl border-1 border-main-light dark:border-main-dark flex items-center gap-1 cursor-pointer relative text-sm overflow-hidden"
              >
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={
                    buttonHover
                      ? {
                          y: 0,
                          transition: {
                            duration: 0.2,
                            type: "spring",
                            stiffness: 20,
                          },
                        }
                      : { y: "-100%" }
                  }
                  className="absolute top-0 left-0 bg-tertiary-light dark:bg-tertiary-dark w-full h-full"
                ></motion.div>
                <NavLink to="contact" className="flex items-center gap-1 z-2 font-semibold" >
                  <div>Contact Us</div>
                  <motion.div
                    initial={{ x: 0 }}
                    animate={
                      buttonHover
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
          <div className="flex gap-2 font-logo">
            Thanks for stopping by <Logo />
          </div>
        </div>
        <div className="w-2/12 md:w-1/12 px-2 flex flex-col items-center gap-8 text-2xl">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
