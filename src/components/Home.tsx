import { Container, Stack } from "@mui/material";
import VeryImportantDuck from "../assets/johny_tran_duck.jpg";
import headshot from "../assets/headshot.jpg";

function Home() {
  return (
    <>
      <Container maxWidth="sm" sx={{ paddingTop: 20 }}>
        <Stack direction="column">
          <img src={headshot}></img>
          <h3 style={{ textAlign: "center" }}>Look at this dude.</h3>
        </Stack>
      </Container>
    </>
  );
}

export default Home;
