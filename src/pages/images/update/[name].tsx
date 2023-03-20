import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_IMAGES, IGraphqlImage, IGraphqlImagesData } from 'src/lib/api/graphqlQueries';


interface Props {
    image: IGraphqlImage;
    onSubmit: (updatedIGraphqlImage: IGraphqlImage) => void;
}

interface IImageUpdateProps {
    name: string;
}


export default function IGraphqlImageUpdate({ name }: IImageUpdateProps) {
    const onSubmit = (updatedIGraphqlImage: IGraphqlImage) => {
        () => {}
    }

    const GETIMAGES = GET_IMAGES

    const { loading, error, data } = useQuery<IGraphqlImagesData>( GETIMAGES, {
        variables: {
            name,
        },
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}
        </p>;
    }

    const images = data?.getImages?.data ?? [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
                <IGraphqlImageForm key={image.id} image={image} onSubmit={onSubmit} />
            ))}
        </div>
    );
}



function IGraphqlImageForm({ image, onSubmit }: Props) {
    if (!image) return null;

    const [name, setName] = useState<string>(image.name);
    const [description, setDescription] = useState<string>(image.description);
    const [tags, setTags] = useState<string>(image.tags.join(', '));
    const [userId, setUserId] = useState<string>(image.user_id);
    const [imageUrl, setIGraphqlImageUrl] = useState<string>(image.image_url);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updatedIGraphqlImage: IGraphqlImage = {
        id: image.id,
        name,
        description,
        tags: tags.split(',').map((tag) => tag.trim()),
        user_id: userId,
        image_url: imageUrl,
        };
        onSubmit(updatedIGraphqlImage);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <img src={imageUrl} alt={name} className="w-[30rem] h-[30rem]" />
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
            </label>
            <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="tags">
            Tags
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tags"
            type="text"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="user_id">
            User ID
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user_id"
            type="text"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            disabled
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image_url">
            IGraphqlImage URL
            </label>
            <input
            className="shadow appearance-none border       rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image_url"
            type="text"
            value={imageUrl}
            onChange={(event) => setIGraphqlImageUrl(event.target.value)}
            />
        </div>
        <div className="flex items-center justify-between">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            >
            Update IGraphqlImage
            </button>
        </div>
        </form>
    )
}


export async function getServerSideProps({ params }) {
    const name = params.name;

    return {
        props: {
            name,
        },
    };
}