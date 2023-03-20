import { gql } from '@apollo/client';
export interface IGraphqlImage {
    id: number;
    name: string;
    description: string;
    tags: string[];
    user_id: string;
    image_url: string;
}

export interface IGraphqlImagesData {
    getImages: {
    data: IGraphqlImage[];
    count: number;
    };
}

export interface IGraphqlGetImagesVars {
    skip: number | undefined;
    take: number | undefined;
    orderBy: string | undefined;
    orderDirection: string | undefined;
    name: string | undefined;
    description: undefined | string;
    tags: undefined | string[];
    user_id: undefined | string;
    image_url: undefined | string;
}

export const GET_IMAGES = gql` query GET_IMAGES(
    $skip: Int
    $take: Int
    $orderBy: String
    $orderDirection: String
    $name: String
    $description: String
    $tags: [String!]
    $user_id: String
    $image_url: String
    ) {
    getImages(
        skip: $skip
        take: $take
        orderBy: $orderBy
        orderDirection: $orderDirection
        name: $name
        description: $description
        tags: $tags
        user_id: $user_id
        image_url: $image_url
    ) {
        __typename
        ... on ImagesPagination {
        data {
            id
            user_id
            created_at
            image_url
            tags
            name
            description
        }
        count
        }
    }
}`;