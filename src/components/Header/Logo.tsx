import { motion } from "motion/react";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <NavLink to="/" className="flex font-logo font-bold text-base text-tertiary-light dark:text-tertiary-dark">
      TowN
      <motion.div>
        <BiSolidQuoteSingleRight size={10} />
      </motion.div>
      Go
    </NavLink>
  );
};

export default Logo;
