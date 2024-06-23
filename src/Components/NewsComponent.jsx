import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComponent extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  articles = [];
  constructor(props) {
    super(props);
    console.log("Hi this is news component");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - Newsera`;
  }

  async updateNews() {
    this.props.setProgress(10);
    console.log("Render");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json(data);
    this.props.setProgress(70);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page+1
    // this.setState({ page: this.state.page + 1 });
    const url = `${process.env.REACT_APP_NEWS_API_URL}?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    this.setState({page:nextPage})
    console.log(this.page)
    let data = await fetch(url);
    let parseData = await data.json(data);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };

  formatedDate = (isoString) => {
    const date = new Date(isoString);
 
    // IST offset in minutes (5 hours and 30 minutes)
    const istOffset = 5 * 60 + 30;

    // Get the UTC time in minutes
    const utcMinutes = date.getUTCMinutes() + date.getUTCHours() * 60;

    // Calculate IST time
    const istTimeInMinutes = utcMinutes + istOffset;
    const istHours = Math.floor(istTimeInMinutes / 60) % 24;
    const istMinutes = istTimeInMinutes % 60;

    // Format the date
    const year = date.getUTCFullYear();
    const month = date.toLocaleString("en-IN", { month: "long" });
    const day = date.getUTCDate() + (istHours < date.getUTCHours() ? 1 : 0); // Adjust day if it wraps

    // Convert to 12-hour format
    const period = istHours >= 12 ? "PM" : "AM";
    const adjustedHours = istHours % 12 || 12; // Convert hours to 12-hour format
    const formattedMinutes = istMinutes.toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");

    const formattedDate = `${month} ${day}, ${year}, ${adjustedHours}:${formattedMinutes} ${period}`;

    return formattedDate;
  };

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  render() {
    return (
      <>
        <h2
          className="text-center"
          style={{ margin: "100px 0px 20px 0px", fontFamily: "Georgia, serif" }}
        >
          Trending Headlines - {this.capitalizeFirstLetter(this.props.category)}
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={
                        element.title == null
                          ? "No title Avilable"
                          : element.title
                      }
                      desc={
                        element.description == null
                          ? "No Description Avilable"
                          : element.description
                      }
                      imgUrl={
                        element.urlToImage == null
                          ? "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg"
                          : element.urlToImage
                      }
                      newsUrl={element.url}
                      author={
                        element.author == null ? "Unknown" : element.author
                      }
                      date={this.formatedDate(element.publishedAt)}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsComponent;
