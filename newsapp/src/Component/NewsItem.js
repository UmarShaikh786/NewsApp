import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
        <>
      <div className='mt-3 ms-5'>
        <div className="card border-0 " style={{width: '18rem',height:'25rem'}}>
  <img src={imageUrl?imageUrl:"/none.png"} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
      </>
    )
  }
}

export default NewsItem
