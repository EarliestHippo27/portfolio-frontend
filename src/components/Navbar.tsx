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
  const pages = ["Home", "Register", "Login", "Dashboard"];

  function handleLogout() {
    onUpdatePage("Home");
    setPageNumber(0);
    onLogout();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                  <a className="navbar-brand">ID: {userID}</a>
                ) : (
                  <a className="navbar-brand">Guest</a>
                )}
              </li>
              <li className="nav-item">
                {loggedIn === true ? (
                  <LogoutButton onLogout={handleLogout} />
                ) : (
                  <a className="navbar-brand"></a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
