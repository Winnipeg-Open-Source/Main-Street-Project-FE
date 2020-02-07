FROM node:12.14.1 as builder
WORKDIR .
COPY package*.json ./
RUN npm ci --prod --silent
COPY src/ ./src/
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=builder /build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
