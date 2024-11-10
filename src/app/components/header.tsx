import Link from "next/link";

export default function Header() {
  return (
    <main>
      <header className="head-flex">
        <Link className="link" href="/">
          <h1>My Portfolio</h1>
        </Link>

        <nav className="nav-bar">
          <ul>
            <li>
              <Link className="link" href="#about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" href="#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="link" href="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="link" href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
