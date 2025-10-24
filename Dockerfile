# 使用 Node LTS 版本
FROM node:20

# 設定工作目錄
WORKDIR /usr/src/app

# 複製 package.json 與 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製專案其餘檔案
COPY . .

# 設定環境變數（可在 docker run 時指定）
ENV PORT=3000

# 暴露埠號
EXPOSE 3000

# 啟動指令
CMD ["node", "index.js"]
