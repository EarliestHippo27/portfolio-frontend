import React, { useState, useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Resume from "./components/Resume";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";

const lightTheme = createTheme({});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1d1d1dff",
    },
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [pageNumber, setCurrentPageNumber] = useState<number>(0);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userID, setUserID] = useState<number>(-1);
  const pages: Record<string, React.ReactElement> = {
    Home: <Home />,
    Resume: <Resume />,
    //Register: <RegisterForm />,
    //Login: <LoginForm onLogin={handleLogin} />,
    Dashboard: <Dashboard />,
    Projects: <Projects />,
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
          setCurrentPage("Dashboard");
          setCurrentPageNumber(1);
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
            body: { transition: "background-color 1.0s ease, color 1.0s ease" },
          }}
        />
        <Navbar
          onUpdatePage={handlePageUpdate}
          onLogout={handleLogout}
          onDarkModeToggle={handleDarkModeToggle}
          pages={pages}
          pageNumber={pageNumber}
          loggedIn={loggedIn}
          userID={userID}
          darkMode={darkMode}
        />
        {pages[currentPage]}
      </ThemeProvider>
    </>
  );
}

export default App;
