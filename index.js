import * as dotenv from "dotenv";
import path from "path";

// env 설정
const __dirname = path.resolve();
dotenv.config({ path: __dirname + "/.env" });

console.log("Hello world");

console.log(process.env.OPENAI_API_KEY);
