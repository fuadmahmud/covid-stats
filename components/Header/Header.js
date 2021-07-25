function Header() {
  return (
    <header className="flex space-x-4 max-w bg-white shadow-md p-3">
      <div>
        <a href="/">
          <p>Beranda</p>
        </a>
      </div>
      <div>
        <a href="/detail">
          <p>
            Informasi
          </p>
        </a>
      </div>
      <div>
        <p>
          Vaksinasi
        </p>
      </div>
    </header>
  );
}

export default Header;
