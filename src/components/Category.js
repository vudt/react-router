import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListArticles from './ListArticles';

class Category extends Component {
    render () {
        console.log('Category')
        console.log(this.props.match.params.slug)
        return(
            <div>
                <h2>Category {this.props.match.params.slug}</h2>
                
            </div>
            
        )
    }
}

export default Category;