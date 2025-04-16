import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 items-center px-8 py-5 bg-background shadow-green-500 shadow-2xl w-full border-t-3 border-b-3 border-green-500 justify-center flex flex-row gap-20">
      <div className="text-2xl font-bold text-foreground">
        <Link href="/">Connor W. Floyd</Link>
      </div>
      <nav className="">
        <ul className="flex space-x-8 text-foreground text-xl">
          <li>
            <Link href="/about" rel="noopener noreferrer">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/experience" rel="noopener noreferrer">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/projects" rel="noopener noreferrer">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" rel="noopener noreferrer">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/education" rel="noopener noreferrer">
              Education
            </Link>
          </li>
          <li>
            <Link href="/contact" rel="noopener noreferrer">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
