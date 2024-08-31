import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export default class News extends Component {
  article = [
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Hindustan Times",
      title:
        "Your YouTube premium plan will cost more now, family pack fee rises over 50% - Hindustan Times",
      description: null,
      url: "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQR3VmQVlmMnB0WlhjYjJhN084dy1SSGo5NjZGdnZpSU9ZQkR4dlBybXRmNmpCQ0VTRXlJQ3k4V0FFYjFDR01ZMmo2amFTVVJreUhIc3pYc0h0cEhtMER3eEFPamtDV2xGSEZVZFcwb0laTl9qaEtXZ2NpVXZrbUY1U1dKUi1vQ25qZ1k4anV5blBtcVZrV3hTZ3NsaWlXbmtwNThCbVIwcmtqZWRDR3c5Tmk5SHU3T1VIQnZCbDhvQUEwT0pQWU5aWkxfTVJDcHNH0gHWAUFVX3lxTE5YNmM3VlZVYzREM3VnSlY1blphYUh2VTcwR1p5Si1PM3VhaGJSeWhXVFhGcXUxcng2TjNnbjZEd3l3aWtVTVFmRVZPREJFaHY3anQ2S2ZockNHQm5sQjhqTzJUM0V3Zk51R2EwaGVLZkQ0bDRobjJDRUZlbDdjRWNSc1kwbi0zVVJBNmV6UU5qMDhfSGxzOUVmYm1lX0NRQUMxZ2ZnenA1T3RYazJscVgxRW5IelJnWURnZ1FFZkFCaHFFSEtPRkNyY2ZXcU14elRseEZkYkE?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-28T06:19:23Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Bar & Bench - Indian Legal News",
      title:
        "Bail is rule and jail is exception even in PMLA cases: Supreme Court - Bar & Bench - Indian Legal News",
      description: null,
      url: "https://news.google.com/rss/articles/CBMikAFBVV95cUxOS3Q1X21YTjhYLVNKVlFwMjZKSEQ0NlhCVGx2TXJNdTFsMmVVVnhtNnZLMWFkZ2o5SFQ2VkEzTHpnaEN0UFpaNTVob3pkN3daRklwZ0d0N09HR2tjT3NQZXNOREV3Vk4tTzlUMTBOU1Z6cUQ4NDhHZTBJdEw2LVRBWG1UWE52Qm91VWtEcEE3UG3SAZ4BQVVfeXFMUHJHWWtMY3BmbDBkWXlyWk9OcXIyMGhoalladGEwSHNkSGFnbE1PQnRrRlNFNmd5b0ZjM3BCdW1mVGY2cUZiU3VJaFJDR0hlZEFhUFNNUi14NnhLUjRXWEVZRnhBY25aTFJzNkQ5VWpXZlpBbDc4c2ZjSVRoVTdTcFFlREg2Y3hkVWJ1WFhxQ1Rjcmo3OUUxdHdYdGNKb0E?oc=5",
      urlToImage: null,
      publishedAt: "2024-08-28T05:55:34Z",
      content: null,
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.article,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7abfe00329ef48288c7773f9cfe21745&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    console.log("workking");
  }

  prevPage = async () => {
    console.log(this.state.page - 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=7abfe00329ef48288c7773f9cfe21745&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  nextPage = async () => {
    console.log(this.state.page + 1);
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=7abfe00329ef48288c7773f9cfe21745&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      console.log(url);
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Loading />}
        <div className="row my-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    url={element.url}
                    source={element.source.name}
                    date={element.publishedAt}
                    author={element.author}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://imgs.search.brave.com/m-qVZdIE6tAwdssvVOlrJY5obZpdpnQJK8L4LuzK95A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQ0LzU0Lzk3/LzM2MF9GXzc0NDU0/OTcwMF9zZ2piZ0tx/RWVmQkRwRUxNS3Zs/MlJ3am1DRGR5elNn/Vi5qcGc"
                    }
                    description={element.description}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark btn-sm"
            onClick={this.prevPage}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark btn-sm"
            onClick={this.nextPage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
