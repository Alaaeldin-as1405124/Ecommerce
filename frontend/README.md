# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` or `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` or `ng test to execute the unit tests via [Karma](https://karma-runner.github.io). Also, it will run test coverage by default

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#Screenshots
![Alt text](./github-assets/product.png?raw=true "Optional Title")
![Alt text](./github-assets/product.png?raw=true "Optional Title")
![Alt text](./github-assets/cart.png?raw=true "Optional Title")

## App Structure

In "src/app" folder there are 3 main directories
1. components (App components)
2. models (Models that we are using in the app)
3. services (Services that communicate with the api, or does the required job for the component/s)

# 1. components

###cart
Responsible to render the customer cart, displays the total number of products in the cart, total price of all cart items, as well as the products cards information. It is being used in the dialog popup which is accessible from the navbar button.
###footer
The main app footer
###navbar
The main app navbar, that have 1 route called products, that navigates to "product" component, as well as the cart button
###product
Single product details page, it renders the product details, and communicating with product service to get the product details from the api by the product id.
###product-card
Product card component is responsible to render single product card, and it is made generic to be re-useable in cart component as wel as the products component, it accepts products in the navigation params, and renders its details.
###products 
The main page that displays all the products, and it uses product card to render each product that is coming from products service after communicating with the api.
###ratings 
It accepts ratings array, and render each rating along with its comment, and it uses stars component to render the stars
###stars
It accepts a rate, and it renders 5 stars, and decides to render a full star or half star based on the given rate.

# 2. Models

###Product
Product Model that has the product schema defined in the interface

###Cart
Cart Model that has product model as an array, along with the amount of each product which has been added to the cart.


# 3. Services

###Cart Service
Cart service is responsible for the card CRUD operations, and it uses localstorage to save the cart in case if the browser is closed.

###Product Service
Product service is responsible for the communication of the api, so it can fetch all products, or single product details. Also, it has a method that calculates to average star reviews for a single product.

###Toast Service
Toast service is responsible to display toast in the app, to notify the user for some actions. For example, when a product is added/removed from/to the cart


