import Logo from "../../shared/Logo";
import RightMenu from "./RightMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 border-b-2 px-10">
      <Logo />
      <RightMenu/>
    </div>
  );
};

export default Navbar;
