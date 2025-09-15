import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

import umbc from "../../assets/UMBC-primary-logo-RGB-2K.png";

function Education() {
  const theme = useTheme();
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
        <Typography variant="h5">Education</Typography>
        <Grid
          sx={{
            padding: 1,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "gray",
          }}
        >
          <Stack
            direction="column"
            sx={{
              mx: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box component="img" src={umbc} sx={{ width: 450 }} />
          </Stack>
        </Grid>
        <Typography>Bachelor's of Science in Computer Science</Typography>
        <Typography>Graduated May 2025</Typography>
        <Typography>GPA: 3.673</Typography>
      </Grid>
    </>
  );
}

export default Education;
