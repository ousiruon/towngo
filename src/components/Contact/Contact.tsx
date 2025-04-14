import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { IoIosHome, IoIosMailUnread } from "react-icons/io";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setFormSubmitted(true);
  };
  const [activeInput, setActiveInput] = useState<null | string>(null);
  const [activeBtn, setActiveBtn] = useState<boolean>(false);
  return (
    <>
      <div className="relative w-full min-h-dvh bg-sec-bg-light dark:bg-bg-dark-sec flex flex-col justify-center items-center font-display text-main-light dark:text-main-dark px-2 sm:px-5 md:px-10 lg:px-20 py-20 md:py-0 gap-6">
        <div className="flex flex-col md:flex-row gap-10 items-start justify-center max-w-[1400px] w-[95%]">
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <div className="font-semibold text-5xl">Contact Us</div>
            <div className="text-xl">
              Feel free to contact us if you have any questions or need
              assistance. We're happy to help!
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <IoIosMailUnread />
                <div>contact@towngo.com</div>
              </div>
              <div className="flex gap-2 items-center">
                <HiOutlinePhone />
                <div>(555) 123-4567</div>
              </div>
              <div className="flex gap-2 items-center">
                <IoIosHome />
                <div>123 Main Street, Anytown, CA 90210</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center z-10">
            <form
              onSubmit={submitForm}
              className="w-full  rounded-lg flex flex-col gap-10 justify-center px-5"
            >
              {/* FullName */}
              <div className="flex relative w-full">
                <label
                  htmlFor="name"
                  className="absolute top-[-12px] left-5 text-xs px-2 py-1 font-semibold bg-bg-light dark:bg-bg-dark text-main-light dark:text-main-dark border"
                >
                  <div className="z-10 relative">Full Name</div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      activeInput === "name"
                        ? {
                            width: "100%",
                          }
                        : {
                            width: 0,
                          }
                    }
                    className="absolute top-0 left-0 w-full h-full bg-tertiary-light dark:bg-tertiary-dark"
                  ></motion.div>
                </label>
                <input
                  placeholder="Enter your full name..."
                  required
                  onFocus={() => setActiveInput("name")}
                  onBlur={() => setActiveInput(null)}
                  type="text"
                  name="name"
                  className="w-full border dark:border-main-dark h-15 bg-dark focus:outline-0 px-4 text-main-light dark:text-main-dark text-xs"
                />
              </div>
              {/* Email */}
              <div className="flex relative w-full">
                <label
                  htmlFor="email"
                  className="absolute top-[-12px] left-5 text-xs px-2 py-1 font-semibold bg-bg-light dark:bg-bg-dark text-main-light dark:text-main-dark border"
                >
                  <div className="z-10 relative">Email</div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      activeInput === "email"
                        ? {
                            width: "100%",
                          }
                        : {
                            width: 0,
                          }
                    }
                    className="absolute top-0 left-0 w-full h-full bg-tertiary-light dark:bg-tertiary-dark"
                  ></motion.div>
                </label>
                <input
                  placeholder="Enter your email..."
                  required
                  onFocus={() => setActiveInput("email")}
                  onBlur={() => setActiveInput(null)}
                  type="email"
                  name="email"
                  className="w-full border dark:border-main-dark h-15 bg-dark focus:outline-0 px-4 text-main-light dark:text-main-dark text-xs"
                />
              </div>
              {/* Message */}
              <div className="flex relative w-full">
                <label
                  htmlFor="message"
                  className="absolute top-[-12px] left-5 text-xs px-2 py-1 font-semibold bg-bg-light dark:bg-bg-dark text-main-light dark:text-main-dark border"
                >
                  <div className="z-10 relative">Message</div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      activeInput === "message"
                        ? {
                            width: "100%",
                          }
                        : {
                            width: 0,
                          }
                    }
                    className="absolute top-0 left-0 w-full h-full bg-tertiary-light dark:bg-tertiary-dark"
                  ></motion.div>
                </label>
                <textarea
                  placeholder="Type your message..."
                  required
                  rows={10}
                  onFocus={() => setActiveInput("message")}
                  onBlur={() => setActiveInput(null)}
                  name="message"
                  className="w-full border dark:border-main-dark  bg-dark focus:outline-0 p-4 text-main-light dark:text-main-dark text-xs resize-none"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="flex gap-2 relative">
                <div className="relative w-full">
                  <motion.button
                    onHoverStart={() => setActiveBtn(true)}
                    onHoverEnd={() => setActiveBtn(false)}
                    className="relative w-full border dark:border-main-dark h-15 bg-dark focus:outline-0 px-4 text-main-light dark:text-main-dark text-base font-semibold cursor-pointer overflow-hidden"
                  >
                    <motion.div
                      initial={{ top: "-100%" }}
                      animate={
                        activeBtn
                          ? {
                              top: 0,
                            }
                          : {
                              top: "-100%",
                            }
                      }
                      className="absolute top-0 left-0 w-full h-full bg-tertiary-light dark:bg-tertiary-dark"
                    ></motion.div>
                    <div className="relative">Send Message</div>
                  </motion.button>
                </div>
              </div>
              {formSubmitted && (
                <div className="text-red-950 dark:text-green-300 font-semibold text-center text-sm">
                  Thank you for reaching out. We've received your request and
                  will get back to you as soon as possible.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
