import Resume from "./components/Resume";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [pageNumber, setCurrentPageNumber] = useState<number>(0);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userID, setUserID] = useState<number>(-1);
  const pages: Record<string, React.ReactElement> = {
    Home: <Home />,
    Resume: <Resume />,
    Register: <RegisterForm />,
    Login: <LoginForm onLogin={handleLogin} />,
    Dashboard: <Dashboard />,
    Projects: <Projects />,
  };

  function handlePageUpdate(page: string) {
    console.log(page);
    setCurrentPage(page);
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

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <>
      <Navbar
        onUpdatePage={handlePageUpdate}
        onLogout={handleLogout}
        setPageNumber={setCurrentPageNumber}
        pageNumber={pageNumber}
        loggedIn={loggedIn}
        userID={userID}
      />

      <div>{pages[currentPage]}</div>
    </>
  );
}

export default App;
