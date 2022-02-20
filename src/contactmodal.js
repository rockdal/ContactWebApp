import React from "react";
import "./contact.css";
import AddForm from './addform.js';
import EditForm from './editform.js';
import DeleteForm from "./deleteform.js"; 

export default class ContactModal extends React.Component {
  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
        actionForm: null,
        data: {}
    };
  } 

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  pullResult = (result) => {
    console.log(result);
    
  }
  createForm = (data) => {
    return ( <AddForm data={data} func={this.pullResult}/>)
  }

  editForm = (data) => {
    return (<EditForm data={data} func={this.pullResult}/>)   
  }

  deleteForm = (data) => {
    return (<DeleteForm data={data} func={this.pullResult}/>) 
  }  

  render() {
    if (!this.props.show) {
      return null;
    }

    if (this.props.action === "Create") { this.actionForm = this.createForm(this.props.data); } 
    else if (this.props.action === "Edit") { this.actionForm = this.editForm(this.props.data); } 
    else { this.actionForm = this.deleteForm(this.props.data, this.pullResult) } 
    
    return (
      <div className="modal-parent">
        <div className="overlay" id="my-disabled-background" name="my-disabled-background">&nbsp;</div>
        <div className="My-Modal My-Contact-Modal" id="my-modal" name="my-modal">
          <div className="jumbotron text-center bg-sky My-Header">
            <h2 className="My-Title">{this.props.action} Contact</h2>
          </div>
          <div className="My-Content">{this.props.children} {this.actionForm}</div>
          <div className="My-Actions">
            <button id="Close-Modal" onClick={this.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}