import React from 'react';
import './App.css';

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import './contact.css';
import ContactModal from './contactmodal.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

class ContactCollection extends React.Component {
    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            show: false,
            action: "",
            data: {}
        };
    } 

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    setAction = (act) =>
    {
        this.setState({
            action: act
        });        
    }

    handleChoosedRow = (data) => {
        this.setState({
            data: data
        });
    };

    componentDidMount() {
        fetch("/Contact",
        {   method:'GET',
            mode: 'cors',
            headers:{
                'Access-Control-Allow-Origin':'*'
            },
        })
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        });
    }

    componentDidUpdate() {
        //initialize datatable
        $(document).ready(function () {
            $('#tblContact').DataTable({
                "bDestroy": true,
                "columnDefs": [
                    { "orderable": false, "targets": [0, 1, 4, 6] }
                ]
            });
        });
    }

  render(){
    const { items} = this.state;

    //Datatable HTML
    return (
        <div className="MainDiv">            
            <div className="Position-Create"> 
                <button 
                    id='btn-create-{item.contactId}' 
                    name='btn-create-{item.contactId}'                  
                    className='btn btn-outline-primary'
                    onClick={e => {
                        this.setAction("Create");
                        this.showModal(e);
                        this.handleChoosedRow({});
                    }}>Add Contact</button>
            </div>            
            
            <div className="jumbotron text-center bg-sky">
                <h3>Contact Collection</h3>
            </div>
            
            <div className="container">
                
                <table id="tblContact" className="display container">
                    <thead>
                        <tr>
                            <th className='Hide-Column'>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, i) => (
                            <tr>
                                <td className="Hide-Column" id={item.contactId} key={item.contactId}>td-item-{item.contactId}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.city}</td>
                                <td>{item.stateCode}</td>
                                <td>{item.phoneNumber}</td>
                                <td>
                                    <button
                                        id='btn-edit-{item.contactId}' 
                                        name='btn-edit-{item.contactId}'
                                        className='btn btn-outline-secondary m-2'
                                        onClick={e => {
                                            this.setAction("Edit");
                                            this.showModal(e);
                                            this.handleChoosedRow(item)
                                    }}>Edit</button>
                                    <button
                                        id='btn-delete-{item.contactId}' 
                                        name='btn-delete-{item.contactId}'                                
                                        className='btn btn-outline-danger m-2'
                                        onClick={e => {
                                            this.setAction("Delete");
                                            this.showModal(e);
                                            this.handleChoosedRow(item)
                                    }} >Delete</button>
                                 </td>
                            </tr>
                        ))}

                    </tbody>
                    <tfoot>
                        <tr className='Hide-Column'>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>                
                    </tfoot>
                </table>            
            </div>
            <div> 
                <ContactModal id="myModal"
                    onClose={this.showModal} 
                    show={this.state.show}
                    action={this.state.action}
                    data={this.state.data}                          
                />
            </div>
        </div>
    );
}
}
export default ContactCollection;