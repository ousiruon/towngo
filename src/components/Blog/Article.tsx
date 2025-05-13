import { useParams } from "react-router";
import { storeData } from "../../assets/store";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import NewsAbout from "../About/NewsAbout";
// Single Article component for Blog section
const Article = () => {
  //Getting post ID from link
  const { postId } = useParams();
  //Getting "getArticle" function from store
  const { getArticle } = storeData();
  //Set an useState that will be used to verify whether a post ID is correct or not
  const [correctId, setCorrectId] = useState<boolean>(false);
  //Button hover useState
  const [buttonHover, setButtonHover] = useState<number | null>(null);
  //Verify if post ID is correct
  useEffect(() => {
    getArticle(Number(postId)) ? setCorrectId(true) : setCorrectId(false);
  }, []);
  //If post id is correct set a new title for current document based on the article title
  useEffect(() => {
    correctId &&
      (document.title = getArticle(Number(postId))?.title || "TowN'Go");
  }, [correctId]);
  //Form functionalities
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setFormSubmitted(true);
  };
  //Ensures to get back to the top of the page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [postId]);
  return (
    <div className="relative w-full bg-sec-bg-light dark:bg-bg-dark-sec flex flex-col gap-20 items-center justify-center font-display text-main-light dark:text-main-dark px-5 md:px-10 lg:px-20 py-20 md:py-25 lg:py-30">
      {correctId && (
        <>
          <div className="flex flex-col gap-10 md:gap-20 items-center justify-center max-w-[1400px] w-[95%]">
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 font-semibold gap-5 pb-5 md:pb-0 md:gap-10 md:pr-20">
                <div className="flex flex-row gap-2 text-xs">
                  <div>{getArticle(Number(postId))?.date}</div>
                  <div className="opacity-60">
                    {getArticle(Number(postId))?.reading_duration} Read
                  </div>
                </div>
                <div className="text-4xl">
                  {getArticle(Number(postId))?.title}
                </div>
                <div className="font-normal text-sm opacity-70">
                  {getArticle(Number(postId))?.subtitle}
                </div>
              </div>
              <div className="flex relative w-full md:w-1/2 lg:w-2/3 pt-[70%] md:pt-[45%] rounded-lg">
                <img
                  className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
                  src={getArticle(Number(postId))?.image}
                  alt={getArticle(Number(postId))?.title}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full">
              <div className="flex flex-col w-full md:w-4/6 gap-8 md:gap-16">
                {getArticle(Number(postId))?.paragraphs.map(
                  (e: any, i: number) => (
                    <div className="flex flex-col w-full gap-4" key={i}>
                      {e.title && (
                        <div className="text-2xl font-semibold">{e.title}</div>
                      )}
                      <div className="">{e.description}</div>
                    </div>
                  )
                )}
              </div>
              <div className="relative flex flex-col w-full pt-8 md:pt-0 md:w-2/6">
                <div className="sticky top-20 left-0 rounded-2xl border-main-light dark:border-main-dark flex flex-col gap-4 sm:mx-5 p-8 border-1">
                  <div className="font-semibold">Subscribe to newsletter</div>
                  <div className="text-sm text-justify">
                    Subscribe to receive the latest blog posts to your inbox
                    every week.
                  </div>
                  <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={submitForm}
                  >
                    <div className="w-full">
                      <input
                        required
                        className="w-full border-main-light dark:border-main-dark border-1 outline-0 px-2 py-2 rounded-sm text-xs md:text-sm"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="w-full ">
                      <motion.button
                        onHoverStart={() => setButtonHover(null)}
                        onHoverEnd={() => setButtonHover(1)}
                        className="rounded border-1 border-main-light dark:border-main-dark flex items-center justify-center gap-1 cursor-pointer relative text-sm overflow-hidden py-1 w-full"
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
                        <div className="flex items-center gap-1 z-2">
                          <div>Subscribe</div>
                        </div>
                      </motion.button>
                    </div>
                  </form>
                  {formSubmitted && (
                    <div className="text-[9.5px] text-red-950 dark:text-green-300 font-semibold text-center">
                      You've been added to the list. Keep an eye on your inbox!
                    </div>
                  )}
                  <div className="text-[9.5px]">
                    By subscribing you agree to with our Privacy Policy.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewsAbout />
        </>
      )}
    </div>
  );
};
export default Article;
