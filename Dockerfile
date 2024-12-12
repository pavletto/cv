FROM node:22.12-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN chmod +x ./cleanup.sh
RUN ./cleanup.sh ./out/index.html
RUN cp ./cleanup.sh ./out/cleanup.sh

FROM node:22.12-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/out ./out
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
