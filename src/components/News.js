import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles: 0
    };
    document.title = `${this.capitalize(this.props.category)} - NewsFlamingo`;
  }

  capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  updateNews = async () => {
    this.props.setProgress(0);
    let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=${this.props.language}&country=in&apikey=${this.props.apiKey}`;
    this.setState({ loading: true });
    this.props.setProgress(20);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(80);
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalArticles, loading: false });
    this.props.setProgress(100);
  };

  componentDidMount() {
    this.updateNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.language !== this.props.language || prevProps.category !== this.props.category) {
      this.updateNews();
    }
  }

  render() {
    return (
      <>
        {this.state.loading && <Spinner />}
        <div className='container my-4'>
          <h2 className='text-center' style={{ marginTop: '100px' }}>
            NewsFlamingo - Top {this.capitalize(this.props.category)} Headlines ({this.props.language.toUpperCase()})
          </h2>
          <div className='row my-4'>
            {this.state.articles.map((element) => (
              <div className='col-12 col-sm-6 col-md-4 my-4 mx-auto' key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.image}
                  newsurl={element.url}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default News;
