import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { storeData } from "../../assets/store";
// Journey section in "About us"
const Journey = () => {
  const { journeyData } = storeData();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.5", "0.5 0"],
  });
  const [currentValue, setCurrentValue] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentValue(latest * 100 <= 80 ? latest * 100 : 80);
  });
  return (
    <>
      <div
        id="journey"
        className="relative w-full bg-sec-bg-light dark:bg-bg-dark-sec flex flex-col items-center font-display text-main-light dark:text-main-dark px-5 md:px-20 py-20"
      >
        <div className="py-20 flex flex-col gap-6 max-w-[1200px] w-[95%]">
          <div className="text-2xl sm:text-3xl md:text-4xl flex flex-col gap-2 font-semibold">
            <div className="text-xs sm:text-sm opacity-40 font-medium">
              Our Journey
            </div>
            The TowN'go Vision, Tailored for You
          </div>
          <div className="text-sm sm:text-base">
            At TowN'go, our vision is to deliver a dependable and personalized
            service to outdoor enthusiasts. Our commitment lies in providing a
            seamless and reliable experience with a personal approach, ensuring
            your journey is unforgettable.
          </div>
        </div>
        <div
          ref={ref}
          className="flex flex-col justify-start max-w-[1200px] w-[95%] relative"
        >
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${currentValue}%` }}
            className="absolute w-[1px] h-0 bg-tertiary-light dark:bg-tertiary-dark top-0 left-[17.25px] sm:left-[18.25px] lg:left-[18.5px] z-2"
          ></motion.div>
          {journeyData.map((e: any, i: any) => (
            <div key={i} className="flex flex-row justify-start">
              <div className="flex items-center justify-center w-[40px] relative">
                {i !== journeyData.length - 1 && (
                  <>
                    <div className="w-[1px] h-full relative">
                      <div className="absolute w-full h-full bg-main-light dark:bg-main-dark opacity-20 top-0 left-0"></div>
                    </div>
                  </>
                )}
                <div
                  className={`ease-in duration-300 absolute top-0 left-[50%] translate-x-[-50%] w-3 h-3 bg-main-light dark:bg-main-dark z-4 rounded-full ${
                    i * 20 <= currentValue && currentValue > 0
                      ? "bg-tertiary-light dark:bg-tertiary-dark"
                      : ""
                  }`}
                ></div>
              </div>
              <div className="flex flex-col gap-20 w-full pb-20">
                <motion.div key={i} className="flex flex-col gap-6">
                  <div className="font-semibold text-lg">
                    <div className="font-medium text-xs opacity-50">
                      {e.date}
                    </div>
                    {e.title}
                  </div>
                  <div>{e.description}</div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Journey;
