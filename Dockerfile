# Node.js 18 베이스
FROM node:18

# 작업 디렉토리
WORKDIR /app

# 종속성 설치
COPY package.json yarn.lock ./
RUN yarn install

# 전체 소스 복사
COPY . .

# 환경변수 및 포트
ENV PORT=8080
EXPOSE 8080

# 앱 실행
CMD ["yarn", "start"]