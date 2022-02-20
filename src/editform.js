/*
import { Formik, Form, Field, ErrorMessage } from "formik";
import StateSelect from "./stateselect";
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

const submitCreate= (values) => {
    // post data to server    
    values.stateCode = $( "#stateCode" ).val();
    fetch("/Contact",
    {   method:'PUT',
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values).replace( /</g, '\\u003c')   //escape HTML signifcant values
    })
    .then((res) => res.json())
    .then((json) => {
        this.setState({
            items: json,
            DataisLoaded: true
        });
    });
    
    //if (this.DataisLoaded) {$(".My-Contact-Modal").remove()};
}

const EditForm = (contact) => (
  <>
    <Formik
      initialValues={{ contactId: contact.data.contactId, firstName: contact.data.firstName, lastName: contact.data.lastName, 
        streetAddress: contact.data.streetAddress, city: contact.data.city, zipCode: contact.data.zipCode, 
        stateCode: contact.data.stateCode, phoneNumber: contact.data.phoneNumber, notes: contact.data.note}}
      validate={(values) => {
        const errors = {};
        // First Name
        if (!values.firstName) {
            errors.firstName = " * Required Max 20 Characters";
        } else if ( values.firstName.length > 20) {
            errors.firstName = " * Max 20 Characters ";
        }

        // Last Name
        if (!values.lastName) {
            errors.lastName = " * Required Max 20 Characters";
        } else if ( values.lastName.length > 20) {
            errors.lastName = " * Max 20 Characters ";
        }       

        // Street Address
        if (!values.streetAddress) {
            errors.streetAddress = " * Required Max 80 Characters";
        } else if ( values.streetAddress.length > 80) {
            errors.streetAddress = " * Max 80 Characters ";
        } 

        // City
        if (!values.city) {
            errors.city = " * Required Max 40 Characters";
        } else if ( values.city.length > 40) {
            errors.city = " * Max 40 Characters";
        }      

        // Zip Code
        if (!values.zipCode) {
            errors.zipCode = " * Required 5 Numeric Values 0";
        } else if ( values.zipCode.length !== 5) {
            errors.zipCode = " * Required 5 Numeric Values 2";
        } else if (/\D/.test(values.zipCode)) {
            errors.zipCode = " * Required 5 Numeric Values 1 ";
        }

        // Phone Number
        if (!values.phoneNumber) {
            errors.phoneNumber = " * Required 10 Numeric Values";
        } else if ( values.phoneNumber.length !== 10) {
            errors.phoneNumber = " *  Only 10 Numeric Characters";
        } else if (/\D/.test(values.phoneNumber)) {
            errors.phoneNumber = " * Only 10 Numeric Characters";
        }

        //Notes
        if ( values.notes != null && values.notes.length > 500) {
            errors.notes = " * Max Length 500 Characters";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // post data to server
        submitCreate(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, dirty, handleReset }) => (
        <Form>
            <table id="tblContactModal" name="tblContactModal">
                <tbody>
                    <tr className="d-none">
                        <td><label>Contact ID</label></td>
                        <td><Field type="text" name="contactId" disabled/></td>
                        <td>&nbsp</td>
                    </tr>
                    <tr>
                        <td><label>First Name</label></td>
                        <td><Field type="text" name="firstName" /></td>
                        <td><span className="text-danger fw-bold fs-6"><ErrorMessage name="firstName" component="span" /></span></td>
                    </tr>
                    <tr>
                        <td><label>Last Name</label></td>
                        <td><Field type="text" name="lastName" /></td>
                        <td><span className="text-danger fw-bold fs-6"><ErrorMessage name="lastName" component="span" /></span></td>
                    </tr>            
                    <tr>
                        <td><label>Street Address</label></td>
                        <td><Field type="text" name="streetAddress" /></td>
                        <td><span className="text-danger fw-bold fs-6"><ErrorMessage name="streetAddress" component="span" /></span></td>
                    </tr> 
                    <tr>
                        <td><label>City</label></td>
                        <td><Field type="text" name="city" /></td>
                        <td><span className="text-danger fw-bold fs-6"><ErrorMessage name="city" component="span" /></span></td>
                    </tr> 
                    <tr>
                        <td><label>State</label></td>
                        <td><StateSelect /></td>
                        <td>&nbsp;</td>
                    </tr> 
                    <tr>
                        <td><label>Zip Code</label></td>
                        <td><Field type="text" name="zipCode" /></td>
                        <td><span className="text-danger fw-bold fs-6"><ErrorMessage name="zipCode" component="span" /></span></td>
                    </tr> 
                    <tr>
                        <td><label> Phone Number</label></td>
                        <td><Field type="text" name="phoneNumber" /></td>
                        <td><span className="text-danger fw-bold fs-6"><ErrorMessage name="phoneNumber" component="span" /></span></td>
                    </tr> 
                    <tr>
                        <td><label>Notes</label></td>
                        <td><Field component="textarea" name="notes" /></td>
                        <td><span className="text-danger fw-bold fs-6"><ErrorMessage name="notes" component="span" /></span></td>
                    </tr>   
                </tbody>                                                                                         
            </table>

            <button
                className="btn btn-primary m-2"
                type="button"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}>Reset
            </button>
            <button type="submit" disabled={isSubmitting} className="btn btn-success m-2">
                Submit Changes
            </button>
        </Form>
      )}
    </Formik>
  </>
);

export default EditForm;
*/

import React from "react";
import MyForm from "./myform";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class EditForm extends React.Component {
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
                buttonText={"Submit Changes"} 
                disable={false}
                method={'PUT'}
            />
        );
    }
}