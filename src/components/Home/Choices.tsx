import { useScroll, motion, useMotionValueEvent } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import ChoicesCard from "./ChoicesCard";

const Choices = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(1);
  const ref = useRef(null);

  const choices = [
    {
      title: "Minimalist Mobile: Teardrop Trailer",
      description: ["lightweight", "adventure"],
      imageLink: "1.jpg",
    },
    {
      title: "Vintage Vibes: Retro Trailer",
      description: ["charming", "nostalgic"],
      imageLink: "2.jpg",
    },
    {
      title: "Classic Camper: Getaway Awaits",
      description: ["reliable", "simple"],
      imageLink: "3.jpg",
    },
    {
      title: "Compact Comfort: Modern Trailer",
      description: ["easy tow", "couples"],
      imageLink: "4.jpg",
    },
    {
      title: "Sundance: Road Trip Ready",
      description: ["comfort", "family"],
      imageLink: "5.jpg",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentPosition(latest);
  });

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth > 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const getAnimation = (index: number) => {
    if (!isDesktop) return undefined;
    if (index === 4) {
      if (currentPosition >= 0.9) return { rotate: "-1deg" };
      if (currentPosition <= 0.8) return { x: "-100vw" };
    }
    if (index === 3) {
      if (currentPosition >= 0.7) return { rotate: "-2deg" };
      if (currentPosition <= 0.6) return { x: "-100vw" };
    }
    if (index === 2) {
      if (currentPosition >= 0.5) return { rotate: "2deg" };
      if (currentPosition <= 0.4) return { x: "-100vw" };
    }
    if (index === 1) {
      if (currentPosition >= 0.3) return { rotate: "-5deg" };
      if (currentPosition <= 0.2) return { x: "-100vw" };
    }
    if (index === 0 && currentPosition >= 0.1) {
      return { rotate: "4deg" };
    }
    return {};
  };

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (currentIndex < choices.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div
      ref={ref}
      className="relative w-full min-h-dvh bg-bg-light dark:bg-bg-dark flex flex-col justify-start items-center font-display text-main-light dark:text-main-dark pt-20"
    >
      <div className="sticky top-20 left-0 flex flex-col gap-20 w-full">
        <div className="text-2xl md:text-3xl lg:text-4xl text-main-light dark:text-main-dark font-logo w-full text-center">
          Adventure Awaits, Rent Today.
        </div>

        <div className="relative articles w-full flex items-start justify-center h-[80dvh] text-main-dark">
          {/* Mobile Navigation */}
          {!isDesktop && (
            <div className="absolute top-[65%] w-[90%] flex gap-4 md:hidden justify-end z-10">
              <div
                onClick={goToPrevious}
                className={`${currentIndex === 0 ? "opacity-20": "cursor-pointer"} bg-tertiary-light dark:bg-tertiary-dark p-1 rounded`}
              >
                <GrPrevious />
              </div>
              <div
                onClick={goToNext}
                className={`${currentIndex === (choices.length - 1) ? "opacity-20": "cursor-pointer"} bg-tertiary-light dark:bg-tertiary-dark p-1 rounded`}
              >
                <GrNext />
              </div>
            </div>
          )}

          {/* Content */}
          {isDesktop ? (
            choices.map((element, index) => (
              <motion.article
                key={index}
                className="absolute top-[40%] translate-y-[-50%] w-[90%] max-w-[500px] mx-auto rounded-4xl border-1 border-main-light dark:border-main-dark"
                animate={getAnimation(index)}
              >
                <ChoicesCard element={element} index={index} />
              </motion.article>
            ))
          ) : (
            <motion.article
              key={currentIndex}
              className="min-w-[90%] max-w-[90%] w-[90%] md:max-w-[500px] mx-auto rounded-4xl border-1 border-main-light dark:border-main-dark"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <ChoicesCard
                element={choices[currentIndex]}
                index={currentIndex}
              />
            </motion.article>
          )}
        </div>
      </div>

      <div className={`relative h-[100dv] md:h-[400dvh] w-full`}></div>
    </div>
  );
};

export default Choices;
