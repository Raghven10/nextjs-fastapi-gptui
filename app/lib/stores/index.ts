"use client";

import { useState } from "react";

const Index = () => {

const [chatId, setChatId] = useState('');
	// Backend
const [config, setConfig] = useState();
const [user, setUser] = useState(undefined);

// Frontend
const [theme, setTheme] = useState('dark');

const [chats, setChats] = useState([]);
const [models,setModels] = useState([]);
const [modelfiles] = useState([]);
const [prompts, setPrompts] = useState([]);
const [documents, setDocuments] = useState([
	{
		collection_name: 'collection_name',
		filename: 'filename',
		name: 'name',
		title: 'title'
	},
	{
		collection_name: 'collection_name1',
		filename: 'filename1',
		name: 'name1',
		title: 'title1'
	}
]);

const [settings, setSettings] = useState({});
const [showSettings, setShowSettings] = useState(false);

  
}


export default Index;


