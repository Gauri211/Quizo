import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="p-4 bg-black text-white flex justify-between">
      <h1 className="text-2xl font-bold pl-4">Quizo</h1>
      <Link to="/dashboard">
        <Button variant="outline" className="text-black hover:bg-gray-200 cursor-pointer">Dashboard</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
