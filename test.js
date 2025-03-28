import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import path from "path";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// env 설정
const __dirname = path.resolve();
dotenv.config({ path: __dirname + "/.env" });

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

console.log("서버 ON")

app.listen("8080");
