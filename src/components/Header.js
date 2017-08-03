
import React, { Component } from 'react';
import '../css/header.css';
import Menu from './Menu';
class Header extends Component{
    constructor(){
        super();
        this.state={
            menuStatus:false
        };
        this.changeMenuStatus = this.changeMenuStatus.bind(this);
    }
    changeMenuStatus() {
        this.setState({menuStatus:!this.state.menuStatus});
    }
    render(){
        return(
            <div className="header_container flex">
                <div className="row flex">
                    <div className="menu_icon" id="menu_icon" onClick={this.changeMenuStatus}>
                        <div className="icon_item"></div>
                        <div className="icon_item"></div>
                        <div className="icon_item"></div>
                    </div>
                    <div className="header flex">
                        <div className="logo">
                            <h1>BetCRM</h1>
                        </div>
                    </div>
                </div>
                <Menu openStatus={this.state.menuStatus} />
            </div>
        );
    }
}
export default Header;