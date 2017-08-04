let initialState = {
    mailingLists: [],
    boolean: false
}

const mailingList = (state=initialState, action) => {
    switch(action.type) {
        // case "GET_MAILING_LISTS": {
        //
        //     return Object.assign({}, state, {contacts: contacts});
        // }
        case "GET_MAILING_LISTS": {
           // console.log(action.exMailingLists)
           //  return {
                //Object.assign({}, state, {mailingList: [action.mailingLists]});
                // ...state,
                // mailingList: action.exMailingLists
                let mailingLists = [...action.mailingLists];
            return Object.assign({}, state, {mailingLists: mailingLists});

            }
        case "DISPLAY_MAILING_LISTS": {
            return {
                ...state,
                boolean: action.boolean
            }

        }
        default: {
            return state;
        }
    }
}
export default mailingList;