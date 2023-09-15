import axios from "axios";
import React, { useEffect } from "react";

function Dashboard() {
  console.log(localStorage.getItem("token"));
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`https://sahil-goliwar-handson4-server.onrender.com/api/dashboard`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>This is Dashboard</h1>
    </div>
  );
}

export default Dashboard;
