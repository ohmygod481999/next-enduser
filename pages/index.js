import Head from "next/head";
import { useEffect } from "react";
import eInstance from "../utils/elasticsearch";

export default function Home({ html }) {
    useEffect(() => {
        console.log(html);
    }, []);
    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

export async function getServerSideProps(context) {
    const merchant = await eInstance.getMerchant("cokoglobal");
    // console.log(merchant.body.hits.hits);

    // const query = JSON.parse(`
    // {"must":[{"query_string":{"default_field":"merchantId","query":"008d8d6a-14a1-4d17-9b1c-2b8c2f8f5eb3"}},{"match":{"languageId":"838aef56-78bb-11e6-b5a6-00155d582814"}},{"match":{"parentId":"00000000-0000-0000-0000-000000000000"}},{"match":{"themeWebs.id":"4e462311-6603-2e19-d1b8-1b0d7d4cf0f7"}},{"match_phrase":{"name":"header"}}],"must_not":[]}
    // `);
    // const { body } = await eInstance.categoryInstance.search({
    //     index: "categories",
    //     type: "category",
    //     body: {
    //         query: {
    //             bool: query,
    //         },
    //         sort: [],
    //         _source: { includes: [] },
    //     },
    //     from: 0,
    //     size: 1,
    // });
    // const html = body.hits.hits[0]._source.description;
    return {
        props: {
            html: "cc",
            // props for your component
        },
    };
}
