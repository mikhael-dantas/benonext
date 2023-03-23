import React, { useState } from "react";
import { App } from "src/lib/data-structure";

interface AppFormProps {
  app?: App;
  onSubmit: (app: App) => void;
}

const AppForm: React.FC<AppFormProps> = ({ app, onSubmit }) => {
  const [appId, setAppId] = useState(app?.app_id || 0);
  const [clientId, setClientId] = useState(app?.client_id || 0);
  const [appName, setAppName] = useState(app?.app_name || "");
  const [server, setServer] = useState(app?.server || "");
  const [screens, setScreens] = useState(app?.screens || 0);
  const [referrals, setReferrals] = useState(app?.referrals || 0);
  const [obs, setObs] = useState(app?.obs || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      app_id: appId,
      client_id: clientId,
      app_name: appName,
      server,
      screens,
      referrals,
      obs,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="app-form">
      <label>
        App ID:
        <input type="number" value={appId} onChange={(e) => setAppId(parseInt(e.target.value))} />
      </label>
      <label>
        Client ID:
        <input type="number" value={clientId} onChange={(e) => setClientId(parseInt(e.target.value))} />
      </label>
      <label>
        App Name:
        <input type="text" value={appName} onChange={(e) => setAppName(e.target.value)} />
      </label>
      <label>
        Server:
        <input type="text" value={server} onChange={(e) => setServer(e.target.value)} />
      </label>
      <label>
        Screens:
        <input type="number" value={screens} onChange={(e) => setScreens(parseInt(e.target.value))} />
      </label>
      <label>
        Referrals:
        <input type="number" value={referrals} onChange={(e) => setReferrals(parseInt(e.target.value))} />
      </label>
      <label>
        Observations:
        <textarea value={obs} onChange={(e) => setObs(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppForm;
