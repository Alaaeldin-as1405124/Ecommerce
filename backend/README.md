# Backend


# Diagrams
## Communication Diagram
![Alt text](./github-assets/communication.png?raw=true "Optional Title")

## ER Diagram
![Alt text](./github-assets/ERD.png?raw=true "Optional Title")

## Exposed Routes

### `~/api/products` returns all the products
### `~/api/products/:id` returns single product by it's id

## Run

Run `npm start` to run the api. 

## Running unit tests

Run `npm run test` to execute the unit tests via Jest.

## App Structure

In the root folder there are 6 main directories
1. data (has the json data sample to initialize the db with)
2. migrations (Typeorm migration files)
3. entities (DB models that we are using in the app)
4. repositories (repos that are communicating with the database)
5. services (Services that handles the express req, and return the response)
6. routes (The express js routes, that are exposed to the public)
7. __test\__ (The automated test cases using __Jest__)

# Root
### ormconnection.ts
Responsible for connecting to the database
### ormconfig.ts
It has the orm config, that are defined in the .env file
### Dockerfile
It has the docker configurations.
### .env.example
.env template for the env parameters


## 1. Data
data directory has initialized products.json file that has sample products to initialize the database with.

## 2. Migrations
It has the typeorm migration files, that can be generated using 

## 3. Entities

Entities directory has 2 main files, or we can call them models.

### product.ts
Product Model that has the product schema defined, with the relationship of the review entity

### review.ts
Review Model that has the relationship with the product model, as many-to-one. So, each product can have one or many reviews.


## 4. Repositories
Repositories are usually the communicator between the service, and the database. It's responsible for the CRUD operations
###product.repo.ts
product.repo.ts is responsible to do the crud operation, it has 2 main methods/functions which are: getAllProducts, that returns all the products in the database, along with the neccessary join with review model, so it can return the whole product data to the service. The other method/function is getProduct which is doing the same thing, but it returns only 1 product by its id. Also, it initializes the database if it's empty.

## 5. Services
Services are usually responsible to get the request, and verify that the user is authorized to do the requested action. Then it asks the repository to provide the neccessary data.

### product.service.ts
product.service.ts is being used by the router, and once it gets a request it sends the necessary data to the repo, then returns the proper response with status code.

## 6. Routes
Routes are usually the routes that are exposed to the public to use the api.


## 7. Tests
routes.test.ts is responsible to test the api, and make sure that it should do the requested job. It uses `Jest` to define the rules, and `supertest` to be able to communicate with the api to test it. 

