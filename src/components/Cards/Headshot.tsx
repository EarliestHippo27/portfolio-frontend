import headshot from "../../assets/headshot.jpg";

import { Avatar, IconButton, Stack, SvgIcon, Typography } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

function Headshot() {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar src={headshot} sx={{ width: 200, height: 200 }}></Avatar>
        <Stack
          direction="column"
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Johny Tran</Typography>
          <Typography variant="body1">
            Software & Full-Stack Engineer
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <IconButton href="https://www.linkedin.com/in/johnytran05">
            <SvgIcon component={LinkedIn} />
          </IconButton>
          <IconButton href="https://github.com/EarliestHippo27">
            <SvgIcon component={GitHub} />
          </IconButton>
          <IconButton href="mailto:johny.tran2021@gmail.com">
            <SvgIcon component={Email} />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}

export default Headshot;
