import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCartRequest } from "src/redux/reducers/cart";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

type Filters = {
  // define filter types here
};

type Pagination = {
  page: number;
  pageSize: number;
};

type Propsy = {
  filters: Filters;
  pagination: Pagination;
};



  const generateProducts = (): Product[] => {
    const products: Product[] = [];
    for (let i = 1; i <= 30; i++) {
      products.push({
        id: `${i}`,
        name: `Product ${i}`,
        description: `Description of Product ${i}`,
        price: (i + 1) * 10.99,
        image: `https://picsum.photos/200/300?random=${i}`,
      });
    }
    return products;
  };
  
  









  const getProducts = async (page: number, pageSize: number): Promise<Product[]> => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = (generateProducts()).slice(startIndex, endIndex);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(paginatedProducts);
      }, 1000); // simulate an asynchronous API call
    });
  };













// const getProducts = async (filters: Filters, pagination: Pagination) => {
//   // mock function for retrieving products
// //   const response = await fetch(
// //     `https://example.com/api/products?page=${pagination.page}&pageSize=${pagination.pageSize}`
// //   );
// //   const data = await response.json();
//   return data;
// };

const ProductList: React.FC<Propsy> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({});
  const [pagination, setPagination] = useState<Pagination>({ page: 1, pageSize: 10 });
    const totalPages = 2;
  const handlePageChange = (newPage: number) => {
    setPagination({
      ...pagination,
      page: newPage,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts(pagination.page, pagination.pageSize);
      setProducts(data);
    };
    fetchData();
  }, [filters, pagination]);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;








// ProductModal.tsx


interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ 
  product,
  isOpen,
  setIsOpen,

}) => {
  if( !isOpen ) return null;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    
      {isOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={toggleModal}
            ></div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      {product.name}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{product.description}</p>
                    </div>
                    <p className="mt-2 font-semibold text-gray-700">Price: ${product.price}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};









  
  type Propsx = {
    product: Product;
  };
  
  const ProductCard: React.FC<Propsx> = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    const dispatch = useDispatch();

    return (<>
        <div className="max-w-sm overflow-hidden shadow-lg mx-4 my-8 rounded-lg">
        <div className="relative">
          <img
            className="w-full h-64 object-cover opacity-75 hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-t-lg"
            src={product.image}
            alt={product.name}
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-500 ease-in-out rounded-t-lg"></div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
          <p className="text-gray-700 font-semibold text-lg">${product.price}</p>
        </div>
        <div className="flex justify-between px-6 pb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={ () => dispatch(addToCartRequest({...product, quantity:1})) }
          >
            Add to Cart
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {}}
          >
            Buy Now
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleModal}
          >
            Details
          </button>
        </div>
      </div>
      <ProductModal product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>);
  };
  
  