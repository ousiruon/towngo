import { useScroll, motion, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";

const Choices = () => {
  const choices = [
    {
      title: "Minimalist Mobile: Teardrop Trailer",
      description: ["lightweight", "adventure"], // Keywords: lightweight, adventure
      imageLink: "1.jpg",
    },
    {
      title: "Vintage Vibes: Retro Trailer",
      description: ["charming", "nostalgic"], // Keywords: charming, nostalgic
      imageLink: "2.jpg",
    },
    {
      title: "Classic Camper: Getaway Awaits",
      description: ["reliable", "simple"], // Keywords: reliable, simple
      imageLink: "3.jpg",
    },
    {
      title: "Compact Comfort: Modern Trailer",
      description: ["easy tow", "couples"], // Keywords: easy tow, couples
      imageLink: "4.jpg",
    },
    {
      title: "Sundance: Road Trip Ready",
      description: ["comfort", "family"], // Keywords: comfort, family
      imageLink: "5.jpg",
    },
  ];
  const ref = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(1);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentPosition(latest);
  });
  return (
    <>
      <div
        ref={ref}
        className="relative w-full min-h-dvh bg-bg-light dark:bg-bg-dark flex flex-col justify-start items-center font-display text-main-light dark:text-main-dark pt-20"
      >
        <div className="sticky top-20 left-0 flex flex-col gap-20">
          <div className="text-2xl md:text-3xl lg:text-4xl text-main-light dark:text-main-dark font-logo w-full text-center">
            Adventure Awaits, Rent Today.
          </div>
          <div className="relative articles w-full flex items-center justify-center h-[80dvh] text-main-dark">
            {choices.map((element, index) => {
              return (
                <motion.article
                  key={index}
                  className={`absolute top-[40%] translate-y-[-50%] w-[90%] max-w-[500px] mx-auto rounded-4xl border-1 border-main-light dark:border-main-dark `}
                  animate={
                    index === 4 && currentPosition >= 0.9
                      ? { rotate: "-1deg" }
                      : index === 4 && currentPosition <= 0.8
                      ? { x: "-100vw" }
                      : index === 3 && currentPosition >= 0.7
                      ? { rotate: "-2deg" }
                      : index === 3 && currentPosition <= 0.6
                      ? { x: "-100vw" }
                      : index === 2 && currentPosition >= 0.5
                      ? { rotate: "2deg" }
                      : index === 2 && currentPosition <= 0.4
                      ? { x: "-100vw" }
                      : index === 1 && currentPosition >= 0.3
                      ? { rotate: "-5deg" }
                      : index === 1 && currentPosition <= 0.2
                      ? { x: "-100vw" }
                      : index === 0 && currentPosition >= 0.1
                      ? { rotate: "4deg" }
                      : {}
                  }
                >
                  <div
                    className={`flex flex-col items-start justify-center rounded-4xl p-4 gap-4 ${
                      index === 0
                        ? "bg-hightlight-dark"
                        : index === 1
                        ? "bg-bg-dark-sec"
                        : index === 2
                        ? "bg-hightlight-light"
                        : index === 3
                        ? " bg-main-light"
                        : index === 4
                        ? "bg-tertiary-light"
                        : ""
                    }`}
                  >
                    <div className="rounded-4xl relative pt-[70%] w-full">
                      <img
                        className="absolute top-0 left-0 w-full h-full rounded-2xl"
                        src={element.imageLink}
                        alt={element.title}
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center w-full">
                      <div className="text-2xl">{element.title}</div>
                      <div
                        className={`text-xs flex flex-row gap-2 ${
                          index === 0
                            ? "text-main-light"
                            : index === 1
                            ? "text-bg-dark-sec"
                            : index === 2
                            ? "text-hightlight-light"
                            : index === 3
                            ? "text-hightlight-dark"
                            : index === 4
                            ? "text-tertiary-light"
                            : ""
                        }`}
                      >
                        {element.description.map((element, index) => (
                          <div
                            className="bg-main-dark px-2 rounded-sm"
                            key={index}
                          >
                            {element}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
        <div className={`relative h-[400dvh] w-full`}></div>
      </div>
    </>
  );
};
export default Choices;
