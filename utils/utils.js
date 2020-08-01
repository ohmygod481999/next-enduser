import Axios from "axios";
import Configuration from "./config";

export const queryElasticSearch = ({
    includes = [],
    must,
    must_not = [],
    sort = [],
    type,
    query = "_search?from=0&size=1"
}) => {
    const num = Math.random()
    console.log("start: " + num)
    let url = "";
    switch (type) {
        case Configuration.getDataTypes.ARTICLE:
            url = "https://es.foodizzi.com/articles/article2/";
            break;
        case Configuration.getDataTypes.CATEGORY:
            url = "https://es.foodizzi.com/categories/category/";
            break;
    }
    const body = {
        _source: {
            includes: includes
        },
        query: {
            bool: {
                must: [
                    {
                        query_string: {
                            default_field: "merchantId",
                            query: "008d8d6a-14a1-4d17-9b1c-2b8c2f8f5eb3"
                        }
                    },
                    ...must
                ],
                must_not: must_not
            }
        },
        sort: sort
    };

    return Axios.post(url + query, body, {
        auth: {
            username: "amara",
            password: "dSPKMcdQkG5X97b"
        }
    }).then(res => {
        console.log("end: " + num)
        return res
    })
};

export const sliceString = (string, maxLength = 10) => {
    if (string.length > maxLength) return string.slice(0, maxLength) + " ...";
    return string;
};

export const getSourceResult = res => {
    return res.data.hits.hits.map(val => val._source);
};

export const getImageThumbnail = (images = []) => {
    if (images.length < 1)
        return {
            src: Configuration.imageDefault,
            alt: ""
        };
    for (let i = 0; i < images.length; i++) {
        if (images[i].isFeatured)
            return {
                src: Configuration.imageRoot + images[i].path,
                alt: images[i].altAttribute
            };
    }
    return {
        src: Configuration.imageRoot + images[0].path,
        alt: images[0].altAttribute
    };
};

export const cropImage = (imgPath, width, height) => {
    return imgPath + `?mode=Crop&width=${width}&height=${height}`;
};

export const formatDate = date => {
    let monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
};
