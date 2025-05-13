import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
interface Step {
  title: string;
  description: string;
}
//Steps section in Home page
const Steps = () => {
  const steps: Step[] = [
    {
      title: "Find Your Perfect Match",
      description:
        "Browse our extensive selection of trailers to find the perfect fit for your needs. Consider size, features, and availability for your desired dates.",
    },
    {
      title: "Plan Your Adventure",
      description:
        "Provide your personal information and select the pickup and return dates for your trailer rental. Double-check for accuracy to avoid any booking issues.",
    },
    {
      title: "Secure Your Getaway",
      description:
        "Review your booking details, including the total cost. Securely complete your reservation by making a payment through our online system. You'll receive a confirmation email shortly after.",
    },
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentPosition(latest * 100);
  });
  return (
    <div className="relative w-full min-h-dvh bg-sec-bg-light dark:bg-bg-dark-sec flex flex-col justify-start items-center font-display text-main-light dark:text-main-dark pt-60">
      <div className="relative w-full flex flex-row lg:max-w-[900px] pb-50 px-4 lg:px-0">
        <div className="relative w-3/12 md:w-2/12">
          <div className="sticky top-20 overflow-hidden">
            <div className="relative text-7xl flex flex-row">
              <div>0</div>
              <motion.div
                className="relative flex flex-col items-center justify-center"
                style={{
                  willChange: "transform",
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  transform: `translate3d(0px, -${
                    currentPosition < 50
                      ? 0
                      : currentPosition >= 50 && currentPosition < 75
                      ? 165
                      : 333
                  }%, 0px)`,
                }}
              >
                <div className="absolute top-0 left-0 text-7xl">1</div>
                <div className="absolute top-30 left-0 text-7xl">2</div>
                <div className="absolute top-60 left-0 text-7xl">3</div>
              </motion.div>
            </div>
          </div>
        </div>
        <div ref={ref} className="w-9/12 md:w-10/12 px-2 md:px-10">
          {steps.map((e, i) => (
            <div key={i} className="w-full flex flex-col gap-10 not-last:pb-50">
              <div className="w-full h-0.5 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-bg-light dark:bg-bg-dark"></div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={
                    i === 0 && currentPosition < 50
                      ? {
                          width: "100%",
                          transition: {
                            duration: 1,
                            type: "spring",
                            stiffness: 20,
                          },
                        }
                      : i === 1 && currentPosition > 50 && currentPosition < 75
                      ? {
                          width: "100%",
                          transition: {
                            duration: 1,
                            type: "spring",
                            stiffness: 20,
                          },
                        }
                      : i === 2 && currentPosition > 75
                      ? {
                          width: "100%",
                          transition: {
                            duration: 1,
                            type: "spring",
                            stiffness: 20,
                          },
                        }
                      : { width: 0 }
                  }
                  className="absolute top-0 left-0 w-0 h-full bg-tertiary-light dark:bg-tertiary-dark"
                ></motion.div>
              </div>
              <div>{`Step ${i + 1}`}</div>
              <div className="text-4xl md:text-6xl overflow-hidden">
                {e.title}
              </div>
              <div className="text-base">{e.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
