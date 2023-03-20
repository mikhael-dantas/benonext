import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Subscription } from "src/lib/excel/mockedObjects";

interface Props {
  subscription?: Subscription;
  onSubmit: (subscription: Subscription) => void;
}

const SubscriptionForm: React.FC<Props> = ({ subscription, onSubmit }) => {
  const [client_id, setClientId] = useState(subscription?.client_id || 0);
  const [creation_date, setCreationDate] = useState(
    subscription?.creation_date || new Date()
  );
  const [duration_months, setDurationMonths] = useState(
    subscription?.duration_months || 0
  );
  const [expiration_date, setExpirationDate] = useState(
    subscription?.expiration_date || new Date()
  );
  const [status, setStatus] = useState(subscription?.status || "");
  const [obs, setObs] = useState(subscription?.obs || "");

  const handleClientIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientId(parseInt(e.target.value));
  };

  const handleCreationDateChange = (date: Date) => {
    setCreationDate(date);
  };

  const handleDurationMonthsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDurationMonths(parseInt(e.target.value));
  };

  const handleExpirationDateChange = (date: Date) => {
    setExpirationDate(date);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleObsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setObs(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subscriptionData: Subscription = {
      client_id: client_id,
      creation_date,
      duration_months: duration_months,
      expiration_date,
      status,
      obs,
      subscription_id: subscription?.subscription_id || 0,
    };
    onSubmit(subscriptionData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="client_id">
            Client ID
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="client_id"
            type="number"
            placeholder="Client ID"
            value={client_id}
            onChange={handleClientIdChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="creation_date">
            Creation Date
          </label>
          <DatePicker
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={creation_date}
            onChange={handleCreationDateChange}
            dateFormat="dd/MM/yyyy"
            id="creation_date"
            placeholderText="Creation Date"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="duration_months">
            Duration Months
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="duration_months"
            type="number"
            placeholder="Duration Months"
            value={duration_months}
            onChange={handleDurationMonthsChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="expiration_date">
            Expiration Date
          </label>
          <DatePicker
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={expiration_date}
            onChange={handleExpirationDateChange}
            dateFormat="dd/MM/yyyy"
            id="expiration_date"
            placeholderText="Expiration Date"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="status">
            Status
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="status"
            type="text"
            placeholder="Status"
            value={status}
            onChange={handleStatusChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="obs">
            Obs
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="obs"
            placeholder="Observations"
            value={obs}
            onChange={handleObsChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full px-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );


};

export default SubscriptionForm;
