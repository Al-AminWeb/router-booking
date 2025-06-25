import React from 'react';
import { useLoaderData } from "react-router";

const Blog = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="p-4">
            <h1 className='text-2xl font-bold text-center animate-pulse p-2 m-2'>Blogs About React</h1>
            <div className="space-y-4">
                {data.map(item => (
                    <div key={item.id} className="border rounded-lg p-4 shadow-md bg-white">
                        <h2 className="text-lg font-semibold text-indigo-600">Q{item.id}: {item.q}</h2>
                        <p className="text-gray-700 mt-2">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
