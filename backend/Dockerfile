FROM node:14-alpine as base

WORKDIR /
COPY package*.json /


#install rest of the packages
RUN npm ci

COPY . /

#run the api
CMD ["npm", "start"]

EXPOSE 5005
