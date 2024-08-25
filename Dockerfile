FROM node:alpine AS build

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ARG API_URL
ARG IS_BROWSER

ENV API_URL=${API_URL}
ENV IS_BROWSER=${IS_BROWSER}

RUN API_URL=$API_URL IS_BROWSER=$IS_BROWSER npm run build

FROM nginx:stable-alpine

COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
