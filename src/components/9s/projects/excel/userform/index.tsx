import React, { useState } from "react";
import { User } from "src/lib/excel/mockedObjects";

interface UserFormProps {
  user?: User;
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSubmit }) => {
  const [userId, setUserId] = useState(user?.user_id || 0);
  const [clientId, setClientId] = useState(user?.client_id || 0);
  const [username, setUsername] = useState(user?.username || "");
  const [password, setPassword] = useState(user?.password || "");
  const [obs, setObs] = useState(user?.obs || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      user_id: userId,
      client_id: clientId,
      username,
      password,
      obs,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label>
        User ID:
        <input type="number" value={userId} onChange={(e) => setUserId(parseInt(e.target.value))} />
      </label>
      <label>
        Client ID:
        <input type="number" value={clientId} onChange={(e) => setClientId(parseInt(e.target.value))} />
      </label>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Observations:
        <input type="text" value={obs} onChange={(e) => setObs(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
