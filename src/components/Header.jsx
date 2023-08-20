import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [links, setLinks] = useState(["Features", "Team", "Siginin"]);

  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "40px 0";
      }
    });
  });
  return (
    <header
      ref={headerRef}
      className="pt-10 fixed top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div className="container flex items-center justify-between gap-[30px] sm:gap-0 flex-col md:flex-row ">
        <Link to="/">
          <img src="/src/assets/images/logo.svg" alt="logo-img" />
        </Link>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;