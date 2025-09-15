import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Portfolio from "./Projects/Portfolio";
import NoteNinja from "./Projects/NoteNinja";
import ProjectsNavbar from "./ProjectsNavbar";
import MLModel from "./Projects/MLModel";
import AiChatbot from "./Projects/AiChatbot";
import { Grid } from "@mui/material";

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

function Projects() {
  const projects: Record<string, React.ReactElement> = {
    Portfolio: <Portfolio />,
    NoteNinja: <NoteNinja />,
    ML_Model: <MLModel />,
    Chatbot: <AiChatbot />,
  };
  const [currentPage, setCurrentPage] = useState<string>("Portfolio");
  const [pageNumber, setCurrentPageNumber] = useState<number>(0);

  function updateProjectPage(projectPage: string, index: number) {
    setCurrentPage(projectPage);
    setCurrentPageNumber(index);
  }

  return (
    <>
      <ProjectsNavbar
        onUpdatePage={updateProjectPage}
        pageNumber={pageNumber}
        projects={projects}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={dropIn.hidden}
          animate={dropIn.visible}
          exit={dropIn.exit}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {projects[currentPage]}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Projects;
