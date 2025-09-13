import { Container, Stack } from "@mui/material";
import myResume from "../assets/resume.pdf";

function Resume() {
  return (
    <>
      <Container maxWidth="sm" sx={{ paddingTop: 10 }}>
        <Stack direction="column">
          <a href={myResume}>Resume Link</a>
          <iframe src={myResume} style={{ minHeight: 720 }}></iframe>
        </Stack>
      </Container>
    </>
  );
}

export default Resume;
