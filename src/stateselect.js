import React from 'react';

class StateSelect extends React.Component {
    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            selected: "TX",
        };
    } 

    componentDidMount() {
        fetch("/State",
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

    render(){
        const { items, selected} = this.state;
    
        //Datatable HTML
        return (
            <select id='stateCode' name='stateCode' disabled={this.props.disabled}>
                {items.map((item, i) => (
                    item.stateCode === selected ?
                    <option selected key={i} value={item.stateCode}>{item.stateName}</option> :
                    <option key={i} value={item.stateCode}>{item.stateName}</option>
                ))}
            </select>
        )
    }        
}

export default StateSelect;