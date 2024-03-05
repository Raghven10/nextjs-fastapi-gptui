"use client";
import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react';


export default function Error () {

    const [loaded, setLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        router.push('/')
        setLoaded(true);
    }, [router]);

    return (
        <div className=" bg-white dark:bg-gray-800 min-h-screen">
            <div className=" flex h-full">
                <div className="m-auto my-10 dark:text-gray-300 text-3xl font-semibold">
                    <div className="absolute w-full h-full flex z-50">
                        <div className="absolute rounded-xl w-full h-full backdrop-blur flex justify-center">
                            <div className="m-auto pb-44 flex flex-col justify-center">
                                <div className="max-w-md">
                                    <div className="text-center text-2xl font-medium z-50">Backend Required</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}