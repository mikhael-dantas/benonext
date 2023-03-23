import React, { useState } from "react";
import { Device } from "src/lib/data-structure";

interface DeviceFormProps {
  device?: Device;
  onSubmit: (device: Device) => void;
}

const DeviceForm: React.FC<DeviceFormProps> = ({ device, onSubmit }) => {
  const [deviceId, setDeviceId] = useState(device?.device_id || 0);
  const [clientId, setClientId] = useState(device?.client_id || 0);
  const [platform, setPlatform] = useState(device?.platform || "");
  const [macId, setMacId] = useState(device?.mac_id || "");
  const [obs, setObs] = useState(device?.obs || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      device_id: deviceId,
      client_id: clientId,
      platform,
      mac_id: macId,
      obs,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="device-form">
      <label>
        Device ID:
        <input type="number" value={deviceId} onChange={(e) => setDeviceId(parseInt(e.target.value))} />
      </label>
      <label>
        Client ID:
        <input type="number" value={clientId} onChange={(e) => setClientId(parseInt(e.target.value))} />
      </label>
      <label>
        Platform:
        <input type="text" value={platform} onChange={(e) => setPlatform(e.target.value)} />
      </label>
      <label>
        MAC ID:
        <input type="text" value={macId} onChange={(e) => setMacId(e.target.value)} />
      </label>
      <label>
        Observations:
        <input type="text" value={obs} onChange={(e) => setObs(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DeviceForm;
