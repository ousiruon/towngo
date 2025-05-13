import Logo from "./Logo";
import Menu from "./Menu";
import SwitchMode from "./SwitchMode";
//Header component
const Header = () => {
  return (
    <header className="fixed z-20 top-0 left-0 flex items-center w-full py-4 px-6 justify-between font-display text-xs dark:bg-bg-dark bg-bg-light text-main-light dark:text-main-dark">
      <div className="flex items-center gap-5">
        <Logo />
        <Menu />
      </div>
      <div>
        <SwitchMode />
      </div>
    </header>
  );
};

export default Header;
