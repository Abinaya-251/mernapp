FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./backend .
CMD ["npm", "start"]
EXPOSE 5000
