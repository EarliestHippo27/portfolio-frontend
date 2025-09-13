import { Stack } from "@mui/material";
import NoteNinjaImage from "../../assets/noteninja.png";

function NoteNinja() {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          paddingTop: 5,
          px: { xs: 10, md: 60 },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <img
            src={NoteNinjaImage}
            style={{
              width: "80%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
          <a href="https://github.com/EarliestHippo27/note-ninja">NoteNinja</a>
          <h5>Description: </h5>
          <p>Tech Stack: Flask, Bootstrap, SQL</p>
          <p>
            Note taking web app that features registration, login, persistent
            login, CRUD operations on Note Documents, sharing of documents and
            changing passwords using tokens.
          </p>
        </div>
      </Stack>
    </>
  );
}

export default NoteNinja;
