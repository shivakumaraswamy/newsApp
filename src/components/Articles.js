import React from 'react';
import axios from 'axios';
import './Articles.css';
import SearchBar from './SearchBar';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
        this.onSearchBarSubmit = this.onSearchBarSubmit.bind(this);
    }

    componentDidMount() {
        this.getNewsResults();  //Get the latest articles on initial render
    }

    generateUrl(searchKey) {
        //Get the api key from .env file and create url based on search term
        const api = process.env.REACT_APP_NEWS_API_KEY;  
        return searchKey ? `https://newsapi.org/v2/everything?q=${searchKey}&language=en&apiKey=${api}` : `http://newsapi.org/v2/top-headlines?country=gb&apiKey=${api}`;
    }

    getNewsResults(searchKey) {
        const url = this.generateUrl(searchKey);
        axios
            .get(url)
            .then(res => {
                const articles = res.data.articles;
                this.setState({ articles });  //Update the state with response data
            })
            .catch(error => {
                console.log(error);
            });
    }

    onSearchBarSubmit(searchKey) {
        this.getNewsResults(searchKey);  //Get the news results on click of search button
    }

    getTime(publishDate) {
        const date = new Date(publishDate).toString();
        return date;
    }

    render() {
        return (
            <div className={'articlesContainer'}>
                <SearchBar onSubmit={this.onSearchBarSubmit} />
                <ul data-testid='show-articles'>
                    {this.state.articles.map((article, i) =>
                        <li key={i}>
                            <a href={article.url}>
                                <img className={'articleImg'} src={article.urlToImage} alt='article ' />
                            </a>
                            <span>
                                <a href={article.url} className={'title'}><strong>{article.title}</strong></a>
                                <p className={'dateContainer'}>{article.author} | {this.getTime(article.publishedAt)}</p>
                                <p className={'description'}>{article.description}</p>
                            </span>
                        </li>
                    )}
                </ul>

            </div>
        );
    }
}

export default Articles;