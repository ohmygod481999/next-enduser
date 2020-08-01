const { Client } = require("@elastic/elasticsearch");

class ElasticClient {
    constructor() {
        const auth = {
            username: "amara",
            password: "dSPKMcdQkG5X97b",
        };
        const root = "https://es.foodizzi.com";
        this.eInstance = new Client({
            node: root,
            auth: auth,
        });
    }

    search = ({ index, type, body, from, size }) => {
        return this.eInstance.search({
            index: index,
            type: type,
            body: body,
        });
    };

    getCategories = ({ body, from, size }) => {
        return this.search({
            index: "categories",
            type: "category",
            body: body,
            from: from,
            size: size,
        });
    };

    getMerchant = ({ merchantCode = "cokoglobal", from, size = 1 }) => {
        return this.search({
            index: "merchants",
            type: "merchant",
            body: {
                query: {
                    match: {
                        code: {
                            query: merchantCode,
                        },
                    },
                },
                sort: [],
                _source: {},
            },
            from: from,
            size: size,
        });
    };
}

const eInstance = new ElasticClient();

export default eInstance;
