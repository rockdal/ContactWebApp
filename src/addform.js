import React from "react";
import MyForm from "./myform";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AddForm extends React.Component {
    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            data:[{ 
                contactId: "", 
                firstName: "", 
                lastName: "", 
                streetAddress: "", 
                city: "", 
                zipCode: "", 
                stateCode: "", 
                phoneNumber: "", 
                notes: ""
            }],
            func: null
        };
    }    
    
    render () {
        return (
            <MyForm 
                contact={this.props.data} 
                func={this.props.func} 
                buttonText={"Submit Changes"} 
                disabled={false}
                method={'POST'}
            />
        );
    }
}