import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import ImageCard from "@myComponents/ImageGallery/ImageCard";
import { GET_IMAGES, IGraphqlGetImagesVars } from "src/lib/api/graphqlQueries";
import { useRouter } from "next/router";

const ImageList: React.FC<any> = () => {
    const [filters, setFilters] = useState<IGraphqlGetImagesVars>({
        skip: 0,
        take: 3,
        orderBy: undefined,
        orderDirection: undefined,
        name: undefined,
        description: undefined,
        tags: undefined,
        user_id: undefined,
        image_url: undefined,
    });

    const [currentPage, setCurrentPage] = useState(1);

    const IMAGES_LIST_QUERY = GET_IMAGES
    const { loading, error, data } = useQuery(IMAGES_LIST_QUERY, {
        variables: filters,
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value || undefined }));
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilters((prev) => ({ ...prev, tags: value ? value.split(",") : undefined }));
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        setFilters((prev) => ({ ...prev, skip: (newPage - 1) * 3 }));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const totalPages = Math.ceil(data.getImages.count / 3);

    const router = useRouter();
    return (
    <div>
    <h2>Images</h2>
    <div className="filters">
        {/* <label className="skip">
        Skip:
        <input type="number" name="skip" value={filters.skip || ""} onChange={handleFilterChange} />
        </label>
        <label className="take">
        Take:
        <input type="number" name="take" value={filters.take || ""} onChange={handleFilterChange} />
        </label> */}
        <label className="orderBy">
        Order By:
        <select name="orderBy" value={filters.orderBy || ""} onChange={handleFilterChange}>
            <option value="">--Select--</option>
            <option value="created_at">Created At</option>
            <option value="name">Name</option>
            <option value="description">Description</option>
        </select>
        </label>
        <label className="orderDirection">
        Order Direction:
        <select name="orderDirection" value={filters.orderDirection || ""} onChange={handleFilterChange}>
            <option value="">--Select--</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
        </label>
        <label className="name">
        Name:
        <input type="text" name="name" value={filters.name || ""} onChange={handleFilterChange} />
        </label>
        <label className="description">
        Description:
        <input type="text"       name="description"
        value={filters.description || ""}
        onChange={handleFilterChange}
        />
        </label>
        <label className="tags">
        Tags (comma-separated):
        <input type="text" name="tags" value={filters.tags?.join(",") || ""} onChange={handleTagsChange} />
        </label>
        <label className="user_id">
        User ID:
        <input type="text" name="user_id" value={filters.user_id || ""} onChange={handleFilterChange} />
        </label>
        <label className="image_url">
        Image URL:
        <input type="text" name="image_url" value={filters.image_url || ""} onChange={handleFilterChange} />
        </label>
    </div>



    <div className=" ImagesList
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7
        gap-4
        ">
        {data.getImages.data.map((image: any) => (
            <div key={image.id}>
                <ImageCard image={image} onClickFunction={
                    () => {
                        router.push({
                            pathname: '/images/[name]',
                            query: { name: image.name },
                        })
                    }
                }/>
            </div>
        ))}
    </div>



    <div className="pages
    mt-4 flex justify-center
    ">
        {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index}
                className={`mx-1 px-2 py-1 border border-gray-300 rounded ${
                currentPage === index + 1 ? "bg-gray-200" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
            >
                {index + 1}
            </button>
        ))}
    </div>
</div>
)}

export default ImageList;
