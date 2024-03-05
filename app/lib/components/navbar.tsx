"use client";
import { toast } from 'react-toastify';
import fileSaver from 'file-saver';
const { saveAs } = fileSaver;

import { getChatById } from '../apis/chats';
import { useState } from 'react';


export let initNewChat: Function;
export let title: string = 'FreeGPT';
export let shareEnabled: boolean = false;

const downloadChat = async () => {
    const [chatId, setChatId] = useState('');
    const chat = (await getChatById(localStorage.token, chatId)).chat;
    console.log('download', chat);

    const chatText = chat.messages.reduce((a: any, message: any, i: any, arr: any) => {
        return `${a}### ${message.role.toUpperCase()}\n${message.content}\n\n`;
    }, '');

    let blob = new Blob([chatText], {
        type: 'text/plain'
    });

    saveAs(blob, `chat-${chat.title}.txt`);
};

const getUser = async () => {
    
}

const Navbar = () => {
    return (
        <nav id="nav" className=" fixed py-2.5 top-0 flex flex-row justify-center bg-white/95 backdrop-blur-xl w-screen z-30">
            <div className=" flex max-w-3xl w-full mx-auto px-3">
                <div className="flex w-full max-w-full">
                    <div className="pr-2 self-center">
                        <button
                            id="new-chat-button"
                            className=" cursor-pointer p-1 flex dark:hover:bg-gray-700 rounded-lg transition"
                            onClick={() => { initNewChat(); }}
                        >
                            <div className=" m-auto self-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"
                                    />
                                    <path
                                        d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className=" flex-1 self-center font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                        {title != '' ? title : 'FreeGPT'}
                    </div>
                    <div className="pl-2 flex space-x-1.5">
                        <button
                            className=" cursor-pointer p-2 flex dark:hover:bg-gray-700 rounded-lg transition border dark:border-gray-600"
                            onClick={async () => {
                                downloadChat();
                            }}
                        >
                            <div className=" m-auto self-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"
                                    />
                                    <path
                                        d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;



