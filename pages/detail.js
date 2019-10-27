import React from 'react'
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';

import Header from '../components/header';
import Footer from '../components/footer';

import ListNews from '../components/layouts/listnews';

var keys = 'hS6Cx4arN1UjEepA7xxuvgAmA1GWxGHF';
var url = 'https://api.nytimes.com/svc/';


export default class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moreArticles : [],
      offset: 0,
    }
    console.log('art',this.state.moreArticles)
  }
  
  static async getInitialProps({ query: { section } }) {
    console.log('start')
    // get sections
    const getsectionList = await fetch(url + 'news/v3/content/section-list.json?api-key=' + keys);
    const sectionList = await getsectionList.json();
    
    // get more articles 
    const getmoreArticles = await fetch(url + 'news/v3/content/all/'+ section +'.json?api-key=' + keys);

    const moreArticles = await getmoreArticles.json();
    
    
    return {
      router: section,
      sectionList: sectionList ? sectionList.results : [],
      moreArticles : moreArticles ? moreArticles.results : [],  
    }; 

  } 
  componentDidMount(){
    this.setState({moreArticles : this.props.moreArticles})
  }
  UNSAFE_componentWillReceiveProps (){
    this.setState({moreArticles : []})
    this.setState({moreArticles : this.props.moreArticles})
  }
  async loadMore(){
    let articles = this.state.moreArticles;
    const offset = this.state.offset + 20;

    const getmoreArticles = await fetch(url + 'news/v3/content/all/'+ this.props.router +'.json?api-key=' + keys + '&limit=20&offset=' + offset);
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
        <div class="slider-main h-500x h-sm-auto pos-relative pt-95 pb-25">
          <div class="img-bg bg-1 bg-layer-4"></div>
          <div class="container-fluid h-100 mt-xs-50">
            <div class="dplay-tbl">
              <div class="dplay-tbl-cell color-white text-center">
                <h1 class="ptb-50" style={{textTransform: 'uppercase'}}><b>{props.router}</b></h1>
              </div>
            </div>
          </div>
        </div>
        {
          state.moreArticles ? 
          <>
            <ListNews moreArticles={state.moreArticles}>
            </ListNews>
            {state.moreArticles.length == 20 ? 
            <h6 class="text-center mt-20"><a class="btn-brdr-grey color-ash plr-30 mb-30 mt-20 " onClick={() => this.loadMore()}><b>LOAD MORE</b></a></h6>
            :
            <></>}
          </>
          :
          <></>
        }
        
        
        
        <Footer />
      </>
    );
  }
}
  