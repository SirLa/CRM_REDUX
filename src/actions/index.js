
export const getContacts = (data) => {
    return {
        type: "GET_CONTACTS",
        contacts: data
    }
}

export const collectGuIds = (guids) =>{
    return {
        type: "COLLECT_GUIDS",
        guids: guids
    }
}

export const deleteContacts = (data,guids) =>{
    return {
        type: "DELETE_CONTACTS",
        contacts: data,
        guids: guids
    }
}
export const getTemplates = (data) =>{

    return {
        type: "GET_TEMPLATES",
        templates: data
    }
}
export const getMailingLists = (data) =>{
    return {
        type: "GET_MAILING_LISTS",
        mailingLists: data
    }
}
export const displayMailingLists = (boolean) => {
    return {
        type: "DISPLAY_MAILING_LISTS",
        boolean: boolean
    }
}