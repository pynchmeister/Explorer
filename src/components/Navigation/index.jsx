import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
export default class Navigation extends Component {
    render() {
        return (
            <div className="header__wrapper">
                <div className="header__container layout__container">
                    <div className="logo__wrapper">
                        <span className="logo--img"></span>
                        <span className="logo--name">DOS NETWORK</span>
                    </div>
                    <div className="navi__wrapper">
                        <div className="navi__container">
                            <NavLink className="navi-item" to={`/explorer`} activeClassName="active">Explorer</NavLink>
                            <NavLink className="navi-item-disabled" to={`/nodelist`} activeClassName="active">Node List</NavLink>
                            <NavLink className="navi-item-disabled" to={`/myaccount`} activeClassName="active">History</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
