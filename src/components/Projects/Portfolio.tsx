import BackendImage from "../../assets/backend.png";

function Portfolio() {
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle w-25">
        <div>
          <i>You're Looking At It</i>
          <br />
          <a href="https://github.com/EarliestHippo27/portfolio-frontend">
            Portfolio Frontend
          </a>
          <h5>Description: </h5>
          <p>
            Tech Stack: React, Vite, HTML, CSS, Bootstrap, JavaScript,
            TypeScript, Nginx
          </p>
          <p className="text-wrap">
            React's component based design allows for fast and simple
            modification and designing of pages. Components allow for ease of
            swapping pages dynamically using Java and TypeScript. The frontend
            is served using Nginx and connected to the backend using a proxy.
          </p>
        </div>
        <br />
        <div>
          <img
            src={BackendImage}
            style={{ width: "100%", height: "auto", display: "block" }}
          ></img>
          <a href="https://github.com/EarliestHippo27/portfolio-backend">
            Portfolio Backend
          </a>
          <h5>Description: </h5>
          <p>Tech Stack: Flask, Python, MariaDB</p>
          <p className="text-wrap">
            Flask is simple to setup and allows me to implement server-sided
            sessions for persistent login and authentification.
          </p>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
