import { useState, useEffect } from "react";

function Dashboard() {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    fetch("/api/auth", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <p>{message}</p>
      </div>
    </>
  );
}

export default Dashboard;
