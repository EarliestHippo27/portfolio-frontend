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
      onLogin();
    });
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Login</label>
            <input
              type="email"
              required
              className="form-control"
              placeholder="name@example.com"
              onChange={(newEmail) => setEmail(newEmail.target.value)}
            />
            <input
              type="password"
              required
              className="form-control"
              placeholder="abc123!@#"
              onChange={(newPassword) => setPassword(newPassword.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              <strong>Login</strong>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
