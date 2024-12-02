declare module '*.css' {
  const classNames: Record<string, string>;
  export default classNames;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface ImportMetaEnv {
  VITE_SERVER_URL: string;
}

declare module '*.jpg';
declare module '*.webp';
declare module '*.svg';
declare module '*.json';