import React from "react";
import MyForm from "./myform";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DeleteForm extends React.Component {
    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            data:[],
            func: null
        };
    }    
    
    render () {
        return (
            <MyForm 
                contact={this.props.data} 
                func={this.props.func} 
                buttonText={"Delete Contact"} 
                disable={true}
                method={'DELETE'}
            />
        );
    }
}
