"use client";
import React, { useState } from "react";
import Users from "./components/Users";

const Home: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "Ali" },
    { id: 2, username: "Hssain" },
  ]);

  return (
    <div>
      <Users Users={users} />
    </div>
  );
};

export default Home;
