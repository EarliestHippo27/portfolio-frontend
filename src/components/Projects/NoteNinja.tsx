import NoteNinjaImage from "../../assets/noteninja.png";

function NoteNinja() {
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle w-25">
        <div>
          <img
            src={NoteNinjaImage}
            style={{ width: "100%", height: "auto", display: "block" }}
          ></img>
          <a href="https://github.com/EarliestHippo27/note-ninja">NoteNinja</a>
          <h5>Description: </h5>
          <p>Tech Stack: Flask, Bootstrap, SQL</p>
          <p className="text-wrap">
            Note taking web app that features registration, login, persistent
            login, CRUD operations on Note Documents, sharing of documents and
            changing passwords using tokens.
          </p>
        </div>
      </div>
    </>
  );
}

export default NoteNinja;
