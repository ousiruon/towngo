import { useState } from "react";
import { newsProps, storeData } from "../../assets/store";
import { motion } from "motion/react";
import { NavLink } from "react-router";
// News section in "About us"
const NewsAbout = () => {
  const { news } = storeData();
  const newsAbout: newsProps[] = news.slice(0, 3);
  const [buttonHover, setButtonHover] = useState<number | null>(null);
  const [activeNew, setActiveNew] = useState<null | number>(null);
  return (
    <>
      <div className="relative w-full bg-bg-light dark:bg-bg-dark flex flex-col gap-20 items-center justify-center font-display text-main-light dark:text-main-dark p-10 sm:p-15 md:p-20">
        <div className="flex flex-col gap-6 items-center justify-center max-w-[1400px] w-[95%]">
          <div className="text-2xl sm:text-3xl md:text-4xl text-center sm:text-left flex flex-col gap-2 font-semibold">
            TowN'go News & Updates
          </div>
          <div className="text-center text-xs sm:text-sm opacity-40 font-medium">
            Stay informed about the latest from TowN'go, including new features,
            partnerships, and exciting developments in the world of camping
            trailer rentals. Explore our recent articles below.
          </div>
        </div>
        <div className="flex flex-row gap-8 max-w-[1400px] w-[95%] flex-wrap md:flex-nowrap">
          {newsAbout.map((e: any, i: number) => (
            <motion.div
              onHoverStart={() => setActiveNew(i)}
              onHoverEnd={() => setActiveNew(null)}
              className="w-full md:w-1/3 cursor-pointer"
              key={i}
            >
              <NavLink to={`../post/${e.id}/${e.title}`} className="w-full">
                <div className="relative pt-[70%] md:pt-[150%] rounded-lg overflow-hidden">
                  <motion.img
                    className={`absolute top-0 left-0 w-full h-full rounded-lg object-cover`}
                    initial={{ scale: 1 }}
                    animate={
                      activeNew === i
                        ? {
                            scale: 1.1,
                            transition: { duration: 0.5, type: "spring" },
                          }
                        : {}
                    }
                    src={e.image}
                    alt={e.title}
                  />
                </div>
              </NavLink>
              <div className="opacity-60 text-sm pt-4">{e.date}</div>
              <NavLink
                to={`../post/${e.id}/${e.title}`}
                className="transition ease-in duration-300 font-semibold hover:underline"
              >
                {e.title}
              </NavLink>
            </motion.div>
          ))}
        </div>
        <div className="max-w-[1400px] w-[95%] flex items-center justify-center">
          <motion.button
            onHoverStart={() => setButtonHover(1)}
            onHoverEnd={() => setButtonHover(null)}
            className="px-4 py-2 rounded-2xl border-1 border-main-light dark:border-main-dark flex items-center gap-1 cursor-pointer relative text-sm overflow-hidden"
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
            <NavLink
              to="../blog"
              className="flex items-center z-2 font-semibold"
            >
              <div>View All</div>
            </NavLink>
          </motion.button>
        </div>
      </div>
    </>
  );
};
export default NewsAbout;
