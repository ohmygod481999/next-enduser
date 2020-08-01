import Document, { Html, Head, Main, NextScript } from "next/document";
import eInstance from "../utils/elasticsearch";
// import Configuration from "../config";
// import favicon from "../public/images/favicon.ico";
async function getMerchantConfig() {
    const merchant = await eInstance.getMerchant({
        merchantCode: "cokoglobal",
        size: 1,
    });
    const merchantInfo = merchant.body.hits.hits[0]._source;
    return merchantInfo;
}
class MyDocument extends Document {
    constructor(props) {
        super(props);
        // getMerchantConfig().then((merchantInfo) => {
        //     this.state = merchantInfo;
        //     // return console.log(merchantInfo);
        // });
    }

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                        crossorigin="anonymous"
                    />
                </Head>

                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}
export default MyDocument;
