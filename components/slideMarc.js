import React, { Component } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import axios from "axios";

export default class SimpleSlider extends Component {
    componentDidMount() {
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getMarques.php?concess=12`)
          .then(res => {
            const marque = res.data;
            this.setState({ marque });
        });
    }

    state = {
        marque: [],
    }

    render() {
        var marqueSend
        return (
            <div className="">
                <div className="pb-4 xl:pt-6 lg:pt-6 md:pt-6 sm:pt-2">
                    <Splide
                        options={{
                            type: "loop",
                            rewind: true,
                            gap: "4.5rem",
                            arrows: false,
                            pagination: false,
                            autoplay: true,
                            lazyLoad: false,
                            arrows: true,
                            breakpoints: {
                                8000: {
                                    perPage: 7,
                                
                                },
                                1200: {
                                perPage: 4,
                                
                                },
                                767: {
                                perPage: 3,
                            
                                },
                                640: {
                                perPage: 3,
                                gap: "1.5rem",
                                },
                            },
                        }}
                    >
                        {
                            this.state.marque.map(marquee =>
                                    <SplideSlide className="pb-4">
                                        <a href={"../stock?marque="+marquee.marque}>
                                            <div className="flex hover:bg-gray-100 items-center dark:border dark:border-gray-400 dark:bg-gray-600 dark:hover:bg-gray-200 rounded-xl shadow-lg hover:shadow-xl justify-center h-36">
                                                <Image src={marquee.linkIMG} layout={"intrinsic"} height={100} width={300} alt={"LOGO "+marquee.marque} />
                                            </div>
                                        </a>
                                    </SplideSlide>
                            )
                        }
                    </Splide>
                </div>
            </div>
        );
  }
}
