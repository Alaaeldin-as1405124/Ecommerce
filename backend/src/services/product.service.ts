import repo from '../repositories/product.repo';

class ProductService {

    async getProducts(req, res) {
        try {
            let response = await repo.getProducts();
            return res.json(response);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    async getProduct(req, res) {
        try {
            const id = req.params?.id;
            let response = await repo.getProduct(id);
            return res.json(response);
        } catch (err) {
            res.status(500).send(err);
        }
    }


}

export default new ProductService();
