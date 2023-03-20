import React from 'react';
import { Subscription } from 'src/lib/excel/mockedObjects';
import SubscriptionCard from '../subscriptioncard';

interface SubscriptionListProps {
  subscriptions: Subscription[];
}

const SubscriptionList: React.FC<SubscriptionListProps> = ({ subscriptions }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Subscriptions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subscriptions.map((subscription) => (
          <SubscriptionCard key={subscription.subscription_id} subscription={subscription} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionList;
