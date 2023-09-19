FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN yarn build
FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html