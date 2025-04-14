import { useRef, useState } from "react";
import Trailer from "./trailer/Trailer";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

const Welcome = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-100vw", "100vw"], {
    clamp: false,
  });
  const [currentPosition, setCurrentPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentPosition(latest * 100);
  });
  return (
    <>
      <div
        ref={ref}
        className="relative w-full flex flex-col items-center justify-center bg-sec-bg-light dark:bg-bg-dark-sec text-main-light dark:text-main-dark"
      >
        <div className="sticky top-0 left-0 h-[100dvh] w-full flex flex-col items-center justify-center font-bold font-logo overflow-hidden">
          {currentPosition <= 60 ? (
            <div className="text-2xl md:text-3xl lg:text-4xl text-main-light dark:text-main-dark font-logo w-full md:w-2/4 text-center">
              Haul It, Anywhere
            </div>
          ) : (
            <div className="text-2xl md:text-3xl lg:text-4xl text-main-light dark:text-main-dark font-logo w-full md:w-2/4 text-center">
              Connecting you with the perfect trailer, right here.
            </div>
          )}
          <motion.div
            style={{ x }}
            className="absolute top-[50%] translate-y-[-50%] flex items-center justify-start w-full "
          >
            <div className="w-[70%]">
              <Trailer />
            </div>
          </motion.div>
        </div>
        <div className="relative h-[150dvh] w-full"></div>
      </div>
    </>
  );
};
export default Welcome;
