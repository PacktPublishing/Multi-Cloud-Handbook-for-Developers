FROM node:16-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install 
COPY . .
EXPOSE 3000 3001
CMD ["node", "index.js"]
