import React from 'react';
import { Subscription } from 'src/lib/excel/mockedObjects';

interface SubscriptionCardProps {
  subscription: Subscription;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ subscription }) => {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="font-semibold text-xl mb-2">
        Subscription ID: {subscription.subscription_id}
      </div>
      <div className="text-sm text-gray-600">Client ID: {subscription.client_id}</div>
      <div className="text-sm text-gray-600">
        Creation Date: {subscription.creation_date.toLocaleDateString()}
      </div>
      <div className="text-sm text-gray-600">
        Duration: {subscription.duration_months} months
      </div>
      <div className="text-sm text-gray-600">
        Expiration Date: {subscription.expiration_date.toLocaleDateString()}
      </div>
      <div className="text-sm text-gray-600">Status: {subscription.status}</div>
      <div className="text-sm text-gray-600">Notes: {subscription.obs}</div>
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

export default SubscriptionCard;
