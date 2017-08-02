const templates = (state=[], action) => {
    switch(action.type){
        case "GET_TEMPLATES":{
            return action.templates
        }
        default : {
            return state
        }
    }
}

export default templates
