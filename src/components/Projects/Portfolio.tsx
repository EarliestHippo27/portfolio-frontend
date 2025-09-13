import { Stack } from "@mui/material";
import BackendImage from "../../assets/backend.png";

function Portfolio() {
  return (
    <>
      <Stack
        direction="column"
        spacing={5}
        sx={{
          paddingTop: 5,
          px: { xs: 10, md: 60 },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          <p>
            React's component based design allows for fast and simple
            modification and designing of pages. Components allow for ease of
            swapping pages dynamically using Java and TypeScript. The frontend
            is served using Nginx and connected to the backend using a proxy.
          </p>
        </div>
        <div>
          <img
            src={BackendImage}
            style={{
              width: "80%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
          <a href="https://github.com/EarliestHippo27/portfolio-backend">
            Portfolio Backend
          </a>
          <h5>Description: </h5>
          <p>Tech Stack: Flask, Python, MariaDB</p>
          <p>
            Flask is simple to setup and allows me to implement server-sided
            sessions for persistent login and authentification.
          </p>
        </div>
      </Stack>
    </>
  );
}

export default Portfolio;
