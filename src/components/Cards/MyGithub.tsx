import { Grid, Stack, Typography, useTheme } from "@mui/material";
import GitHubCalendar from "react-github-calendar";

function MyGithub() {
  const theme = useTheme();
  const mode = theme.palette.mode as "light" | "dark" | undefined;
  return (
    <>
      <Grid
        sx={{
          padding: 1,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: theme.palette.background.paper,
          transition: "background-color 1s ease",
        }}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography>My Github</Typography>
          <a
            href="https://github.com/EarliestHippo27"
            style={{ color: "gray" }}
          >
            @Github
          </a>
        </Stack>
        <GitHubCalendar username="EarliestHippo27" colorScheme={mode} />
      </Grid>
    </>
  );
}

export default MyGithub;
