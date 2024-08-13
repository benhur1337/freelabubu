import React from 'react';
import Link from 'next/link'

export default function () {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-black-100">
            <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
            <p className="mt-4 text-gray-500">The page you are looking for could not be found.</p>
            <Link className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/">
            Go Home
            </Link>
        </div>
    );
}

