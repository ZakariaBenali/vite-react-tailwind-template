/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_AUTHOR: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
