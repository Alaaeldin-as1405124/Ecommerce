import * as supertest from "supertest";
import app from '../app';
import ormConnection from "../../ormconnection";

let mockProduct = {

    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "reviews": [
        {
            "comment": "It was really good!",
            "stars": 2
        },
        {
            "comment": "I will buy it again",
            "stars": 1
        }
    ]
}
describe('API routes', () => {
    let connection;
    beforeAll(async ()=>{
        connection = await ormConnection;
    });

    afterAll(async ()=>{
        //close the connection if it still open
        if(connection){
            connection.close()
        }
    });

    describe('Get Products', () => {
        test('It should return 200 OK', async () => {
            const response = await supertest(app).get('/api/products');
            expect(response.statusCode).toBe(200);//to return success
        })
        test('It should have json content type', async () => {
            const response = await supertest(app).get('/api/products');
            expect(response.header['content-type']).toContain('json');//to be a json
        })
        test('It should have defined body', async () => {
            const response = await supertest(app).get('/api/products');
            expect(response.body).toBeTruthy();//to have a body
            expect(response.body).toBeDefined();//to have a body
        })
        test('It should have initialized the database and have at least 1 products in the body', async () => {
            const response = await supertest(app).get('/api/products');
            expect(response.body.length).toBeGreaterThan(1);//to have at least 1 product
        })

    })

    describe('Get single Product', () => {
        test('It should return 200 OK', async () => {
            const response = await supertest(app).get('/api/products/1');
            expect(response.statusCode).toBe(200);//to return success
        })
        test('It should have json content type', async () => {
            const response = await supertest(app).get('/api/products/1');
            expect(response.header['content-type']).toContain('json');//to be a json
        })
        test('It should have a defined body', async () => {
            const response = await supertest(app).get('/api/products/1');
            expect(response.body).toBeTruthy();//to have a body
            expect(response.body).toBeDefined();//to have a body
        })
        test('It should have a body that matches the product id', async () => {
            const response = await supertest(app).get('/api/products/1');
            expect(response.body.id).toEqual(mockProduct.id);//to have exactly 1 product, and its same as the product in the json file
            expect(response.body.title).toEqual(mockProduct.title);//to match the title
            expect(response.body.price).toEqual(mockProduct.price);//to match the price, as real number
            expect(response.body.description).toEqual(mockProduct.description);//to match the description
            expect(response.body.image).toEqual(mockProduct.image);//to match the image
            expect(response.body.reviews.length).toEqual(mockProduct.reviews.length);//to match the reviews length
        })
        test('It should return empty object if product does not exsist', async () => {
            const response = await supertest(app).get('/api/products/91');
            expect(response.body).toBeFalsy();
        })
        test('It should return 500 if product id is not int', async () => {
            const response = await supertest(app).get('/api/products/test');
            expect(response.statusCode).toBe(500);//to return internal server error
        })

    })


})

