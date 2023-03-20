import React from 'react';
import { Device } from 'src/lib/excel/mockedObjects';
import DeviceCard from '../devicecard';

interface DeviceListProps {
  devices: Device[];
}

const DeviceList: React.FC<DeviceListProps> = ({ devices }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Devices</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {devices.map((device) => (
          <DeviceCard key={device.device_id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;
