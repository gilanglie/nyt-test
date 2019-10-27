import React from 'react'
import Link from 'next/link';
import Slider from "react-slick";

export default class ListNews extends React.Component {
  render() {
    const { props } = this;
    return (
    <section class="bg-1-white ptb-0">
      <div class="container-fluid">
        <div class="row">
          
          <div class="col-md-12 col-lg-12 ptb-50 pr-30 pr-md-15">
            <h4 class="mb-30 mt-20 clearfix"><b>Latest Articles</b></h4>
            <div class="row">
            {props.moreArticles.map(article => {
              return (

              <div class=" col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30">
                <div class="card h-100 min-h-350x">
                  <div class="bg-white h-100">
                  
                  <div class="h-50 bg-10" style={{backgroundImage: `url(${ article.multimedia[0].url })`}}></div>
                    
                    <div class="plr-25 ptb-15 h-50">
                      <div class="dplay-tbl">
                        <div class="dplay-tbl-cell">
                        
                          <h5 class="color-ash"><b>{article.section}</b></h5>
                          <h4 class="mtb-10">
                          <a href="#"><b>{article.title}</b></a></h4>
                        </div>
                      </div>
                    </div>
                </div>
               </div>
              </div>
              )
            })}
            </div>
          </div>

        </div>
      </div>
    </section>
    
    )
  }
}

