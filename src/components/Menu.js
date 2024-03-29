import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Menu extends Component {

    _prepare_menu_item() {
        let data = [
            { to: '', title: 'Home', exact: true },
            { to: 'about', title: 'About', exact: true },
            { to: 'news', title: 'News', exact: false },
            { to: 'contact', title: 'Contact', exact: true },
            { to: 'login', title: 'Login', exact: true },
            { to: 'account', title: 'Account', exact: true }
            
        ];
        return data;
    }

    loop_menu_item(menus) {
        let nav_Link = null;
        if (menus.length > 0) {
            nav_Link = menus.map((item, index) => {
                return (
                    <li key={index}><NavLink exact={item.exact} key={index} to={`/${item.to}`} activeClassName="active">{item.title}</NavLink></li>
                );
            })
        }
        return nav_Link;
    }

    render() {
        console.log('Menu');
        console.log(this.props.match);
        return(
            <ul className="main-menu">
                { this.loop_menu_item(this._prepare_menu_item()) }
            </ul>
        );
    }
}

export default Menu;