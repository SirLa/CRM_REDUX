import React, {Component} from 'react';
import {connect } from 'react-redux';
import axios from 'axios';
import {getContacts,getTemplates,getMailingLists} from '../actions';

class MailingLists extends Component{
    componentDidMount(){
        this.props.getMailingLists();
    }


    render() {
        //console.log(this.props.mailingLists)
        //if(this.props && this.props.mailingLists){

            //console.log(this.props.mailingLists)
            const options = this.props.mailingLists.map((item, index) => {
                return <tr key={index} className="options">
                    <td className="mailingListName"><span id={index}>{item["EmailListName"]}</span>
                    </td>
                </tr>
            })
    //}

            return (
                <div className="choose_mailing_list">
                    <div className="mailLingListSelection">
                        <table className="mailingListItemsContainer">
                                <tbody>{options}</tbody>
                        </table>
                    </div>
                </div>
            )
    }
}
const mapStateToProps = (state) => {

    return {
        boolean: state.mailingLists.boolean,
        mailingLists:state.mailingLists.mailingLists
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMailingLists: () => {
            axios.get("http://crmbetc.azurewebsites.net/api/emaillists").then(res => {dispatch(getMailingLists(res.data))})
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(MailingLists);
