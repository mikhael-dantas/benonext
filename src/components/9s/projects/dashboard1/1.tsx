// dashboard.tsx
import React, { useState } from "react";

// Mocked data
const mockData = {
    products: [
        {
        id: 1,
        name: "Product 1",
        price: 10.99,
        category_id: 1,
        image_url: "https://example.com/product1.jpg",
        created_at: "2023-03-17",
        user_id: 1,
        },
        {
        id: 2,
        name: "Product 2",
        price: 15.99,
        category_id: 2,
        image_url: "https://example.com/product2.jpg",
        created_at: "2023-03-16",
        user_id: 2,
        },
    ],
    categories: [
        {
        id: 1,
        name: "Category 1",
        description: "Category 1 description",
        image_url: "https://example.com/category1.jpg",
        },
        {
        id: 2,
        name: "Category 2",
        description: "Category 2 description",
        image_url: "https://example.com/category2.jpg",
        },
    ],
};

const Dashboard11 = () => {
    const [activeTab, setActiveTab] = useState("products");
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleItemSelected = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 w-full">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <Tabs activeTab={activeTab} handleTabChange={handleTabChange} />
            <Content
            activeTab={activeTab}
            data={mockData}
            handleItemSelected={handleItemSelected}
            />
            {isModalOpen && (
            <Modal item={selectedItem} closeModal={closeModal} activeTab={activeTab}/>
            )}
        </div>
        </div>
    );
};

const Tabs = ({ activeTab, handleTabChange }) => {
    return (
        <div className="shadow-lg p-4 bg-white">
        <div className="flex space-x-4">
            <button
            onClick={() => handleTabChange("products")}
            className={`${
                activeTab === "products"
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            } px-4 py-2 rounded`}
            >
            Products
            </button>
            <button
            onClick={() => handleTabChange("categories")}
            className={`${
                activeTab === "categories"
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            } px-4 py-2 rounded`}
            >
            Categories
            </button>
        </div>
        </div>
    );
};

const Content = ({ activeTab, data, handleItemSelected }) => {
    const items = data[activeTab];
    return (
    <div className="mt-4 shadow-lg p-4 bg-white">
        <ul className="space-y-2">
            {items.map((item) => (
            <li
                key={item.id}
                className="cursor-pointer p-2 bg-gray-100 rounded hover:bg-gray-200"
                onClick={() => handleItemSelected(item)}
                >
                <div>{item.name}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
            </li>
            ))}
        </ul>
    </div>
);
};

const Modal = ({ item, closeModal, activeTab}) => {
return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            ></div>
    <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >

    </span>
    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <div className="sm:flex sm:items-start">
    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
    <h3 className="text-lg leading-6 font-medium text-gray-900">
    {item.name}
    </h3>
    <div className="mt-2">
    <p className="text-sm text-gray-500">{item.description}</p>
    {activeTab === "products" && (
    <>
    <p className="text-sm text-gray-500">
    Price: {item.price}
    </p>
    <p className="text-sm text-gray-500">
    Category ID: {item.category_id}
    </p>
    <p className="text-sm text-gray-500">
    Image URL: {item.image_url}
    </p>
    <p className="text-sm text-gray-500">
    Created At: {item.created_at}
    </p>
    <p className="text-sm text-gray-500">
    User ID: {item.user_id}
    </p>
    </>
    )}
    {activeTab === "categories" && (
    <p className="text-sm text-gray-500">
    Image URL: {item.image_url}
    </p>
    )}
    </div>
    </div>
    </div>
    </div>
    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
    <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={closeModal}
                >
    Close
    </button>
    </div>
    </div>
    </div>
    </div>
);
};

export default Dashboard11;
