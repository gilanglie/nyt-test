import React from 'react'
import fetch from 'isomorphic-unfetch';

import Header from '../components/header';
import Footer from '../components/footer';

import MainSlider from '../components/layouts/mainslider';
import MainNews from '../components/layouts/mainnews';

var keys = 'hS6Cx4arN1UjEepA7xxuvgAmA1GWxGHF';
var url = 'https://api.nytimes.com/svc/';

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moreArticles : props.moreArticles,
      offset: 0,
    }
  }

  static async getInitialProps() {
 
    // get sections
    const getsectionList = await fetch(url + 'news/v3/content/section-list.json?api-key=' + keys);
    const sectionList = await getsectionList.json();

    // get homepage articles 
    const getmainArticles = await fetch(url + 'topstories/v2/home.json?api-key=' + keys);
    const mainArticles = await getmainArticles.json();
    
    // get movie articles 
    const getmovieArticles = await fetch(url + 'movies/v2/reviews/picks.json?api-key=' + keys + '&order=by-opening-date');
    const movieArticles = await getmovieArticles.json();

    // get more articles 
    const getmoreArticles = await fetch(url + 'news/v3/content/all/all.json?api-key=' + keys);
    const moreArticles = await getmoreArticles.json();
    
    // console.log('Show data fetched' , sectionList.results);
    return {
      sectionList: sectionList.results,
      mainArticles: mainArticles.results, 
      movieArticles: movieArticles.results,
      moreArticles : moreArticles.results,  
    };
  };

  async loadMore(){
    let articles = this.state.moreArticles;
    const offset = this.state.offset + 20;

    const getmoreArticles = await fetch(url + 'news/v3/content/all/all.json?api-key=' + keys + '&limit=20&offset=' + offset);
    const moreArticles = await getmoreArticles.json();
    articles = articles.concat(moreArticles.results)
    
    this.setState({
      moreArticles : articles,
      offset : offset
    })
  }
  render() {
    const { props, state } = this;
    
    return (
      <>
        <Header sections={props.sectionList}/>
        <MainSlider mainSlider={props.mainArticles[0]} articles={props.mainArticles}>
        </MainSlider>
        <MainNews articles={props.mainArticles} movieArticles={props.movieArticles} moreArticles={state.moreArticles}></MainNews>
        <h6 class="text-center mt-20"><a class="btn-brdr-grey color-ash plr-30 mb-30 mt-20 " onClick={() => this.loadMore()}><b>LOAD MORE</b></a></h6>
        <Footer />
      </>
    );
  }
}
  