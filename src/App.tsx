import React, { useState, useEffect } from "react";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  Grid,
  SvgIcon,
  ThemeProvider,
} from "@mui/material";
import { Apps, Article, HomeFilled, SpaceDashboard } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import backgroundTexture from "./assets/memphis-mini-dark.webp";

import Resume from "./components/Resume";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import ClearNavbar from "./components/ClearNavbar";

declare module "@mui/material/styles" {
  interface Theme {
    ui: {
      background: string;
    };
  }
  interface ThemeOptions {
    ui?: {
      background?: string;
    };
  }
}

const lightTheme = createTheme({
  ui: {
    background: "#FFFFFFFF",
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1d1d1dFF",
      //default: "#2e2e2eff",
    },
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  ui: {
    background: "#1d1d1dFF",
  },
});

const dropIn = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
  },
  exit: {
    x: "100vw",
    opacity: 0,
  },
};

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [pageNumber, setCurrentPageNumber] = useState<number>(0);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userID, setUserID] = useState<number>(-1);
  const pages: Record<string, [React.ReactElement, React.ReactElement]> = {
    Home: [<Home />, <SvgIcon component={HomeFilled}></SvgIcon>],
    Resume: [<Resume />, <SvgIcon component={Article}></SvgIcon>],
    Dashboard: [
      <Dashboard
        onLogin={handleLogin}
        onLogout={handleLogout}
        loggedIn={loggedIn}
      />,
      <SvgIcon component={SpaceDashboard}></SvgIcon>,
    ],
    Projects: [<Projects />, <SvgIcon component={Apps}></SvgIcon>],
  };

  function handlePageUpdate(page: string, index: number) {
    setCurrentPage(page);
    setCurrentPageNumber(index);
  }

  function handleLogin() {
    //  Check auth
    fetch("/api/auth", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((msg) => {
        if ("data" in msg && msg.data !== null && "id" in msg.data) {
          //  Evil overly coupled if statement
          setLoggedIn(true);
          setUserID(msg.data.id);
          //setCurrentPage("Dashboard");
          //setCurrentPageNumber(1);
        } else {
          setLoggedIn(false);
          setUserID(-1);
        }
      });
  }

  function handleLogout() {
    fetch("/api/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setLoggedIn(false);
    setUserID(-1);
    handlePageUpdate("Home", 0);
  }

  function handleDarkModeToggle() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            "::-webkit-scrollbar": {
              display: "none",
            },
            body: {
              transition:
                "background-color 1.0s ease, color 1.0s ease, filter 1.0s ease",
            },
            "body::before": {
              content: "''",
              position: "fixed",
              inset: 0,
              backgroundImage: `url(${backgroundTexture})`,
              zIndex: -1,
              transition: "filter 1.0s ease",
              ...(!darkMode && { filter: "invert(1)" }),
            },
          }}
        />
        <ClearNavbar
          onUpdatePage={handlePageUpdate}
          onLogout={handleLogout}
          onDarkModeToggle={handleDarkModeToggle}
          pages={pages}
          pageNumber={pageNumber}
          loggedIn={loggedIn}
          userID={userID}
          darkMode={darkMode}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={dropIn.hidden}
            animate={dropIn.visible}
            exit={dropIn.exit}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Grid sx={{ minHeight: 1280, mt: 10 }}>
              {pages[currentPage][0]}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
