import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Category from './Category';
import ListArticles from './ListArticles';
class News extends Component {
    render() {
        console.log('News Component')
        console.log(this.props.match)
        return (
            <div className="main-content">
                <div className="content-wrapper">
                    <Route exact path={this.props.match.path} component={ListArticles}></Route>
                    <Route path={`${this.props.match.url}/:slug`} component={Category} />
                </div>
                <div className="sidebar">
                    <h2>Categories</h2>
                    <ul>
                        <li><Link to={`${this.props.match.url}/reactjs`}>ReactJS</Link></li>
                        <li><Link to={`${this.props.match.url}/ror`}>Ruby on Rails</Link></li>
                        <li><Link to={`${this.props.match.url}/php`}>PHP</Link></li>
                        <li><Link to={`${this.props.match.url}/wordpress`}>Wordpress</Link></li>
                        <li><Link to={`${this.props.match.url}/drupal`}>Drupal</Link></li>
                        <li><Link to={`${this.props.match.url}/joomla`}>Joomla</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default News;