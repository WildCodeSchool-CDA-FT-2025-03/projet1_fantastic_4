import path from "node:path";
import concurrently from "concurrently";
import { fileURLToPath } from "url";

// Recréer l'équivalent de __dirname pour ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { result } = concurrently(
  [
    "npm:watch-*",
    { command: "npm run dev", name: "server", cwd: "./server" },
    { command: "npm run dev", name: "client", cwd: "./client" },
  ],
  {
    prefix: "",
    killOthers: ["failure", "success"],
    restartTries: 3,
    cwd: path.resolve(__dirname, "scripts"),
  },
);
