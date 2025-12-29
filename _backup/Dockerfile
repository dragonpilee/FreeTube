# Build Stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production Stage
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

# Copy built assets from build stage
COPY --from=build /app/dist ./dist
# Copy server files
COPY server ./server

EXPOSE 3000

CMD ["node", "server/index.js"]
