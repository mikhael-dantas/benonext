import React from 'react';
import { Device } from 'src/lib/data-structure';

interface DeviceCardProps {
  device: Device;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="font-semibold text-xl mb-2">{device.platform}</div>
      <div className="text-sm text-gray-600">Device ID: {device.device_id}</div>
      <div className="text-sm text-gray-600">Client ID: {device.client_id}</div>
      <div className="text-sm text-gray-600">MAC ID: {device.mac_id}</div>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          onClick={() => {}}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default DeviceCard;
