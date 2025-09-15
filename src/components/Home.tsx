import { Container, Stack } from "@mui/material";

import VeryImportantDuck from "../assets/johny_tran_duck.jpg";
import MyGithub from "./Cards/MyGithub";
import Headshot from "./Cards/Headshot";
import Education from "./Cards/Education";

function Home() {
  return (
    <>
      <Container maxWidth="sm" sx={{ paddingTop: 5 }}>
        <Stack direction="column" spacing={5}>
          <Headshot />
          <MyGithub />
          <Education />
        </Stack>
      </Container>
      <Container sx={{ minHeight: 300 }} />
    </>
  );
}

export default Home;
