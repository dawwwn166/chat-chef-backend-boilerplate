import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import path from "path";
import OpenAI from "openai";


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// env 설정
const __dirname = path.resolve();
dotenv.config({ path: __dirname + "/.env" });
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log("apiKey", process.env.OPENAI_API_KEY);
// openai 정보 설정


// test 코드
app.get("/test", async (req, res) => {
  // 실행코드
  try {
    res.json({ data: "비개발자를 위한 AI 서비스 개발 강의" });
  } catch (error) {
    // 에러가 난 경우
    console.log(error);
  }
});



app.post("/message", async (req, res) => {
  const { userMessage } = req.body;
  console.log("🚀 ~ userMessage:", userMessage);
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: userMessage,
        },
        {
          role: "assistant",
          content: userMessage,
        },
      ],
      temperature: 1,
      max_tokens: 4000,
      top_p: 1,
    });
    const data = response.choices[0].message;
    console.log(data);
    res.json({ data });
  } catch (error) {
    console.log(error);
  }
});

console.log("서버 ON")

app.listen("8080");
