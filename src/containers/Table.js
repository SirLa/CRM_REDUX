import React, {Component} from 'react';
import {connect } from 'react-redux';
import axios from 'axios';
import {getContacts,getTemplates} from '../actions';
import TableRow from '../components/TableRow';
import DeleteContact from './DeleteContact';
import SendEmail from './SendEmail';

class Table extends Component{
    componentDidMount(){
        this.props.getContacts();
        this.props.getTemplates()
    }

    render(){
        return (
            <div>
                <TableRow/>
                <DeleteContact/>
                <SendEmail/>
            </div>
        )
    }

}
const mapStateToProps = (state) => {

    return {
        contacts: state.contacts.contacts,
        templates: state.contacts.templates
    }
}
const mapDispatchToProps = (dispatch)  => {
    return {
        getContacts: () => {
            axios.get("http://crmbetc.azurewebsites.net/api/contacts").then(res => {dispatch(getContacts(res.data))})
        },
        getTemplates: () => {
            axios.get("http://crmbetc.azurewebsites.net/api/templates").then(res => {dispatch(getTemplates(res.data))})
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Table);
