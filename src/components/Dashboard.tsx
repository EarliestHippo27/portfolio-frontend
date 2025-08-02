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
      <p>{message}</p>
    </>
  );
}

export default Dashboard;
