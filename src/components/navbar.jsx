import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.svg" alt="Srishti Logo" />
      <ul className="nav-links">
        <li><a href="/#home" className="active">HOME</a></li>
        <li><a href="/problems">PROBLEM STATEMENT</a></li>
        <li><a href="/leaderboard">LEADERBOARD</a></li>
          <li><a href="#">HACKATHON</a></li>
          <li><a href="/#faqs">FAQS</a></li>
        </ul>
        <a href="/#tech-gc" className="nav-cta">JOIN TECH GC</a>
      </nav>)}


export default Navbar