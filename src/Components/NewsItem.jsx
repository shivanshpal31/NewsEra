import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl, author, date } = this.props;

    return (
      <div>
        <div className="card my-3" style={{ fontFamily: "Georgia, serif" }}>
          <img
            src={imgUrl}
            height={"250px"}
            width={"250px"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                whiteSpace: "nowrap",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </h5>
            <p
              className="card-text"
              style={{
                marginTop:"20px",
                lineHeight:"30px",
                display: "-webkit-box",
                WebkitLineClamp: 2, // '-webkit-line-clamp' in CSS
                WebkitBoxOrient: "vertical", // '-webkit-box-orient' in CSS
                overflow: "hidden",
                textOverflow: "ellipsis", // 'text-overflow' in CSS
                whiteSpace: "normal", // 'white-space' in CSS
              }}
            >
              {desc==="No Description Avilable"?"This preview offers a formal overview, setting the stage for the detailed discussion in the full article.":desc}
            </p>
            {/* <p className="card-text"><small className="text-muted">Source: <b>{source}</b></small></p> */}
            <p className="card-text">
              <small className="text-muted">
                By <b>{author}</b> on <b>{date}</b>
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-warning"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

// {marginTop:"20px", whiteSpace: "nowrap", width:"100%",overflow: "hidden",textOverflow: "ellipsis"}
// This preview gives a formal and comprehensive overview of the content, setting the stage for the