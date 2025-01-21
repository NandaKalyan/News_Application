import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}>
            <span className="badge rounded-pill bg-danger"
              style={{ left: "92%", zIndex: "1" }}>
              {source}</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>Published on {new Date(date).toUTCString()}</small></p>
            <a href={newsurl} target='_blank' rel="noopener noreferrer" className="btn btn-dark d-flex justify-content-center ">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
