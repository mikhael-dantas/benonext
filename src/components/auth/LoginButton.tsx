import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

function LoginButton({ 
    children,
    className
}:{ 
    children: React.ReactNode
    className: string
}): JSX.Element {
    return <Link href="/api/auth0/login" className={className}>
        {children}
    </Link>;
}

export default LoginButton;