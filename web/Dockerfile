# build environment
FROM node:latest as build
WORKDIR .
COPY  package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile install
COPY . .
RUN yarn build 

# production environment
FROM nginx:stable-alpine
COPY --from=build dist /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 40 
CMD ["nginx", "-g", "daemon off;"]
