import { motion } from "motion/react";
import { storeData } from "../../assets/store";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
const Blog = () => {
  const { news } = storeData();
  const [activeNew, setActiveNew] = useState<null | number>(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="relative w-full bg-bg-light dark:bg-bg-dark flex flex-col gap-20 items-center justify-center font-display text-main-light dark:text-main-dark p-10 sm:p-15 md:p-20">
        <div className="flex flex-col gap-6 items-start justify-center max-w-[1400px] w-[95%] py-15 md:py-30">
          <div className="text-4xl font-semibold flex flex-row">
            What's New at
            <div className="flex font-logo font-bold text-3xl ml-2 mr-1 text-tertiary-light dark:text-tertiary-dark">
              TowN'Go
            </div>
            ?
          </div>
          <div className="text-left">
            Stay up-to-date with all the latest news and updates about TowN'go
            and the camping trailer rental industry. Discover new features,
            partnerships, and exciting developments for your outdoor adventures.
          </div>
        </div>
        <div className="flex flex-row flex-wrap max-w-[1400px] w-[95%]">
          {news.map((e: any, i: number) => (
            <motion.div
              onHoverStart={() => setActiveNew(i)}
              onHoverEnd={() => setActiveNew(null)}
              className="flex flex-row gap-8 max-w-[1400px] mx-auto cursor-pointer px-2 md:px-4 pb-8 w-full md:w-1/2 lg:w-1/3"
              key={i}
            >
              <NavLink className="w-full" to={`../post/${e.id}/${e.title}`}>
                <div className="relative pt-[70%] md:pt-[150%] w-full rounded-lg overflow-hidden">
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
                <div className="opacity-60 text-sm pt-4">{e.date}</div>
                <motion.div
                  animate={
                    activeNew === i
                      ? {
                          textDecoration: "underline",
                          transition: { duration: 0.5, type: "spring" },
                        }
                      : { textDecoration: "none" }
                  }
                  className="font-semibold"
                >
                  {e.title}
                </motion.div>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Blog;
