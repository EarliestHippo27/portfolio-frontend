import LogoutButton from "./LogoutButton";

interface NavbarProps {
  onUpdatePage: (item: string) => void;
  onLogout: () => void;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  loggedIn: Boolean;
  userID: number;
}

function Navbar({
  onUpdatePage,
  onLogout,
  setPageNumber,
  pageNumber,
  loggedIn,
  userID,
}: NavbarProps) {
  const pages = [
    "Home",
    "Dashboard",
    "Resume",
    "Projects",
    "Register",
    "Login",
  ];

  function handleLogout() {
    onUpdatePage("Home");
    setPageNumber(0);
    onLogout();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary z-1 px-5">
        <div className="container-fluid">
          <a className="navbar-brand">Johny Tran</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {pages.map((page, index) => (
                <li className="nav-item" key={page}>
                  <button
                    className={
                      pageNumber === index ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    onClick={() => {
                      onUpdatePage(page);
                      setPageNumber(index);
                    }}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {loggedIn === true ? (
                  <a className="nav-link active">ID: {userID}</a>
                ) : (
                  <a className="nav-link active">Guest</a>
                )}
              </li>
              <li className="nav-item">
                {loggedIn === true ? (
                  <LogoutButton onLogout={handleLogout} />
                ) : (
                  <a className="navbar-brand"></a>
                )}
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn btn-link nav-link px-0 px-lg-2 py-2 dropdown-toggle d-flex align-items-center"
                  id="bd-theme"
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-label="Toggle theme (dark)"
                >
                  <i className="bi bi-moon-stars-fill theme-icon-active"></i>
                  <span className="d-lg-none ms-2" id="bd-theme-text">
                    Toggle theme
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="bd-theme-text"
                >
                  <li>
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center"
                      data-bs-theme-value="light"
                      aria-pressed="false"
                    >
                      <i className="bi bi-sun-fill"></i>
                      Light
                      <svg className="bi ms-auto d-none" aria-hidden="true">
                        <use href="#check2"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center active"
                      data-bs-theme-value="dark"
                      aria-pressed="true"
                    >
                      <i className="bi bi-moon-stars-fill"></i>
                      Dark
                      <svg className="bi ms-auto d-none" aria-hidden="true">
                        <use href="#check2"></use>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center"
                      data-bs-theme-value="auto"
                      aria-pressed="false"
                    >
                      <i className="bi bi-circle-half"></i>
                      Auto
                      <svg className="bi ms-auto d-none" aria-hidden="true">
                        <use href="#check2"></use>
                      </svg>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
