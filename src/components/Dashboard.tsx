import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AuthNavbar from "./AuthNavbar";
import LoginForm from "./Auth/LoginForm";
import RegisterForm from "./Auth/RegisterForm";
import Account from "./Auth/Account";

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

interface DashboardProps {
  onLogin: () => void;
  onLogout: () => void;
  loggedIn: Boolean;
}

function Dashboard({ onLogin, onLogout, loggedIn }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState<string>("Login");
  const [pageNumber, setCurrentPageNumber] = useState<number>(1);
  const pages: Record<string, React.ReactElement> = {
    Account: <Account onOpenAccount={onLogin} loggedIn={loggedIn} />,
    Login: <LoginForm onLogin={onLogin} />,
    Register: <RegisterForm />,
  };

  function handleUpdateAuthPage(projectPage: string, index: number) {
    setCurrentPage(projectPage);
    setCurrentPageNumber(index);
  }

  return (
    <>
      <AuthNavbar
        onUpdatePage={handleUpdateAuthPage}
        onLogout={onLogout}
        pageNumber={pageNumber}
        pages={pages}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={dropIn.hidden}
          animate={dropIn.visible}
          exit={dropIn.exit}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Dashboard;
