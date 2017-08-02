import React, {Component} from 'react';
import {connect} from 'react-redux'
//import templates from "../reducers/templates";
class SendEmail extends Component{
    constructor(props){
        super(props)
        this.state = {
            templates: false
        }
        this.changeTemplateState = this.changeTemplateState.bind(this);
        this.displayTemplates=this.displayTemplates.bind(this);

    }
    changeTemplateState(){
        this.setState({templates: true});
        console.log(this.props.templates)
    }
    displayTemplates(){
        if(this.state.templates){
            let templates = this.props.templates.map((item,index) =>{ return(
                <div key={index}><p>{item.TemplateName}</p></div>
            )})
            return (
                <div>
                    {templates}
                    <button onClick={()=>{this.props.sendTemplate(this.props.guids)}}>Send</button>
                </div>
            )
        }else{
            return(
                <button onClick={()=>{this.changeTemplateState()}}>Send</button>
            )
        }
    }
    render(){
        return(
            <div>
                {this.displayTemplates()}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        templates: state.templates,
        guids: state.contacts.guids

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        sendTemplate: (guids) => {
            if(guids.length > 0){
               fetch('http://crmbetc.azurewebsites.net/api/sendemails?template='+7,{method: "POST",
                   headers: {'Accept': 'application/json','Content-Type': "application/json"},
                   body : JSON.stringify(guids)
               }).then(response => {
                   if (response.ok)
                   {
                       console.log("Your message has sent");
                   }
               })
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SendEmail);

