# Ecommerce APP using PEAN stack
`This app is using Angular as frontend framework, Nodejs, Express, along with postgress database using typeorm`

## App Structure

In the root folder there are 2 main directories
1. frontend (Has the angular code, along with its documentation)
2. backend (Has the nodejs code along with its documentation)
3. postgress (Has the docker volume/disk for postgress)
#Docker diagram

![Alt text](./github-assets/docker.png?raw=true "Optional Title")

###db: is using postgress:12 image to create the database
###frontend: containerized with nginx running at port 80, with reverse proxy configurations to allow the api to be accessed via www.domain.com/api without exposing the api port
###backend: running nodejs code on port 5005

#Deployment guide

`We will be using docker-compose to deploy the app, and use reverse proxy to be able to use the same domain/api to access the api without exposing the api port to the public.`

##Prerequisites
`This deployment guide will be on a linux server, however it can be tweaked a bit to work in any os, because it uses docker.`

## Install docker & docker compose

`sudo apt upgrade`

`sudo apt install curl`

Install docker
`sudo apt install docker.io`

Install docker compose
`sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

Check if docker is installed and running

`systemctl status docker`

if it's not active/not running

`sudo systemctl start docker`

change permission

`sudo chmod +x /usr/local/bin/docker-compose`

Check if docker-compose has been installed properly

`docker-compose --version`

#Guide

## Clone the repo

`by using git clone`
`gh repo clone Alaaeldin-as1405124/Ecommerce`
## Navigate to the backend 
if there's no package-lock.json

`cd backend` and do `npm install` so it can generate package-lock.json

Why is that? Because in production we are running `npm ci` which depends on package-lock.json

## Run Docker-compose from docker-compose.yml

`Change directory to the place where docker-compose.yml is`

run

`sudo docker-compose up`

To rebuild the images

`sudo docker-compose build`

###NOTE
Change your .env variables, and files to suit your requirements.


#Demo
https://ecommerce.ay-legend.com

