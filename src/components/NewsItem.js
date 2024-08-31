import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, url, author, date, source } = this.props;
    return (
      <div className="card" key={url}>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: 1 }}
        >
          {source}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on {date}
            </small>
          </p>
          <a href={url} target="_blank" className="btn btn-dark btn-sm">
            read more
          </a>
        </div>
      </div>
    );
  }
}
