import React from 'react';
import {connect} from 'react-redux';
import {getContacts, deleteContacts} from '../actions'


const DeleteContact = (props) => {
        return (
            <div className="delete">
                <button onClick={() => {props.deleteContacts(props.contacts,props.guids)}}>Delete</button>
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
        deleteContacts: (contacts, guids) => {
            fetch('http://crmbetc.azurewebsites.net/api/contacts', {
                method: "DELETE",
                headers: {'Accept': 'application/json', 'Content-Type': "application/json"},
                body: JSON.stringify(guids),
            }).then(response => {
                if (response.ok) {
                    dispatch(deleteContacts(contacts, guids))
                }
            })

            for(let i in guids){
                for (let j in contacts) {
                    if (guids[i] === contacts[j].GuID) {
                        contacts.splice(j, 1)
                    }
                }
            }
            dispatch(getContacts(contacts))
        }
    }
}
export  default connect(mapStateToProps,mapDispatchToProps)(DeleteContact);