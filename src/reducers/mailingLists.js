let initialState = {
    mailingLists: [],
}

const mailingList = (state=initialState, action) => {
    switch(action.type) {
        // case "GET_MAILING_LISTS": {
        //
        //     return Object.assign({}, state, {contacts: contacts});
        // }
        case "GET_MAILING_LISTS": {
            return{
                ...state,
                mailingList: action.mailingLists

            }
        }
        default: {
            return state;
        }
    }
}
export default mailingList;