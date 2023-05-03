import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Herosection from "./Herosection";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <>
    <header>
      <div className="header">
        <Navbar/>
        <Navbar2/>
        <Hamburger/>
      </div>
      <Herosection/>
    </header>
    </>
  );
}

export default Header;
