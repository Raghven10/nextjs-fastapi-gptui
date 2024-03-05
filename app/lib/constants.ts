

export const WEBUI_BASE_URL = 'DEV' ? `http://localhost:8080` : ``;

export const WEBUI_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1`;
export const GPT_SERVER_API_BASE_URL = `${WEBUI_BASE_URL}/server/api`;
export const RAG_API_BASE_URL = `${WEBUI_BASE_URL}/rag/api/v1`;

export const WEB_UI_VERSION = 'v1.0.0-alpha-static';

export const REQUIRED_GPT_SERVER_VERSION = '0.0.1';

export const SUPPORTED_FILE_TYPE = [
	'application/pdf',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'text/markdown',
	'text/plain',
	'text/csv'
];
