import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
import { metaMaskLogin, metaMaskLogout } from '../../util/web3.js'
export default class Navigation extends Component {
    onMetaMaskLogin = () => {
        let { isMetaMaskLogin } = this.props.contract
        if (!isMetaMaskLogin) {
            metaMaskLogin()
        }
    }
    onMetaMaskLogout = () => {
        let { isMetaMaskLogin } = this.props.contract
        if (isMetaMaskLogin) {
            metaMaskLogout()
        }
    }
    render() {
        let { userAddress = '', isMetaMaskLogin } = this.props.contract
        return (
            <div className="header__wrapper">
                <div className="header__container layout__container">
                    <div className="logo__wrapper">
                        <a href="/"><img src="/logo.png" className="logo--img" alt="logo" /></a>
                    </div>
                    <div className="navi__wrapper">
                        <div className="navi__container">
                            <NavLink className="navi-item" to={`/nodelist`} activeClassName="active">Node List</NavLink>
                            <NavLink className="navi-item" to={`/explorer`} activeClassName="active">Explorer</NavLink>
                            <NavLink className="navi-item" to={`/myaccount`} activeClassName="active">My Account</NavLink>
                        </div>
                    </div>
                    <div className="metamask__status__panel" >
                        <svg fill="none" height="33" width="35" xmlns="http://www.w3.org/2000/svg"><g strokeLinecap="round" strokeLinejoin="round" strokeWidth=".25"><path d="M32.958 1l-13.134 9.718 2.442-5.727z" fill="#e17726" stroke="#e17726"/><g fill="#e27625" stroke="#e27625"><path d="M2.663 1l13.017 9.809-2.325-5.818zM28.23 23.534l-3.495 5.338 7.483 2.06 2.143-7.282zm-26.957.116l2.13 7.282 7.47-2.06-3.481-5.339z"/><path d="M10.47 14.515L8.393 17.65l7.405.337-.247-7.97zm14.68 0l-5.157-4.587-.169 8.06 7.405-.337zM10.873 28.872l4.482-2.164-3.858-3.006zm9.393-2.164l4.469 2.164-.61-5.17z"/></g><path d="M24.735 28.872l-4.47-2.164.365 2.903-.04 1.23zm-13.862 0l4.157 1.97-.026-1.231.351-2.903z" fill="#d5bfb2" stroke="#d5bfb2"/><path d="M15.108 21.784l-3.715-1.088 2.624-1.205zm5.405 0l1.09-2.293 2.638 1.205z" fill="#233447" stroke="#233447"/><path d="M10.873 28.872l.65-5.338-4.131.116zm13.225-5.338l.637 5.338 3.494-5.222zm3.132-5.884l-7.406.338.689 3.796 1.09-2.293 2.638 1.205zm-15.837 3.046l2.624-1.205 1.091 2.293.689-3.796-7.405-.337z" fill="#cc6228" stroke="#cc6228"/><path d="M8.392 17.65l3.105 6.052-.104-3.006zm15.849 3.046l-.117 3.006 3.105-6.051zm-8.444-2.708l-.689 3.796.87 4.484.196-5.91zm4.027 0l-.364 2.358.182 5.922.87-4.484z" fill="#e27525" stroke="#e27525"/><path d="M20.513 21.784l-.87 4.484.623.44 3.858-3.006.117-3.006zm-9.12-1.088l.104 3.006 3.858 3.006.624-.44-.87-4.484z" fill="#f5841f" stroke="#f5841f"/><path d="M20.59 30.842l.04-1.231-.338-.285h-4.963l-.325.285.026 1.23-4.157-1.969 1.455 1.192 2.95 2.035h5.053l2.962-2.035 1.442-1.192z" fill="#c0ac9d" stroke="#c0ac9d"/><path d="M20.266 26.708l-.624-.44H15.98l-.624.44-.35 2.903.324-.285h4.963l.338.285z" fill="#161616" stroke="#161616"/><path d="M33.517 11.353L34.62 5.99 32.958 1l-12.692 9.394 4.885 4.12 6.898 2.01 1.52-1.776-.663-.48 1.053-.958-.806-.622 1.052-.804zM1 5.989l1.117 5.364-.714.532 1.065.803-.805.622 1.052.959-.663.48 1.52 1.774 6.899-2.008 4.884-4.12L2.663 1z" fill="#763e1a" stroke="#763e1a"/><path d="M32.049 16.523l-6.898-2.008 2.078 3.136-3.105 6.051 4.106-.052h6.131zM10.47 14.515l-6.898 2.008-2.3 7.127h6.12l4.105.052-3.105-6.051zm9.354 3.473l.442-7.594 2-5.403h-8.911l2 5.403.442 7.594.169 2.384.013 5.896h3.663l.013-5.896z" fill="#f5841f" stroke="#f5841f"/></g></svg>
                        {
                            isMetaMaskLogin ?
                                <div>
                                    <p>{`${userAddress.slice(0, 6)}...${userAddress.slice(-6)}`}</p>
                                    <p className="metamask__login-status--conntect" onClick={this.onMetaMaskLogout}>Connected</p>
                                </div>
                                :
                                <p className="metamask__login-button" onClick={this.onMetaMaskLogin}>Connect Wallet</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
