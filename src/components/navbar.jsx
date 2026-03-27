import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <img src="/logo.svg" alt="Srishti Logo" />
      <ul className="nav-links">
        <li><a href="/#home" className="active">HOME</a></li>
        <li><a href="/problems">PROBLEM STATEMENT</a></li>
        <li><a href="/leaderboard">LEADERBOARD</a></li>
        <li><a href="#">HACKATHON</a></li>
        <li className="nav-more" ref={dropdownRef}>
          <button
            className={`nav-more-btn${moreOpen ? " open" : ""}`}
            onClick={() => setMoreOpen((v) => !v)}
            aria-expanded={moreOpen}
            aria-haspopup="true"
          >
            MORE
            <svg
              className="nav-more-chevron"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {moreOpen && (
            <ul className="nav-dropdown" role="menu">
              <li role="none">
                <a href="/#faqs" className="nav-dropdown-item" role="menuitem" onClick={() => setMoreOpen(false)}>
                  <span className="nav-dropdown-icon">◈</span>
                  FAQS
                </a>
              </li>
              <li role="none">
                <Link
                  to="/contact"
                  className="nav-dropdown-item"
                  role="menuitem"
                  onClick={() => { setMoreOpen(false); setTimeout(() => window.scrollTo(0, 0), 0); }}
                >
                  <span className="nav-dropdown-icon">◈</span>
                  CONTACT US
                </Link>
              </li>
              <li role="none">
                <a href="#" className="nav-dropdown-item" role="menuitem" onClick={() => setMoreOpen(false)}>
                  <span className="nav-dropdown-icon">◈</span>
                  TEAM
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <a href="/#tech-gc" className="nav-cta">JOIN TECH GC</a>
    </nav>
  );
}

export default Navbar;