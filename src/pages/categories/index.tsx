// import { gql, useQuery } from '@apollo/client';
// import { Box, Flex, Grid, Image } from '@chakra-ui/react';
// import React, { useEffect } from 'react';


// const categories: React.FC = () => {
//     // list with all categories from  backend
//     const GET_PRODUCTS = gql`
//     query {
//         categories(take: 2, skip: 0) {
//             __typename
//             ...on Category {
//                 id
//                 name
//                 image_url
//             }
//         }
//     }
//     `;

//     const { loading, error, data } = useQuery(GET_PRODUCTS);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;

//     return (
//         <Grid templateColumns={['1fr', '1fr 1fr']} gap={2} p={2}>
//             {data.categories.map(({ id, name, image_url }) => (
//                 <Flex key={id}
//                     position="relative"
//                     alignItems="center"
//                     justifyContent="center"
//                     maxW={'100vh'}
//                     style={{
//                         aspectRatio: '2/1',
//                     }}
//                     bgImg={`url(${image_url})`}
//                     boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}
//                 >
//                     {name}
//                 </Flex>
//             ))}
//         </Grid>
//     )
// }

// export default categories;