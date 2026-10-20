import { access, cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const source = resolve("dist");
const htdocs = process.env.XAMPP_HTDOCS || "C:\\xampp\\htdocs";
const destination = resolve(htdocs, "bright-future-library");

await access(resolve(source, "index.html"));
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true, force: true });

console.log(`Bright Future Library deployed to ${destination}`);
console.log("Start Apache in the XAMPP Control Panel and visit http://localhost/bright-future-library/");
