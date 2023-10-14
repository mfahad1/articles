FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm uninstall bcryptjs
RUN npm install bcryptjs
COPY . .