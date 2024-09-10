import React from "react";
import User from "./User";

type UsersProps = {
  Users: {
    id: number;
    username: string;
  }[];
};

const Users: React.FC<UsersProps> = ({ Users }) => {
  return (
    <div>
      {Users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
