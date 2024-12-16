FROM node:22.12-alpine AS builder
RUN apk add --no-cache perl
WORKDIR /app
COPY package*.json ./
RUN npm ci

ARG NEXT_PUBLIC_BASE_PATH
ARG NEXT_PUBLIC_ASSET_PATH
ARG NEXT_PUBLIC_GTM_ID

ENV NEXT_PUBLIC_BASE_PATH=$NEXT_PUBLIC_BASE_PATH
ENV NEXT_PUBLIC_ASSET_PATH=$NEXT_PUBLIC_ASSET_PATH
ENV NEXT_PUBLIC_GTM_ID=$NEXT_PUBLIC_GTM_ID

COPY . .
RUN npm run build
RUN chmod +x ./docker/cleanup.sh
RUN ./docker/cleanup.sh ./out/index.html

FROM nginx:alpine
COPY --from=builder /app/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


