import Link from "next/link";

function Header() {
  return (
    <header className="flex space-x-4 max-w bg-white shadow-md px-3 py-6">
      <div>
        <Link href="/">
          <a>Beranda</a>
        </Link>
      </div>
      <div>
        <Link href="/detail">
          <a>Informasi</a>
        </Link>
      </div>
      <div>
        <Link href="/vaccination">
          <a>Vaksinasi</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
