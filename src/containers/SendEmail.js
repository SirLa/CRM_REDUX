import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/send.css';
//import templates from "../reducers/templates";
class SendEmail extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: "",
            templates: false
        }
        this.selectedTemplate = [];
        this.getTemplateId = this.getTemplateId.bind(this);
        this.changeTemplateState = this.changeTemplateState.bind(this);
        this.displayTemplates=this.displayTemplates.bind(this);

    }
    changeTemplateState(){
        this.setState({templates: true});
        console.log(this.props.templates)
    }
    getTemplateId(event){
        this.setState({id: event.target.id})
        this.selectedTemplate.push(event.target);
       for(let i in this.selectedTemplate){
           this.selectedTemplate[i].classList.remove("selectedTemplate");
       }
       this.selectedTemplate[this.selectedTemplate.length-1].classList.add("selectedTemplate");

    }
    displayTemplates(){
        if(this.state.templates){
            let templates = this.props.templates.map((item,index) =>{ return(
                <div key={index}><p className="template" onClick={this.getTemplateId} id={item.TemplateId}>{item.TemplateName}</p></div>
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

// import React, {Component} from 'react';
// import {connect } from 'react-redux';
// import {send} from '../actions'
// import '../css/style.css'
// class SendEmail extends Component{
//     constructor(props){
//         super(props)
//         this.selectedTemplate=[];
//         this.changeDisplayTemplates = this.changeDisplayTemplates.bind(this);
//         this.templateId = this.templateId.bind(this);
//         this.state ={
//             id : "",
//             templates: false,
//         }
//     }
//     templateId(event){
//         this.setState({id: event.target.id})
//         this.selectedTemplate.push(event.target);
//         for(let i in this.selectedTemplate){
//             this.selectedTemplate[i].classList.remove("selectedTemplate");
//         }
//         this.selectedTemplate[this.selectedTemplate.length-1].classList.add("selectedTemplate");
//     }
//     changeDisplayTemplates(){
//         this.setState({templates:true});
//     }
//     displayTemplates() {
//         if(this.state.templates){
//             let templates = this.props.templates.map((item,index) => {
//                 return (
//                     <div key={index}><p className="template" onClick={this.templateId} id={item.TemplateId}>{item.TemplateName}</p></div>
//                 )
//             })
//             return (
//                 <div>
//                     {templates}
//                     <button onClick={() => {
//                         if(this.props.guids.length > 0){
//                             this.setState({templates:false}
//                             )};this.props.sendEmail(this.state.id, this.props.guids)}}>
//                         send
//                     </button>
//                 </div>
//             )
//         }else {
//             return (
//                 <button onClick={this.changeDisplayTemplates} > send </button>
//             )
//         }
//     }
//     render(){
//         return (
//             <div className="templates">
//                 {this.displayTemplates()}
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return{
//         guids: state.contacts.guids,
//         templates: state.templates
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         sendEmail: (id, guids) => {
//             if(id !== "" && guids.length > 0){
//                 fetch('http://crmbetc.azurewebsites.net/api/sendemails?template='+id,{method: "POST",
//                     headers: {'Accept': 'application/json','Content-Type': "application/json"},
//                     body : JSON.stringify(guids)
//                 }).then(response => {
//                     if (response.ok ) {
//                         console.log("Your message hes sent");
//                     }
//                 })
//             }
//
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)( SendEmail );