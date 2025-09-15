import { Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

import veryImportantDuck from "../../assets/johny_tran_duck.jpg";

interface AccountProps {
  onOpenAccount: () => void;
  loggedIn: Boolean;
}

function Account({ onOpenAccount, loggedIn }: AccountProps) {
  useEffect(() => {
    onOpenAccount;
  }, []);

  return (
    <>
      <Container maxWidth="md" sx={{ paddingTop: 5 }}>
        <Stack
          direction="column"
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>
            {loggedIn ? "You are logged in!" : "Not Logged In/Session Expired"}
          </Typography>
          {loggedIn ? (
            <Grid>
              <img src={veryImportantDuck}></img>
              <Typography>Look at this dude.</Typography>
            </Grid>
          ) : (
            <></>
          )}
        </Stack>
      </Container>
    </>
  );
}

export default Account;
