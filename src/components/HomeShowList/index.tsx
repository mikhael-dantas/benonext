import { Button, Flex, Grid } from '@chakra-ui/react';
import React from 'react';

const productsIds = [
    '1',
    '2',
    '3',
    '4',
    '5',
]
const HomeShowList: React.FC = () => {
    // a card carousel
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [showList, setShowList] = React.useState([]);


    const handleNext = () => {
        if (activeIndex == productsIds.length - 1) {
            setActiveIndex(0);
            return
        }

        setActiveIndex(activeIndex + 1);
    }

    const handlePrev = () => {
        if (activeIndex == 0) {
            setActiveIndex(productsIds.length - 1);
            return
        }

        setActiveIndex(activeIndex - 1);
    }

    return (
        <Grid templateColumns="1fr 10fr 1fr" gap={2} alignItems='center' marginTop={'2rem'} maxWidth='200vh'>
            <Button onClick={handlePrev} bg='grey' padding='2rem 0 2rem 0'>{"<"}</Button>
            <Flex height={'20rem'} bg='blue'>
                {productsIds[activeIndex]}
            </Flex>
            <Button onClick={handleNext} bg='grey' padding='2rem 0 2rem 0'>{">"}</Button>
        </Grid>
    )
}

export default HomeShowList;