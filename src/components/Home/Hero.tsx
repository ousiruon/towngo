import { useState } from "react";
import Camp from "./Camp";
import { motion } from "motion/react";

const Hero = () => {
  const [activeInput, setActiveInput] = useState<null | string>(null);
  const [activeBtn, setActiveBtn] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setFormSubmitted(true);
  };
  return (
    <>
      <div className="relative min-h-dvh bg-sec-bg-light dark:bg-bg-dark-sec pt-[120px] flex md:flex-row flex-col-reverse font-display">
        <div className="w-full flex items-center md:items-end justify-center md:justify-end md:absolute md:bottom-0 md:left-0 min-w-full max-w-full">
          <Camp />
        </div>
        <div className="w-[96%] lg:w-[90%] lg:max-w-[900px] flex flex-col gap-10 pb-20 mx-auto">
          <div className="text-2xl md:text-3xl lg:text-4xl text-main-light dark:text-main-dark font-logo w-full md:w-2/4 text-center">
            Reliable Rentals, Ready When You Are.
          </div>
          <div className="w-full flex justify-center z-10">
            <form
              onSubmit={submitForm}
              className="w-full bg-bg-light dark:bg-bg-dark rounded-lg flex flex-col gap-10 justify-center py-10 px-5"
            >
              {/* FullName */}
              <div className="flex gap-2 relative">
                <div className="relative w-full">
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
                    required
                    onFocus={() => setActiveInput("name")}
                    onBlur={() => setActiveInput(null)}
                    type="text"
                    name="name"
                    className="w-full border dark:border-main-dark bg-dark focus:outline-0 px-4 py-5 text-main-light dark:text-main-dark text-xs"
                  />
                </div>
              </div>
              {/* Pick Up Date and Location */}
              <div className="flex flex-col md:flex-row gap-10 md:gap-0 relative">
                <div className="relative w-full">
                  <label
                    htmlFor="pickDate"
                    className="absolute top-[-12px] left-5 text-xs px-2 py-1 font-semibold bg-bg-light dark:bg-bg-dark text-main-light dark:text-main-dark border"
                  >
                    <div className="z-10 relative">Pick Up Date</div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        activeInput === "pickupDate"
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
                    required
                    onFocus={() => setActiveInput("pickupDate")}
                    onBlur={() => setActiveInput(null)}
                    type="date"
                    name="pickDate"
                    className="w-full border md:border-r-0 dark:border-main-dark py-5 bg-dark focus:outline-0 px-4 text-main-light dark:text-main-dark text-xs"
                  />
                </div>
                <div className="relative w-full">
                  <label
                    htmlFor="pickLocation"
                    className="absolute top-[-12px] left-5 text-xs px-2 py-1 font-semibold bg-bg-light dark:bg-bg-dark text-main-light dark:text-main-dark border"
                  >
                    <div className="z-10 relative">Pick Up Location</div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        activeInput === "pickupLocation"
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
                    required
                    placeholder="Postal code"
                    onFocus={() => setActiveInput("pickupLocation")}
                    onBlur={() => setActiveInput(null)}
                    type="text"
                    name="pickLocation"
                    className="w-full border dark:border-main-dark bg-dark focus:outline-0 px-4 py-5 text-main-light dark:text-main-dark text-xs"
                  />
                </div>
              </div>
              {/* Drop Off Date and Location */}
              <div className="flex flex-col md:flex-row gap-10 md:gap-0 relative">
                <div className="relative w-full">
                  <label
                    htmlFor="DropOffDate"
                    className="absolute top-[-12px] left-5 text-xs px-2 py-1 font-semibold bg-bg-light dark:bg-bg-dark text-main-light dark:text-main-dark border"
                  >
                    <div className="z-10 relative">Drop Off Date</div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        activeInput === "dropoffDate"
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
                    required
                    onFocus={() => setActiveInput("dropoffDate")}
                    onBlur={() => setActiveInput(null)}
                    type="date"
                    name="DropOffDate"
                    className="w-full border md:border-r-0 dark:border-main-dark py-5 bg-dark focus:outline-0 px-4 text-main-light dark:text-main-dark text-xs"
                  />
                </div>
                <div className="relative w-full">
                  <label
                    htmlFor="DropOffLocation"
                    className="absolute top-[-12px] left-5 text-xs px-2 py-1 font-semibold bg-bg-light dark:bg-bg-dark text-main-light dark:text-main-dark border"
                  >
                    <div className="z-10 relative">Drop Off Location</div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        activeInput === "dropoffLocation"
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
                    placeholder="Postal code"
                    required
                    onFocus={() => setActiveInput("dropoffLocation")}
                    onBlur={() => setActiveInput(null)}
                    type="text"
                    name="DropOffLocation"
                    className="w-full border dark:border-main-dark bg-dark focus:outline50 px-4 py-5 text-main-light dark:text-main-dark text-xs"
                  />
                </div>
              </div>
              {/* Passengers, Email and Phone Number */}
              <div className="flex flex-col md:flex-row gap-10 md:gap-0 relative">
                <div className="relative w-full md:basis-2/5">
                  <label
                    htmlFor="passengers"
                    className="absolute top-[-12px] left-5 md:left-[50%] md:translate-x-[-50%] text-xs px-2 py-1 font-semibold bg-bg-light dark:bg-bg-dark text-main-light dark:text-main-dark border"
                  >
                    <div className="z-10 relative">Passengers</div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        activeInput === "passengers"
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
                    required
                    onFocus={() => setActiveInput("passengers")}
                    onBlur={() => setActiveInput(null)}
                    type="number"
                    name="passengers"
                    className="w-full border md:border-r-0 dark:border-main-dark py-5 bg-dark focus:outline-0 px-4 text-main-light dark:text-main-dark text-xs"
                  />
                </div>
                <div className="relative w-full">
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
                    required
                    onFocus={() => setActiveInput("email")}
                    onBlur={() => setActiveInput(null)}
                    type="email"
                    name="email"
                    className="w-full border md:border-r-0 dark:border-main-dark py-5 bg-dark focus:outline-0 px-4 text-main-light dark:text-main-dark text-xs"
                  />
                </div>
                <div className="relative w-full">
                  <label
                    htmlFor="phone"
                    className="absolute top-[-12px] left-5 text-xs px-2 py-1 font-semibold bg-bg-light dark:bg-bg-dark text-main-light dark:text-main-dark border"
                  >
                    <div className="z-10 relative">Phone Number</div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        activeInput === "phone"
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
                    required
                    onFocus={() => setActiveInput("phone")}
                    onBlur={() => setActiveInput(null)}
                    type="text"
                    name="phone"
                    className="w-full border dark:border-main-dark bg-dark focus:outline-0 px-4 py-5 text-main-light dark:text-main-dark text-xs"
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="flex gap-2 relative">
                <div className="relative w-full">
                  <motion.button
                    onHoverStart={() => setActiveBtn(true)}
                    onHoverEnd={() => setActiveBtn(false)}
                    className="relative w-full border dark:border-main-dark py-5 bg-dark focus:outline-0 px-4 text-main-light dark:text-main-dark text-base font-semibold cursor-pointer overflow-hidden"
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
                    <div className="relative">Request Options</div>
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
export default Hero;
