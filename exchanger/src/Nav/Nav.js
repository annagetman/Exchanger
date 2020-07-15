import React from 'react';
import './Nav.css'


class Nav extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/">Пункты обмена</a></li>
                    <li><a href="/">Контакты</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
