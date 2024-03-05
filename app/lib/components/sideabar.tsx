'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import uuid4 from 'uuid';
import { useRouter } from 'next/navigation';

import fileSaver from 'file-saver';
const { saveAs } = fileSaver;
import { deleteChatById, getChatList, updateChatById } from '../apis/chats';
import { Url } from 'next/dist/shared/lib/router/router';
import { UserProvider, useUser } from '../stores/user';

const Sideabar = () => {
    const [show, setShow] = useState(false);
    const [chats, setChats] = useState([]);
    const [settings, setSettings] = useState();
    const router = useRouter();
    const navElement = useRef(null);
    const { } = useUser();


    let title: string = 'VayuGPT';
    let search = '';

    let chatDeleteId = null;
    let chatTitleEditId = null;
    let chatTitle = '';
    let showDropdown = false;

    useEffect(() => {
        // Check if window width is greater than 1280
        if (window.innerWidth > 1280) {
            setShow(true);
        }

        // Async function to get chat list
        const fetchChats = async () => {
            const chatList = await getChatList(localStorage.token);
            setChats(chatList);
        };

        // Fetch chat list
        fetchChats();
    }, []);

    const navigateTo = (path: string) => {
        router.push(path);
    };

    const loadChat = async (id: any) => {
        // Perform client-side route transition
        await router.push(`/c/${id}`);
    };

    const editChatTitle = async (id: string, _title: string) => {
        title = _title;

        await updateChatById(localStorage.token, id, {
            title: _title
        });
        await setChats(await getChatList(localStorage.token));
    };

    const deleteChat = async (id: string) => {
        router.push('/');

        await deleteChatById(localStorage.token, id);
        await setChats(await getChatList(localStorage.token));
    };

    const saveSettings = async (updated: any) => {
        await setSettings({ settings, ...updated });
        localStorage.setItem('settings', JSON.stringify(settings));
        location.href = '/';
    };

    const handleNewChatClick = async () => {
        await router.push('/');

        // If you need to trigger a click on another element, ensure you have a ref to it
        // and use that ref to trigger the click
    };

    return (

        <div
            ref={navElement}
            className={`h-screen ${show ? '' : '-translate-x-[260px]'} w-[260px] fixed top-0 left-0 z-40 transition text-gray-200 bg-white/95 shadow-2xl text-sm`}
        >
            <div className="py-2.5 my-auto flex flex-col justify-between h-screen">
                <div className="px-2.5 flex justify-center space-x-2">
                    <button
                        id="sidebar-new-chat-button"
                        className="flex-grow flex justify-between rounded-md px-3 py-2 mt-1 hover:bg-gray-900 transition text-black hover:text-white"
                        onClick={handleNewChatClick}
                    >
                        <div className="flex self-center">
                            <div className="self-center mr-3.5">
                                {/* Use Next.js Image component for optimized images */}
                                <Image src="/logo.png" alt="Logo" className="w-5 rounded-full" width={20} height={20} />
                            </div>

                            <div className="self-center font-medium text-sm">New Chat</div>
                        </div>

                    </button>
                </div>
            </div>
            <section>
                <div className="px-2.5 flex justify-center mt-0.5">
                    <button
                        className="flex-grow flex space-x-3 rounded-md px-3 py-2 hover:bg-gray-900 transition"
                        onClick={() => navigateTo('/modelfiles')}
                    >
                        <div className="self-center font-medium text-sm">Modalfiles</div>

                    </button>
                </div>
                <div className="px-2.5 flex justify-center">
                    <button
                        className="flex-grow flex space-x-3 rounded-md px-3 py-2 hover:bg-gray-900 transition"
                        onClick={() => navigateTo('/prompts')}
                    >
                        {/* SVG and Text */}
                    </button>
                </div>
                <div className="px-2.5 flex justify-center mb-1">
                    <button
                        className="flex-grow flex space-x-3 rounded-md px-3 py-2 hover:bg-gray-900 transition"
                        onClick={() => navigateTo('/documents')}
                    >
                        {/* SVG and Text */}
                    </button>
                </div>
            </section>
        </div>

    )

}

export default Sideabar