import { useQuery } from '@apollo/client';
import ImageCard from '@myComponents/ImageGallery/ImageCard';
import { GET_IMAGES, IGraphqlImagesData } from 'src/lib/api/graphqlQueries';



interface Props {
    name: string;
}

export default function ImagePage({ name }: Props) {
    const { loading, error, data } = useQuery<IGraphqlImagesData>( GET_IMAGES, {
        variables: {
        name,
        },
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const images = data?.getImages?.data ?? [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
            <ImageCard key={image.id} image={image} />
        ))}
        </div>
    );
    }

    export async function getServerSideProps({ params }) {
    const name = params.name;

    return {
        props: {
        name,
        },
    };
}
