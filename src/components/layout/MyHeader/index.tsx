import LoginButton from '@myComponents/auth/LoginButton';
import LogoutButton from '@myComponents/auth/LogoutButton';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { TUserInfo } from 'src/lib/auth0/auth0';

const hrefs = [
    { href: '/products', label: 'Products' },
    { href: '/manage', label: 'Manage' },
];

const MyHeader: React.FC = () => {
    const [isLogged, setIsLogged] = React.useState<boolean>(false);
    const [user, setUser] = React.useState<TUserInfo>(null);

    useEffect(() => {
        fetch('/api/auth0/get-user')
        .then((res) => {
            if (res.ok) {
            setIsLogged(true);
            }
            res.json().then((data) => {
            setUser(data);
            });
            return;
        })
        .catch((err) => {
            return;
        });
    }, []);

return (
<div className=" header
    h-[8rem]
    grid grid-cols-10 grid-rows-3 md:grid-rows-2
    items-center justify-between mb-3
    p-2 gap-1
">


    <Link href="/" className=' home
    col-span-6 md:col-span-2
    col-start-1 md:col-start-1
    col-end-7 md:col-end-3
    row-start-1 row-end-2
    '>
        <div className="cursor-pointer flex items-center space-x-2 text-gray-800">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-home"
        >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>E-commerce Simplified</span>
        </div>
    </Link>

    <div className=" navbar
    col-span-10 md:col-span-6
    col-start-1 md:col-start-3
    col-end-11 md:col-end-9
    row-span-2 md:row-span-1
    row-start-2 row-end-4
    md:row-start-1 md:row-end-2
    nav-links 
    flex flex-wrap gap-1 sm:gap-1 justify-center items-center
    h-[100%] w-[100%]
    ">
        {hrefs.map(({ href, label }) => (
        <Link key={href} href={href}>
            <div className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 sm:px-4 rounded cursor-pointer">
            {label}
            </div>
        </Link>
        ))}
    </div>

    {isLogged ? ( 
        <div className="
        col-span-4 md:col-span-2
        col-start-6 md:col-start-9
        col-end-11 md:col-end-11
        row-start-1 row-end-2
        row-span-1 md:row-span-1
        md:row-start-1 md:row-end-2
        grid grid-cols-3 grid-rows-1
        max-h-[100%]
        ">
            <img
                src={user?.picture}
                alt={user?.name}
                className="rounded-full cursor-pointer
                col-span-1 col-start-1 col-end-2
                max-h-[100%] max-w-[100%]
                justify-self-end
                "
                crossOrigin=""
                referrerPolicy="no-referrer"
                onClick={() => {
                window.location.href = '/profile';
                }}
            />
            <LogoutButton className="
            bg-gray-500 hover:bg-gray-600 text-white rounded cursor-pointer
            col-span-2 col-start-2 col-end-4
            flex justify-center items-center
            ">
                logout
            </LogoutButton>
        </div>
    ) : (
        <LoginButton className="
        col-span-2 md:col-span-2
        col-start-7 md:col-start-9
        col-end-10 md:col-end-11
        row-start-1 row-end-2
        md:row-start-1 md:row-end-2
        bg-gray-500 hover:bg-gray-600 text-white
        white py-1 px-4 rounded cursor-pointer mt-2 sm:mt-0">
        login
        </LoginButton>
    )}
</div>
)}


export default MyHeader;