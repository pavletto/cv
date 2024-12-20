FROM node:22.12-alpine AS builder
RUN apk add --no-cache perl
WORKDIR /app
COPY package*.json ./
RUN npm ci

ARG NEXT_PUBLIC_BASE_PATH
ARG NEXT_PUBLIC_ASSET_PATH
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_GOOGLE_VERIFICATION

ENV NEXT_PUBLIC_BASE_PATH=$NEXT_PUBLIC_BASE_PATH
ENV NEXT_PUBLIC_ASSET_PATH=$NEXT_PUBLIC_ASSET_PATH
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID
ENV NEXT_PUBLIC_GOOGLE_VERIFICATION=$NEXT_PUBLIC_GOOGLE_VERIFICATION

COPY . .
RUN npm run build
RUN chmod +x ./postprocess.js
RUN node postprocess.js

FROM nginx:alpine
COPY --from=builder /app/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


