import React from 'react';
import logo from './logo.svg';
import './App.css';
import {render} from "react-dom";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";


class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="site">
                <Header />

                <div className="container">
                    <main>
                        <h3>Курс валют на 14 июля 2020</h3>
                        <div className="flex-container">
                            <div className="block flex-item">
                                <div className="currency-name">USD</div>
                                <div className="currency-in">1500 kr</div>
                                <div className="currency-out">1200 kr</div>
                            </div>

                            <div className="block flex-item">
                                <div className="currency-name">USD</div>
                                <div className="currency-in">1500 kr</div>
                                <div className="currency-out">1200 kr</div>
                            </div>

                            <div className="block flex-item">
                                <div className="currency-name">USD</div>
                                <div className="currency-in">1500 kr</div>
                                <div className="currency-out">1200 kr</div>
                            </div>
                        </div>
                        <h3>Калькулятор обмена</h3>
                        <div className="block">
                            <div>я хочу</div>
                            <div><label><input type="radio" name="radio" defaultValue="0"/>купить</label></div>
                            <div><label><input type="radio" name="radio" defaultValue="1"/>продать</label></div>
                            <div>
                                <input type="number" defaultValue="150"/>
                                <select name="" id="">
                                    <option defaultValue="USD">USD</option>
                                    <option defaultValue="RUB">RUB</option>
                                    <option defaultValue="EUR">EUR</option>
                                </select>
                            </div>
                            <div>
                                <h4>Результат</h4>
                                <ul className="calc-res">
                                    <li>EUR 150</li>
                                    <li>EUR 150</li>
                                    <li>EUR 150</li>
                                </ul>
                            </div>
                        </div>
                    </main>

                </div>
                <div className="container" id="cookie_info">
                    <div className="site-content">
                        <div className="well">На нашем сайте мы исползуем cookie для сбора
                            информации технического характера
                            &nbsp;<a className="btn btn-primary btn-sm">Ok</a>
                        </div>
                    </div>

                    <footer id="footer" className="footer">
                        <div className="footer-bottom">
                            <div className="container">
                                <div className="flex-container">
                                    <div className="flex-item">
                                        <h1 className="footer-title">
                                            <a href="https://itgid.info/unit/react-lite-level?unit=react-router">

                                            </a></h1>
                                        <p>All Rights Reserved</p>
                                    </div>
                                    <div className="flex-item">
                                        <div className="module-body">
                                            <ul className="list-unstyled">
                                                <li><a href="/contact/" tooltip="Контакты">Контакты</a></li>
                                                <li><a href="/d">Гарантии</a></li>
                                                <li><a href="/s">О сервисе</a></li>
                                                <li><a href="/o">Условия возврата</a></li>
                                                <li><a href="/p">Соглашение о использовании сервиса</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-bar">
                            <div className="flex-container">
                                <div className="flex-item">
                                    <ul className="link">

                                    </ul>
                                </div>
                                <div className="flex-item">
                                    <div className="clearfix payment-methods">
                                        <ul>
                                            <img src="#" data-toggle="tooltip" data-placement="top"
                                                 data-original-title="www.webmoney.ru" alt=""/>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </footer>

                </div>
            </div>
        );
    }
}

export default App;
