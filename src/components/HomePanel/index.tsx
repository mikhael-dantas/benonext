import { Flex, Grid } from '@chakra-ui/react';
import React from 'react';

import styles from './styles.module.css';

const HomePanel: React.FC = () => {
    
    // return a panel with a grid template A for screen sizes > 600px and B for screen sizes < 600px width 
    return (
        <Grid className={styles['home-panel']}
        templateAreas={["'a a ' 'a a' 'b c'", "'a a b' 'a a c'"]}
        gap={1} p={1} 
        maxH={'70vh'}
        margin={'0 auto'}
        >
            <Flex bg={'red.500'} width='100%'height={'100%'} gridArea='a'>1</Flex>
            <Flex bg={'blue.500'}width='100%'height={'100%'}gridArea='b'>2</Flex>
            <Flex bg={'green.500'}width='100%'height={'100%'}gridArea='c'>3</Flex>
        </Grid>
    )
}

export default HomePanel;