FROM node:22.12-alpine AS builder
RUN apk add --no-cache perl
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN chmod +x ./docker/cleanup.sh
RUN ./docker/cleanup.sh ./out/index.html

FROM nginx:alpine
COPY --from=builder /app/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]