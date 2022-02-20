# Use official node image as the base image
FROM node:12 as build

# Set the working directory
WORKDIR /frontend

# Add the source code to app
COPY package.json .

# Install all the dependencies
RUN npm install

RUN npm install -g @angular/cli

COPY . .

# Generate the build of the application
RUN npm run build:prod



# Stage 2: Serve app with nginx server, by moving dist folder to nginx directory
FROM nginx:latest

#override nginx config to include api reverse proxy
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build frontend/dist/frontend /usr/share/nginx/html

EXPOSE 80
CMD [ "/bin/bash", "-c", "nginx -g 'daemon off;'" ]




