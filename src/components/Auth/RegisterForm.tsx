import { useState, type SyntheticEvent } from "react";
import Button from "@mui/material/Button";
import { Container, FormControl, Grid, Stack, TextField } from "@mui/material";

function RegisterForm() {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const registration = { email, password };
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registration),
    }).then(() => {
      setSentRegistration(true);
    });
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [sentRegistration, setSentRegistration] = useState<boolean>(false);

  return (
    <>
      <Container maxWidth="sm" sx={{ paddingTop: 5 }}>
        <form onSubmit={handleSubmit}>
          <Stack
            direction="column"
            spacing={1}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {sentRegistration === true ? (
              <div>Registration Sent!</div>
            ) : (
              <div></div>
            )}
            <FormControl sx={{ width: "25ch" }}>
              <TextField
                required
                label="Email"
                placeholder="name@example.com"
                type="email"
                onChange={(newEmail) => setEmail(newEmail.target.value)}
              />
            </FormControl>
            <FormControl sx={{ width: "25ch" }}>
              <TextField
                required
                label="Password"
                placeholder="abc123!@#"
                type="password"
                onChange={(newPassword) =>
                  setPassword(newPassword.target.value)
                }
              />
            </FormControl>
            <Grid sx={{ width: "25ch" }}>
              <Button variant="contained" type="submit">
                Register
              </Button>
            </Grid>
          </Stack>
        </form>
      </Container>
    </>
  );
}

export default RegisterForm;
