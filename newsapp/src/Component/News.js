import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {


    constructor(props)
    {
        super(props)
         this.state={
            articles:[],    
            loading:false,
            page:1,
            totalResults:this.totalResults,
            toploading:this.props.progress
            
        }
        document.title=`${this.capitallize(this.props.category)} -Kayamat-Tak News`
    }
    static defaultProps = {
        category:this.category,
        country:this.country
      }
       capitallize=(string)=> {
        return string.charAt().toUpperCase() + string.slice(1);
         
    
    }
    

        fetchMoreData=async()=>{
  this.setState({page:this.state.page+1})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        
        fetch(url).then((res) => res.json())
            .then((json) => {
                this.setState({
                    articles:this.state.articles.concat(json.articles),
                    loading:false,
                    totalResults:json.totalResults
                });
            });
        
      }
      async UpdateNews(){
        this.props.progress(30)
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        // this.setState({loading:true})
        this.props.progress(70)
        fetch(url).then((res) => res.json()) 
         
            .then((json) => {
                this.setState({
                    articles: json.articles,
                    loading:false,
                    totalResults:json.totalResults
                });
            });
    
            this.props.progress(100)
      }
    HandleNext=()=>{
        console.log("Next")
      
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94e7ce318c464d5287b177b1ba37a292&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        // this.setState({loading:true})
        // fetch(url).then((res) => res.json())
        //     .then((json) => {
        //         this.setState({
        //             articles: json.articles,
        //             page:this.state.page+1,
        //             loading:false
        //         });
        //     });
    
            this.setState({
                page:this.state.page+1
            })
            this.UpdateNews();
        
    }
    
    HandlePrevieus=()=>{
        // console.log("Previus")
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94e7ce318c464d5287b177b1ba37a292&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        // this.setState({loading:true})
        // fetch(url).then((res) => res.json())
        //     .then((json) => {
        //         this.setState({
        //             articles: json.articles,
        //             page:this.state.page-1,
        //             loading:false
        //         });
        //     });
        this.setState({
            page:this.state.page-1
        })
        this.UpdateNews();
    
    
    }
    async componentDidMount() {
        //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94e7ce318c464d5287b177b1ba37a292&pageSize=${this.props.pagesize}`;
        //     this.setState({loading:true})
        // fetch(url).then((res) => res.json())
        //     .then((json) => {
        //         this.setState({
        //             articles: json.articles,
        //             loading: false,
        //             totalResults:json.totalResults
                    
        //         });
        //     });
        
        this.UpdateNews();
    
    }
  render() {
    return (
        <>
        <h2 className='h2 text-center mb-3'>News- Top {this.capitallize(this.props.category)} Headings </h2>
           
           {this.state.loading && <Spinner/>}
            <InfiniteScroll
      dataLength={this.state.articles.length}
      next={this.fetchMoreData}
      hasMore={this.state.articles.length!==this.state.totalResults}
      loader={<Spinner/>}
    >
        
            <div className='container'>
            <div className="row">
            
                      {this.state.articles.map((element)=>{
                return<div className="col-md-4 " key={element.url} >
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} newsdate={element.publishedAt} source={element.source.name}/>
            </div>
        })}
        </div> 
        </div>
        </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between m-3 ">
        <button rel="noreferrer" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.HandlePrevieus}>Previus</button>
        <button  rel="noreferrer"  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-dark" onClick={this.HandleNext}>Next</button>
         </div>  */}
     </>
    )
  }
}

export default News
