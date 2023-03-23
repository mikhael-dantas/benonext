  // dashboard.tsx
function randomUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

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
    images: [
        {
            id: 1,
            name: "Image 1",
            description: "Image 1 description",
            tags: ["tag1", "tag2"],
            user_id: "1",
            image_url:
            "https://th.bing.com/th/id/OIP.n_d9CDBfDDdLFMXpkKO7rQHaKO?pid=ImgDet&rs=1",
        },
        {
            id: 2,
            name: "Image 2",
            description: "Image 2 description",
            tags: ["tag3", "tag4"],
            user_id: "2",
            image_url:
            "https://th.bing.com/th/id/OIP.n_d9CDBfDDdLFMXpkKO7rQHaKO?pid=ImgDet&rs=1",
        },
    ]
}
const generateProducts = (quantity) => {
    const products = [];
    for (let i = 0; i < quantity; i++) {
        products.push({
            id: i + 1,
            name: `Product ${randomUUID()}`,
            price: parseFloat((Math.random() * 100).toFixed(2)),
            category_id: Math.floor(Math.random() * 10) + 1,
            image_url: `https://example.com/product${i + 1}.jpg`,
            created_at: "2023-03-17",
            user_id: i + 1,
        });
    }
    return products;
};
const generateCategories = (quantity) => {
    const categories = [];
    for (let i = 0; i < quantity; i++) {
        categories.push({
            id: i + 1,
            name: `Category ${randomUUID()}`,
            description: `Category ${i + 1} description`,
            image_url: `https://example.com/category${i + 1}.jpg`,
        });
    }
    return categories;
};
const generateImages = (quantity) => {
    const images = [];
    for (let i = 0; i < quantity; i++) {
        images.push({
            id: i + 1,
            name: `Image ${randomUUID()}`,
            description: `Image ${i + 1} description`,
            tags: Array.from({ length: 3 }, () => `tag${randomUUID()}`),
            user_id: `${i + 1}`,
            image_url: "https://th.bing.com/th/id/OIP.n_d9CDBfDDdLFMXpkKO7rQHaKO?pid=ImgDet&rs=1",
        });
    }
    return images;
};
import React, { useEffect, useState } from "react";

export const Dashboard9s13 = () => {
    const [activeTab, setActiveTab] = useState("products");
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [isEditImageModalOpen, setIsEditImageModalOpen] = useState(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleItemSelected = (item) => {
        setSelectedItem(item);
        if (activeTab === "images") {
            setIsImageModalOpen(true);
            return
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setIsModalOpen(false);
    };

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const openEditImageModal = () => {
        setIsEditImageModalOpen(true);
    };

    const closeEditImageModal = () => {
        setIsEditImageModalOpen(false);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
    };


    const submitUpdate = (updatedProduct) => {
        const updatedProducts = mockData.products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        mockData.products = updatedProducts;
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
            <Modal
                item={selectedItem}
                closeModal={closeModal}
                activeTab={activeTab}
                openEditModal={openEditModal}
                />
            )}
            {isImageModalOpen && (
            <ImageModal item={selectedItem} closeModal={closeImageModal} 
                openEditModal={openEditImageModal}
            />
            )}
            {isEditImageModalOpen && (
            <EditImageModal item={selectedItem} closeModal={closeEditImageModal} />
            )}
            {isEditModalOpen && (
                <EditProductModal
                product={selectedItem}
                closeModal={closeEditModal}
                submitUpdate={submitUpdate}
                />
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
            <button
                onClick={() => handleTabChange("images")}
                className={`${
                    activeTab === "images"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                } px-4 py-2 rounded`}
            >
                Images
            </button>
        </div>
        </div>
    );
};

const Content = ({ activeTab, data, handleItemSelected }) => {
    const items = data[activeTab];
    if (activeTab === "images") {
        return (
        <div className="mt-4 shadow-lg p-4 bg-white">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
                <li
                key={item.id}
                className="cursor-pointer p-2 bg-gray-100 rounded hover:bg-gray-200"
                onClick={() => handleItemSelected(item)}
                >
                <div
                    className="bg-cover bg-center h-32 w-full rounded"
                    style={{ backgroundImage: `url(${item.image_url})` }}
                />
                <div className="mt-2">{item.name}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
                </li>
            ))}
            </ul>
        </div>
        );
    }
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
const Modal = ({ item, closeModal, activeTab, openEditModal }) => {
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
    {activeTab === "products" && (
        <button
        type="button"
        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-400 text-base font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 sm:ml-3 sm:w-auto sm:text-sm mr-2"
        onClick={openEditModal}
        >
        Edit
        </button>
    )}
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

const EditProductModal = ({ product, closeModal, submitUpdate }) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [category_id, setCategoryId] = useState(product.category_id);
    const [image_url, setImageUrl] = useState(product.image_url);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {
            ...product,
            name,
            price,
            category_id,
            image_url,
        };
        submitUpdate(updatedProduct);
        closeModal();
    };

    return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
    {/* ... */}
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <form onSubmit={handleSubmit}>
            <div className="sm:flex sm:items-start">
            {/* ... */}
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                {/* ... */}
                <div className="mt-2">
                {/* ... */}
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5"
                />
                {/* other input fields */}
                <input 
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5"
                />
                <input
                    type="text"
                    id="category_id"
                    value={category_id}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5"
                />
                <input
                    type="text"
                    id="image_url"
                    value={image_url}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5"
                />
                
                </div>
            </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
                Save
                </button>
            <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-200 text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mr-3 sm:w-auto sm:text-sm"
            onClick={closeModal}
            >
            Cancel
            </button>
            </div>
        </form>
    </div>
    </div>
)}

// ImageModal component
const ImageModal = ({ item, closeModal, openEditModal }) => {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        {/* ... (similar structure as previous Modal component) */}
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div
              className="bg-cover bg-center h-64 w-full rounded sm:h-48 sm:w-48"
              style={{ backgroundImage: `url(${item.image_url})` }}
            />
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
<h3 className="text-lg leading-6 font-medium text-gray-900">
{item.name}
</h3>
<div className="mt-2">
<p className="text-sm text-gray-500">{item.description}</p>
<p className="text-sm text-gray-500">Tags: {item.tags.join(', ')}</p>
<p className="text-sm text-gray-500">User ID: {item.user_id}</p>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
<button
       type="button"
       className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
       onClick={openEditModal}
     >
Edit
</button>
<button
       type="button"
       className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
       onClick={closeModal}
     >
Close
</button>
</div>
</div>
);
};

const EditImageModal = ({ item, closeModal }) => {
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [tags, setTags] = useState(item.tags.join(", "));
  
    const handleSubmit = () => {
      // Update the mocked data with new values
      // In a real application, this would be an API call to update the data on the server
      item.name = name;
      item.description = description;
      item.tags = tags.split(",").map((tag) => tag.trim());
      closeModal();
    };
  
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        {/* ... (similar structure as previous ImageModal component) */}
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            {/* ... (image display and item info from previous ImageModal) */}
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
<h3 className="text-lg leading-6 font-medium text-gray-900">
Edit Image
</h3>
<div className="mt-2">
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
placeholder="Image Name"
/>
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
placeholder="Image Description"
/>
<input
type="text"
value={tags}
onChange={(e) => setTags(e.target.value)}
className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
placeholder="Tags (comma-separated)"
/>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
<button
       type="button"
       className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
       onClick={handleSubmit}
     >
Save
</button>
<button
       type="button"
       className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
       onClick={closeModal}
     >
Cancel
</button>
</div>
</div>
);
};