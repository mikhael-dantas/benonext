import { Flex } from '@chakra-ui/react';
import { customTheme } from '@myStyles/GlobalStyles';
import React from 'react';


// simple footer with social media links
const socielMediaLinks = [
    {label: 'facebook', href: 'https://www.facebook.com/'},
    {label: 'twitter', href: 'https://twitter.com/'},
    {label: 'instagram', href: 'https://www.instagram.com/'},
    {label: 'linkedin', href: 'https://www.linkedin.com/'},
]
const Myfooter: React.FC = () => {
    return (
        <Flex as="footer" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={customTheme.colors[10]} color="white" marginTop={'5rem'}>
            {socielMediaLinks.map(({label, href}) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                    {label}
                </a>
            ))}
        </Flex>
    )
}

export default Myfooter;