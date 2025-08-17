interface ProjectsNavbarProps {
  onUpdatePage: (projectPage: string, index: number) => void;
  pageNumber: number;
  projects: Record<string, React.ReactElement>;
}

function ProjectsNavbar({
  onUpdatePage,
  pageNumber,
  projects,
}: ProjectsNavbarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarsExample11"
          >
            <ul className="navbar-nav">
              {Object.keys(projects).map((page, index) => (
                <li className="nav-item" key={page}>
                  <button
                    className={
                      pageNumber === index ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    onClick={() => {
                      onUpdatePage(page, index);
                    }}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ProjectsNavbar;
