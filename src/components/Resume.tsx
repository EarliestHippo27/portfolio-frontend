import myResume from "../assets/resume.pdf";

function Resume() {
  return (
    <>
      <iframe
        style={{ width: "600px", height: "800px", minWidth: "300px" }}
        src={myResume}
      ></iframe>
    </>
  );
}

export default Resume;
