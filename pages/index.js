import Head from "next/head";
import { useEffect } from "react";
// import eInstance from "../utils/elasticsearch";

export default function Home({ html }) {
    useEffect(() => {
        console.log(html);
    }, []);
    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

export async function getServerSideProps(context) {
    // const query = JSON.parse(
    //     `{"bool":{"must":[{"query_string":{"default_field":"merchantId","query":"008d8d6a-14a1-4d17-9b1c-2b8c2f8f5eb3"}},{"match":{"languageId":"838aef56-78bb-11e6-b5a6-00155d582814"}},{"match":{"parentId":"ca744958-6444-455b-b26a-ec5e2427b8bd"}}],"must_not":[]}}`
    // );
    // const b = await eInstance.merchantInstance.search({
    //     query: {
    //         match: {
    //             code: {
    //                 query: "labo",
    //             },
    //         },
    //     },
    //     sort: [],
    //     source: {}
    // });
    // console.log(b.body.hits.hits[0]._source.themeWebs)
    // const { body } = await eInstance.categoryInstance.search({
    //     query: query,
    //     size: 5,
    //     source: { includes: [] },
    // });
    // const html = body.hits.hits[0]._source.description;
    const html = `<section class="p-0 main-slider h-100 mobile-height wow fadeIn">
    <div class="swiper-full-screen swiper-container h-100 w-100 white-move">
        <div class="swiper-wrapper">
            <!-- start slider item -->
            <div class="swiper-slide cover-background" style="background-image:url('http://placehold.it/1920x1080');">
                <div class="opacity-extra-medium bg-black"></div>
                <div class="container position-relative full-screen">
                    <div class="slider-typography text-center">
                        <div class="slider-text-middle-main">
                            <div class="slider-text-middle">
                                <h6 class="text-very-light-gray padding-ten-lr font-weight-300 margin-two-bottom md-margin-four-bottom sm-margin-15px-bottom">we combine design, thinking and technical craft</h6>
                                <div class="alt-font text-white-2 text-uppercase font-weight-700 letter-spacing-minus-3 title-extra-large margin-two-bottom width-60 mx-auto lg-width-80 md-margin-four-bottom sm-width-90 sm-margin-25px-bottom sm-letter-spacing-0">creative thinker</div>
                                <div class="btn-dual">
                                    <a href="about-us-modern.html" class="btn btn-transparent-white btn-small sm-margin-two-all">About Company</a>
                                    <a href="https://themeforest.net/item/pofo-creative-agency-corporate-and-portfolio-multipurpose-template/20645944?ref=themezaa" target="_blank" class="btn btn-transparent-white btn-small sm-margin-two-all">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end slider item -->
            <!-- start slider item -->
            <div class="swiper-slide cover-background" style="background-image:url('http://placehold.it/1920x1080');">
                <div class="opacity-extra-medium bg-black"></div>
                <div class="container position-relative full-screen">
                    <div class="slider-typography text-center">
                        <div class="slider-text-middle-main">
                            <div class="slider-text-middle">
                                <h6 class="text-very-light-gray padding-ten-lr font-weight-300 margin-two-bottom md-margin-four-bottom sm-margin-15px-bottom">we're a design studio that believe in the ideas</h6>
                                <div class="alt-font text-white-2 text-uppercase font-weight-700 letter-spacing-minus-3 title-extra-large margin-two-bottom width-60 mx-auto lg-width-80 md-margin-four-bottom sm-width-90 sm-margin-25px-bottom sm-letter-spacing-0">empower elevate</div>
                                <div class="btn-dual">
                                    <a href="about-us-modern.html" class="btn btn-transparent-white btn-small sm-margin-two-all">About Company</a>
                                    <a href="https://themeforest.net/item/pofo-creative-agency-corporate-and-portfolio-multipurpose-template/20645944?ref=themezaa" target="_blank" class="btn btn-transparent-white btn-small sm-margin-two-all">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end slider item -->
            <!-- start slider item -->
            <div class="swiper-slide cover-background" style="background-image:url('http://placehold.it/1920x1080');">
                <div class="opacity-extra-medium bg-black"></div>
                <div class="container position-relative full-screen">
                    <div class="slider-typography text-center">
                        <div class="slider-text-middle-main">
                            <div class="slider-text-middle">
                                <h6 class="text-very-light-gray padding-ten-lr font-weight-300 margin-two-bottom md-margin-four-bottom sm-margin-15px-bottom">we're a design studio that believe in the ideas</h6>
                                <div class="alt-font text-white-2 text-uppercase font-weight-700 letter-spacing-minus-3 title-extra-large margin-two-bottom width-60 mx-auto lg-width-80 md-margin-four-bottom sm-width-90 sm-margin-25px-bottom sm-letter-spacing-0">creative design</div>
                                <div class="btn-dual">
                                    <a href="about-us-modern.html" class="btn btn-transparent-white btn-small sm-margin-two-all">About Company</a>
                                    <a href="https://themeforest.net/item/pofo-creative-agency-corporate-and-portfolio-multipurpose-template/20645944?ref=themezaa" target="_blank" class="btn btn-transparent-white btn-small sm-margin-two-all">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end slider item -->
        </div>
        <!-- start slider pagination -->
        <div class="swiper-pagination swiper-pagination-square swiper-pagination-white swiper-full-screen-pagination"></div>
        <div class="swiper-button-next swiper-button-black-highlight d-none"></div>
        <div class="swiper-button-prev swiper-button-black-highlight d-none"></div>
        <!-- end slider pagination -->
    </div>
</section>`;
    return {
        props: {
            html: html,
            // props for your component
        },
    };
}
