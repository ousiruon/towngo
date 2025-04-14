import { motion } from "motion/react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuDot } from "react-icons/lu";

const FAQ = () => {
  const FAQs = [
    {
      question: "What types of trailers do you offer for camping?",
      answer:
        "We offer a variety of trailers, including lightweight teardrop trailers, comfortable travel trailers for families, and classic camper trailers for a nostalgic experience. Each trailer is equipped with essential amenities to make your camping trip enjoyable.",
    },
    {
      question: "What is included in the trailer rental?",
      answer:
        "Our trailer rentals typically include basic kitchen essentials, sleeping accommodations (mattresses or beds), and sometimes bathroom facilities. Specific inclusions vary by trailer, so please check the details of your chosen trailer.",
    },
    {
      question: "What do I need to tow a trailer?",
      answer:
        "You'll need a vehicle with the appropriate towing capacity, a compatible hitch, and a working electrical connection for the trailer lights and brakes. Check your vehicle's owner's manual for towing specifications.",
    },
    {
      question: "What is the rental process?",
      answer:
        "The rental process is simple! You can browse our trailers online, select your desired dates, provide your information, and complete the payment. We'll then confirm your reservation and provide details for pickup.",
    },
    {
      question: "What are the pickup and return times?",
      answer:
        "Pickup and return times vary. Generally, pickup is in the afternoon, and return is in the morning or early afternoon. Specific times will be confirmed when you make your reservation.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy varies depending on how close it is to your reservation date. Please refer to our terms and conditions on the website or contact us directly for details.",
    },
    {
      question: "Are pets allowed in the rental trailers?",
      answer:
        "Our pet policy varies by trailer. Some trailers may be pet-friendly, while others are not. Please check the specific trailer details or contact us for more information.",
    },
    {
      question: "Do you offer delivery and setup of the trailer?",
      answer:
        "Delivery and setup options may be available for an additional fee, depending on your location and availability. Please inquire when making your reservation.",
    },
  ];
  const [buttonHover, setButtonHover] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<null | number>(null);
  return (
    <div className="relative bg-bg-light dark:bg-bg-dark text-main-light dark:text-main-dark py-20">
      <div className="flex flex-col md:flex-row justify-center items-start font-display w-full max-w-[90%] xl:max-w-[1200px] mx-auto">
        <div className="w-full md:w-2/6 md:sticky md:top-20 md:left-0 flex gap-5 flex-col items-center md:items-start pb-8 md:pb-0 font-semibold">
          <div className="text-2xl md:text-3xl lg:text-4xl ">
            FAQs
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl">
            Your Camping Questions Answered.
          </div>
          <motion.button
            onHoverStart={() => setButtonHover(true)}
            onHoverEnd={() => setButtonHover(false)}
            className="mt-4 px-4 py-2 rounded-2xl border-1 border-main-light dark:border-main-dark flex items-center gap-1 cursor-pointer relative text-sm overflow-hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={
                buttonHover
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
            <div className="flex items-center gap-1 z-2 font-semibold">
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
            </div>
          </motion.button>
        </div>
        <div className="w-full md:w-4/6 px-8 py-4 flex gap-8 flex-col">
          {FAQs.map((e, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="text-lg md:text-xl font-semibold flex justify-between cursor-pointer items-center">
                <div
                  onClick={() =>
                    activeFAQ === null
                      ? setActiveFAQ(i)
                      : activeFAQ !== i
                      ? setActiveFAQ(i)
                      : setActiveFAQ(null)
                  }
                  className={`${
                    activeFAQ === i
                      ? "text-tertiary-light dark:text-tertiary-dark"
                      : ""
                  }`}
                >
                  {e.question}
                </div>
                <motion.div
                  initial={{ rotate: "90deg" }}
                  animate={
                    activeFAQ === i ? { rotate: 0 } : { rotate: "90deg" }
                  }
                >
                  <IoIosArrowDown />
                </motion.div>
              </div>
              <motion.div
                initial={{ height: 0, overflow: "hidden" }}
                animate={
                  activeFAQ === i
                    ? { height: "auto" }
                    : { height: 0, overflow: "hidden" }
                }
                className="text-sm"
              >
                {e.answer}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
