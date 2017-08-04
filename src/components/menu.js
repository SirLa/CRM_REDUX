import React  from 'react';
import '../css/menu.css';
import {connect } from 'react-redux';
import {displayMailingLists} from '../actions'
import MailingLists from '../containers/MailingLists'
const Menu=({...props})=> {
    return(
        <div className={props.openStatus ? "open menu" : "menu" }>
            <ul className="list_menu">
                <li className="menu_item">

                        Contacts
                        <i className="activeMenuIcon fa fa-caret-left"></i>

                </li>
                <li className="menu_item" onClick={(event) => {props.changeMailingListsBoolean(props.boolean)}}>

                        Mailing Lists
                        <i className="activeMenuIcon fa fa-caret-left"></i>

                </li>
                {console.log(props.boolean)}
                {props.boolean?<MailingLists/>:<div></div>}
            </ul>
        </div>
    );
}
const mapStateToProps = (state) => {
    //console.log(state.mailingLists.boolean);
    return {
        boolean: state.mailingLists.boolean,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeMailingListsBoolean: (boolean) => {
            boolean = true;
            dispatch(displayMailingLists(boolean));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);