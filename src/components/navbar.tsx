import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 h-full w-full">
      <Link to={{ pathname: "/" }} className="font-xl font-bold">
        Tech Billing
      </Link>
      <Link to={{ pathname: "/requirements" }}>Requisitos</Link>
      <Link to={{ pathname: "/invoices" }}>Faturas</Link>
    </nav>
  );
};

export default Navbar;
