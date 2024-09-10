import React from "react";

type UserProps = {
  user: {
    id: number;
    username: string;
  };
};

const User: React.FC<UserProps> = ({ user }) => {
  const { id, username } = user;
  return (
    <div>
      <h2>{id}</h2>
      <p>{username}</p>
    </div>
  );
};

export default User;
