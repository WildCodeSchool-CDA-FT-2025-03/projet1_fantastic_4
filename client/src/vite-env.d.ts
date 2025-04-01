/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APOLLO_SERVER: string;
}

interface ImporteMeta {
  readonly env: ImportMetaEnv;
}
