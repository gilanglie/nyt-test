import React from 'react'
import Link from 'next/link';
import Slider from "react-slick";

export default class Hotnews extends React.Component {
  render() {
    const { props } = this;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div class="slider-main h-800x h-sm-auto pos-relative pt-95 pb-25" >
      <div class="img-bg bg-1 bg-layer-4" 
           style={{backgroundImage: `url(${ props.mainSlider.multimedia[4].url })`}}></div>
      <div class="container-fluid h-100 mt-xs-50"> 
        <div class="row h-100">
          <div class="col-md-1"></div>
          <div class="col-sm-12 col-md-5 h-100 h-sm-50">
            <div class="dplay-tbl">
              <div class="dplay-tbl-cell color-white mtb-30">
                <div class="mx-w-400x">
                  <h5><b>{props.mainSlider.section}</b></h5>
                  <h1 class="mt-20 mb-30"><b>{props.mainSlider.title}</b></h1>
                  <h6><a class="plr-20 btn-brdr-grey color-white" href="#"><b>Continue Reading</b></a></h6>
                </div>
              </div>
          </div>
          </div>
          <div class="col-sm-12 col-md-6 h-sm-50 oflow-hidden swiper-area pos-relative">			
    
            <div class="abs-blr pos-sm-static">
              <div class="row pos-relative mt-50 all-scroll">
              
                <div class="swiper-scrollbar resp"></div>
                <div class="col-md-10">
                  
                  <h5 class="mb-50 color-white"><b>HOT NEWS</b></h5>
                  <Slider {...settings}>
                    {props.articles.slice(1, 5).map(article => {
                      return (
                      <div>
                        <div class="swiper-slide" style={{paddingLeft: '12px',paddingRight: '12px'}}>
                          <div class="bg-white">
                            <img src={article.multimedia[3].url} alt="" />
                            
                            <div class="plr-25 ptb-15">
                              <h5 class="color-ash"><b>{article.section}</b></h5>
                              <h4 class="mtb-10">
                                <a href="#"><b>{article.title}</b></a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    })}
                    </Slider>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    )
  }
}

