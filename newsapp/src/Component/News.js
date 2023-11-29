import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


    constructor()
    {
        super()
         this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:this.totalResults
            
        }
    }

    HandleNext=()=>{
        console.log("Next")
      
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=94e7ce318c464d5287b177b1ba37a292&page=${this.state.page + 1}&pageSize=20`;
            
        fetch(url).then((res) => res.json())
            .then((json) => {
                this.setState({
                    articles: json.articles,
                    page:this.state.page+1
                });
            });
    
        
    }
    
    HandlePrevieus=()=>{
        console.log("Previus")
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=94e7ce318c464d5287b177b1ba37a292&page=${this.state.page - 1}&pageSize=20`;
            
        fetch(url).then((res) => res.json())
            .then((json) => {
                this.setState({
                    articles: json.articles,
                    page:this.state.page-1
                });
            });
    
    }
    async componentDidMount() {
            let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=94e7ce318c464d5287b177b1ba37a292";
            
        fetch(url).then((res) => res.json())
            .then((json) => {
                this.setState({
                    articles: json.articles,
                    loading: false,
                    totalResults:json.totalResults
                });
            });
    
    }
  render() {
    return (
        <>
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
        <div className="container d-flex justify-content-between m-3 ">
        <button rel="noreferrer" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.HandlePrevieus}>Previus</button>
        <button  rel="noreferrer"  disabled={this.state.page+1>Math.ceil(this.state.totalResults/21)} className="btn btn-dark" onClick={this.HandleNext}>Next</button>
        </div>
      </>
    )
  }
}

export default News
