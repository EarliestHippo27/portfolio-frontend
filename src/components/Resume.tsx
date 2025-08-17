import myResume from "../assets/resume.pdf";

function Resume() {
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <iframe
          style={{ width: "600px", height: "800px", minWidth: "300px" }}
          src={myResume}
        ></iframe>
      </div>
    </>
  );
}

export default Resume;
