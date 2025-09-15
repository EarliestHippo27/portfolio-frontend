import {
  Button,
  Container,
  FormControl,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useState, type SyntheticEvent } from "react";

interface LoginFormProps {
  onLogin: () => void;
}

function LoginForm({ onLogin }: LoginFormProps) {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const login = { email, password };
    fetch("/api/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    }).then(() => {
      console.log("Login Sent");
      // Sends login info, if successful user gets a session cookie. Then use that cookie to login with onLogin
      onLogin();
    });
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
                Login
              </Button>
            </Grid>
          </Stack>
        </form>
      </Container>
    </>
  );
}

export default LoginForm;
