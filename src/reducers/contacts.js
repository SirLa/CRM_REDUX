let initialState = {
    contacts: [],
    guids: []
}

const contacts = (state=initialState, action) => {
    switch(action.type) {

        case "GET_CONTACTS": {
            let contacts = [...action.contacts];
            return Object.assign({}, state, {contacts: contacts});
        }
        case "COLLECT_GUIDS": {
            return{
                ...state,
                guids: action.guids
            }
        }
        case "DELETE_CONTACTS": {
            return{
                ...state,
                contacts: action.contacts,
                guids: action.guids
            }
        }

        default: {
            return state;
        }
    }
}
export default contacts;
