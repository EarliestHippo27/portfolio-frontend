import React, { useState } from "react";
import Portfolio from "./Projects/Portfolio";
import NoteNinja from "./Projects/NoteNinja";
import ProjectsNavbar from "./ProjectsNavbar";
import MLModel from "./Projects/MLModel";

function Projects() {
  const projects: Record<string, React.ReactElement> = {
    Portfolio: <Portfolio />,
    NoteNinja: <NoteNinja />,
    ML_Model: <MLModel />,
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
      {projects[currentPage]}
    </>
  );
}

export default Projects;
