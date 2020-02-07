FROM node:12.14.1 as builder
WORKDIR .
COPY . .
RUN npm ci --prod --silent
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=builder /build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
