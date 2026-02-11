import { logo, usersIcon } from "../../data";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-8 items-center gap-2 ">
      <div className="flex items-center">
        <img src={logo} alt="DigiSpace" className="h-10" />
      </div>


      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
          <img
            src={usersIcon}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
