import { useState, type SyntheticEvent } from "react";

function RegisterForm() {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const registration = { email, password };
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registration),
    }).then(() => {
      console.log("Registration Sent");
      setSentRegistration(true);
    });
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [sentRegistration, setSentRegistration] = useState<boolean>(false);

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Register</label>
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
              <strong>Register</strong>
            </button>
          </div>
        </form>
        {sentRegistration === true ? (
          <div className="alert alert-primary" role="alert">
            Registration Sent!
          </div>
        ) : (
          <div className="alert alert-primary" role="alert"></div>
        )}
      </div>
    </>
  );
}

export default RegisterForm;
