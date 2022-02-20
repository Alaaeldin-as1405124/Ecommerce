import {getConnection} from "typeorm";
import {Product} from "../entities/product";
import {readFileSync} from 'fs';
import ormConnection from "../../ormconnection";

let productRepository;//define the repo as a global variable in this file
class ProductRepo {

    constructor() {
        // this.initializeDB().catch(error=>console.warn(error));
        // //retry logic, incase if the connection refused (it happens sometimes when docker container run, and connection still not accepting requests yet)
        ormConnection.then((connection)=>{
            //initialize the repo after connection.
            productRepository = connection.getRepository(Product);
            //initialize the database if needed
            this.initializeDB().catch(error=>console.warn(error));

        }).catch(error=>console.warn('Error while getting product repo',error))
    }
    async getProducts() {
        return await productRepository.find({relations: ["reviews"]});//return all products including the reviews join
    }

    async getProduct(id) {
        return await productRepository.findOne({ where: {id},relations: ["reviews"]});//return single product by id including the reviews join
    }


    // @ts-ignore
    async initializeDB(): Promise<any> {
        //get products count
        let count = await productRepository.count({})

        //if it's equal to 0, then we need to initialize the database
        if(count === 0){
            console.log('initializing the database with dummy data');
            //get the products from the json file
            let sampleProducts = this.readProductsFile();
            await productRepository.save(sampleProducts);
            //get the count one more time.
            let count = await productRepository.count({})
            console.log('the count after initializing is ',count)
        }
        else{
           // this.clearDB();
        }
    }

    readProductsFile(){
        let rawData = readFileSync(`${__dirname}/../data/products.json`);
        // @ts-ignore
        let products = JSON.parse(rawData.toString());
        return products || [];
    }

    // @ts-ignore
    async clearDB() {
        const entities = getConnection().entityMetadatas;
        // @ts-ignore
        for (const entity of entities) {
            const repository = await getConnection().getRepository(entity.name);
            await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
        }
    }
}
export default new ProductRepo();
