import React from 'react';
import {connect } from 'react-redux';
import {collectGuIds} from '../actions'

const TableRow = (props) => {
    const contacts = props.contacts.map((item,index) => {

        return (
            <tr key={index}>
                <td><input type="checkbox" id={index}
                           onClick={(event) => {
                               props.collectGuIds(index, event, props.contacts, props.guids)
                           }}/></td>
                <td>{item["Full Name"]}</td>
                <td>{item["Company Name"]}</td>
                <td>{item["Country"]}</td>
                <td>{item["Position"]}</td>
                <td>{item["Email"]}</td>
            </tr>
        )
    });

    return(

        <div>
            <table>
                <tbody>
                    {contacts}
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts,
        guids: state.contacts.guids
    }
}
const mapDispatchToProps = (dispatch) => {

    return {

    collectGuIds: (index, event, contacts, guids) => {
        if(event.target.checked === true) {
            guids.push(contacts[index].GuID);
            dispatch(collectGuIds(guids));

        } else {
            for(let i in guids) {
                if(contacts[index].GuID === guids[i]){
                    guids.splice(i,1);
                    dispatch(collectGuIds(guids))
                }
            }
        }
        console.log(guids);
    }
}}
export default connect(mapStateToProps, mapDispatchToProps)(TableRow);