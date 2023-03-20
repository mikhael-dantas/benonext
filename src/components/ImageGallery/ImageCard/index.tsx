import { IGraphqlImage } from "src/lib/api/graphqlQueries";

interface Props {
    image: IGraphqlImage;
    onClickFunction?: () => void;
}

export default function ImageCard({ image , onClickFunction }: Props) {
    return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
    onClick={onClickFunction}>
        <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image.image_url})` }} />
        <div className="p-4">
        <h1 className="text-gray-900 font-bold text-2xl">{image.name}</h1>
        <p className="mt-2 text-gray-600 text-sm">{image.description}</p>
        <div className="mt-4">
            <span className="text-gray-700 font-bold">Tags:</span>
            <ul className="list-disc list-inside">
            {image.tags.map((tag) => (
                <li key={tag} className="text-gray-600 text-sm">
                {tag}
                </li>
            ))}
            </ul>
        </div>
        <div className="mt-4">
            <span className="text-gray-700 font-bold">User ID:</span>
            <span className="text-gray-600 text-sm ml-2">{image.user_id}</span>
        </div>
        </div>
    </div>
    );
}
