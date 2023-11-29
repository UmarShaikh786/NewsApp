import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


    constructor()
    {
        super()
         this.state={
            articles:[],
            loading:false
        }
    }
    async componentDidMount() {
            let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=94e7ce318c464d5287b177b1ba37a292";
            
        fetch(url).then((res) => res.json())
            .then((json) => {
                this.setState({
                    articles: json.articles,
                    loading: false
                });
            });
    
    }
  render() {
    return (
            <div className='container mt-3 '>
            <h2>News- Top Headings </h2>
            <div className="row">
            {this.state.articles.map((element)=>{
                return<div className="col-md-3 mx-2" key={element.url} >
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} newsUrl={element.url} imageUrl={element.urlToImage}/>
            </div>
        })}
       
        </div>
      </div>
    )
  }
}

export default News
