const { Client } = require("@elastic/elasticsearch");

class ElasticClient {
    constructor() {
        const auth = {
            username: "amara",
            password: "dSPKMcdQkG5X97b",
        };
        const root = "https://es.foodizzi.com";
        this.merchantInstance = new Client({
            node: root + "/merchants/merchant",
            auth: auth,
        });
        this.categoryInstance = new Client({
            node: root + "/categories/category",
            auth: auth
        })
    }
}

const eInstance = new ElasticClient();

export default eInstance;
