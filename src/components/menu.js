import React  from 'react';
import '../css/menu.css';
import MailingLists from '../containers/MailingLists'
const Menu=({...props})=> {
    return(
        <div className={props.openStatus ? "open menu" : "menu" }>
            <ul className="list_menu">
                <li className="menu_item">

                        Contacts
                        <i className="activeMenuIcon fa fa-caret-left"></i>

                </li>
                <li className="menu_item">

                        Mailing Lists
                        <i className="activeMenuIcon fa fa-caret-left"></i>

                </li>
                <MailingLists/>
            </ul>
        </div>
    );
}
export default Menu;