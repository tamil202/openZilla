# 1 Use slim Node base
FROM node:22-alpine
RUN npm install -g npm@latest
# 2 Set work dir
WORKDIR /app

# 3 Copy backend package first for caching
COPY server/package*.json ./server/

# 4 Install backend deps
RUN cd server && npm install

# 5 Copy client package for caching
COPY client/package*.json ./client/

# 6 Install client deps
RUN cd client && npm install

# 7 Copy whole source
COPY . .

# 8 Build Angular
RUN cd client && npm run build

# 9 Build Node backend (TS → JS)
RUN cd server && npm run build

# 10 Expose port
EXPOSE 3000

# 11 Start server (should serve static files too)
CMD ["node", "server/dist/index.js"]
