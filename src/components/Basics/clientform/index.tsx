import React, { useState } from "react";
import { Client } from "src/lib/data-structure";

interface ClientFormProps {
  client?: Client;
  onSubmit: (client: Client) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ client, onSubmit }) => {
  const [clientId, setClientId] = useState(client?.client_id || 0);
  const [name, setName] = useState(client?.name || "");
    const [address, setAddress] = useState(client?.address || "");
    const [client_type, setClient_type] = useState(client?.client_type || "");
    const [contact_2, setContact_2] = useState(client?.contact_2 || "");
    const [contact_whats, setContact_whats] = useState(client?.contact_whats || "");
    const [email, setEmail] = useState(client?.email || "");
    const [obs, setObs] = useState(client?.obs || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      client_id: clientId,
      name,
      address,
      client_type,
      contact_2,
      contact_whats,
      email,
      obs,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="client-form">
      <label>
        Client ID:
        <input type="number" value={clientId} onChange={(e) => setClientId(parseInt(e.target.value))} />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
        <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
        Client Type:
        <input type="text" value={client_type} onChange={(e) => setClient_type(e.target.value)} />
        </label>
        <label>
        Contact 2:
        <input type="text" value={contact_2} onChange={(e) => setContact_2(e.target.value)} />
        </label>
        <label>
        Contact Whats:
        <input type="text" value={contact_whats} onChange={(e) => setContact_whats(e.target.value)} />
        </label>
        <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
        Observations:
        <textarea value={obs} onChange={(e) => setObs(e.target.value)} />
        </label>
            
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClientForm;
