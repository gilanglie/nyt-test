import React from 'react'
import Link from 'next/link';
import Slider from "react-slick";

export default class MainNews extends React.Component {
  render() {
    const { props } = this;
    return (
    <section class="bg-1-white ptb-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-md-12 col-lg-8 ptb-50 pr-30 pr-md-15">
            <div class="row">
                {props.articles.slice(6, 9).map(article => {
                  return (
                    <div class="col-md-6 col-lg-6 col-xl-4 mb-30">
                      <div class="card h-100 bg-white">
                        <div class="plr-25 ptb-15">
                          <h5 class="color-ash"><b>{article.section}</b></h5>
                          <h4 class="mtb-10"><a href="#"><b>{article.title}</b></a></h4>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
            
            <h4 class="mb-30 mt-20 clearfix"><b>Whats trending</b></h4>
            
            <div class="row">
                  
              {props.articles.slice(10,11).map(article => {
                return (
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 mb-30">
                  <div class="card h-100 h-xs-500x">
                    <div class="sided-half sided-xs-half h-100 bg-white">  
                      <div class="s-left w-50 w-xs-100 h-100 h-xs-50 pos-relative">
                      <div class="bg-2 abs-tblr" style={{backgroundImage: `url(${ article.multimedia[4].url })`}}></div></div>
                      <div class="s-right w-50 w-xs-100 h-xs-50">
                        <div class="plr-25 ptb-25 h-100">
                          <div class="dplay-tbl">
                            <div class="dplay-tbl-cell">
                              <h5 class="color-ash"><b>{article.section}</b></h5>
                              <h2 class="mtb-10"><a href="#">
                                <b>{article.title}</b></a></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })}
              
              {props.articles.slice(11,12).map(article => {
                return (
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30">
                  <div class="card h-100 h-xs-350x">
                    <div class="bg-white h-100">
                    
                      <div class="h-50 bg-3 dplay-lg-none dplay-xs-block" style={{backgroundImage: `url(${ article.multimedia[4].url })`}}></div>
                      
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
              
              {props.articles.slice(12).map(article => {
                return (
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30">
              
                  <div class="card h-100 pos-relative bg-4 bg-layer-4 color-white" style={{backgroundImage: `url(${ article.multimedia[4].url })`}}>
                    <div class="plr-25 ptb-15">
                      <h5 class="color-grey"><b>{article.section}</b></h5>
                      <h4 class="mtb-10"><a href="#"><b>{article.title}</b></a></h4>
                    </div>
                  </div>
                </div>
                )
              })}
              
            </div>
            
            <h4 class="mb-30 mt-20 clearfix"><b>Critics's Choice Movie</b></h4>
            <div class="row">
            {props.movieArticles.slice(0,6).map(article => {
              return (
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30">
                  
                  <div class="card pos-relative h-100 bg-8 bg-layer-4 color-white" style={{backgroundImage: `url(${ article.multimedia.src })`}}>
                    <div class="plr-25 ptb-15 h-100">
                      <div class="dplay-tbl">
                        <div class="dplay-tbl-cell">
                          <h2 class="mtb-10"><a href="#">
                            <b>{article.display_title}</b></a></h2>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                )
              })}
            </div>            
            <h4 class="mb-30 mt-20 clearfix"><b>More Articles</b></h4>
            
            <div class="row">
            {props.moreArticles.map(article => {
              return (
              <div class=" col-sm-6 col-md-6 col-lg-6 col-xl-4 mb-30">
                <div class="card h-100 min-h-350x">
                  <div class="bg-white h-100">
                  
                    <div class="h-50 bg-10" style={{backgroundImage: `url(${ article.multimedia[3].url })`}}></div>
                    
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
          
          <div class="col-md-12 col-lg-3 bg-2-white ptb-50 pl-30 pl-md-15">
            <div class="row">
              <div class="col-md-12 col-lg-8">
                <div class="mx-w-md-400x mlr-md-auto">
                
                  <div class="mb-50">
                    <h5 class="mb-30"><b>Opinion</b></h5>
                    { props.articles.filter(article => article.section == 'Opinion').map(article => {
                      return (
                        <div class="sided-80x mb-20">
                          <div class="s-left">
                            <img src={article.multimedia[0].url} alt="" />
                          </div>
                          <div class="s-right">
                            <h5 class="pt-5"><a href="#"><b>{article.title}</b></a></h5>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div class="mb-50">
                    <h5 class="mb-30"><b>World</b></h5>
                    { props.articles.filter(article => article.section == 'World').map(article => {
                      return (
                        <div class="sided-80x mb-20">
                          <div class="s-center">
                            <img src={article.multimedia[1].url} alt="" />
                            <h5 class="pt-5 color-ash"><b>{article.subsection}</b></h5>
                            <h5 class="pt-5"><a href="#"><b>{article.title}</b></a></h5>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    )
  }
}

