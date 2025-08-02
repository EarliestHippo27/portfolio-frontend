import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Dashboard from "./components/Dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [pageNumber, setCurrentPageNumber] = useState<number>(0);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userID, setUserID] = useState<number>(-1);

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
          //  Evil assuming overly coupled if statement
          setLoggedIn(true);
          setUserID(msg.data.id);
          setCurrentPage("Dashboard");
          setCurrentPageNumber(3);
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
    <div className="main">
      <Navbar
        onUpdatePage={handlePageUpdate}
        onLogout={handleLogout}
        setPageNumber={setCurrentPageNumber}
        pageNumber={pageNumber}
        loggedIn={loggedIn}
        userID={userID}
      />
      <div className="position-absolute top-50 start-50 translate-middle">
        {currentPage === "Home" ? (
          <Home />
        ) : currentPage === "Register" ? (
          <RegisterForm />
        ) : currentPage === "Login" ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}

export default App;
