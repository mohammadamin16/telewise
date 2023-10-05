# build environment
FROM node:18-alpine3.17 as build
WORKDIR .
COPY  package.json .
COPY yarn.lock .
RUN yarn add global serve
RUN yarn --frozen-lockfile install
COPY . .
RUN yarn build 

# production environment
FROM nginx:stable-alpine
COPY --from=build dist /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# COPY web .
# RUN yarn
# RUN yarn build
# # production environment

# FROM nginx:latest
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html
# RUN touch /var/run/nginx.pid
# RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
# USER nginx
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


