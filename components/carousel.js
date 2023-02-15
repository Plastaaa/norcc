import React, { Component } from "react";
import axios from "axios";
import Image from "next/image";

import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default class SimpleSlider extends Component {

  state = {
    slideM: [],
    gammes: [],
}

  componentDidMount() {

    axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/SLIDE/getSlideMobile.php?site=12`)
    .then(res => {
      const slideM = res.data;
      this.setState({ slideM });
    });

    axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/SLIDE/getSlide.php?site=12`)
    .then(res => {
      const gammes = res.data;
      this.setState({ gammes });
    });
  }

  echoSlideDesktop(slide){
    if(slide.idSlidePK){
      return(
        <SplideSlide>
          <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={slide.src} width={800} layout="responsive" height={320} quality={100}/>
          <div className="absolute text-sm md:text-xl lg:text-2xl text-gray left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2">
            <a href={slide.urlDest}>
              <button className={slide.bgColorBTN +" "+ slide.textColorBTN + ' flex flex-wrap hover:bg-red-800 hover:dark:text-white hover:dark:bg-green-700 dark:text-gray-100 hover:text-white border shadow-lg hover:border-white border-white rounded-lg p-2'}>
                <div className='w-full'>
                  {slide.contentBTN}
                </div>
              </button>
            </a>
          </div>
        </SplideSlide>
      )
    }else{
      return(
        <SplideSlide>
          <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={slide.src} width={800} layout="responsive" height={320} quality={100}/>
        </SplideSlide>
      )
    }
  }

  echoSlideMobile(slide){
    if(slide.idSlidePK){
      return(
        <SplideSlide>
          <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={img6mobile} width={1000} layout="responsive" height={1000} quality={100}/>
          <div className="absolute text-sm md:text-xl lg:text-2xl text-gray left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2">
            <a href={slide.urlDest}>
              <button className={slide.bgColorBTN +" "+ slide.textColorBTN + 'flex flex-wrap bg-red-900 text-white hover:bg-red-800 hover:dark:text-white hover:dark:bg-green-700 dark:text-gray-100 hover:text-white border shadow-lg hover:border-white border-white rounded-lg p-2'}>
                <div className='w-full'>
                  {slide.contentBTN}
                </div>
              </button>
            </a>
          </div>
        </SplideSlide>
      )
    }else{
      return(
        <SplideSlide>
          <Image className="rounded-2xl border border-gray-500" alt="Image Slider" priority={true} src={slide.src} width={1000} layout="responsive" height={1000} quality={100}/>
        </SplideSlide>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="hidden md:block md:px-8 lg:px-24 xl:px-48">
          <Splide options={{type: "loop", autoplay: true, }} className={"border border-gray-400 rounded-2xl shadow-xl"}>
            {
              this.state.gammes.map(gamme => 
                this.echoSlideDesktop(gamme)
              )
            }
          </Splide>
        </div>


        {/* Mobile Navbar */}
        <div className="block md:hidden md:px-8 lg:px-24 xl:px-48">
          <Splide options={{type: "loop", autoplay: true, }} className={"border border-gray-400 rounded-2xl shadow-xl"}>
            {
              this.state.slideM.map(slideM => 
                this.echoSlideMobile(slideM)
              )
            }
          </Splide>
        </div>
      </div>
    );
  }
}
