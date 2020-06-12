import React from "react";
import './search.css';

import Button from '@material-ui/core/Button';



class Ssearch extends React.Component {

state = {
    text: "w tym roku bla bla",
    error: ""
}

handleDateChange = (e) => {
    const value = this.refs.number.value;
    console.log(value);
    fetch(`http://numbersapi.com/${value}/year?json`)
    .then(res => res.json())
    .then(data => this.setState({
        text: data.text
    }))
    .catch(err => console.log(err))
}


    render() {


        return(
            <div id="search">
             <input  onChange={this.handleDateChange} type="text" ref="number"/> 
        <p>Odpowiedź: {this.state.text} </p>
        <Button variant="contained" color="primary">
      Hello World
    </Button>
    
            </div>
        )
    }
}


export default Ssearch