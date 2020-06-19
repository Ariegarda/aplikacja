import React from "react";
import './search.css';
import NasaPhoto from './photo'
import Button from '@material-ui/core/Button';




class Ssearch extends React.Component {


    render() {

    
    

       return(
            <div className="animate__animated animate__fadeIn">
            <div id="search">
            <div className="animacja_tekstu" >
            
            
    <Button variant="contained" color="primary">
      Show picture
    </Button>
        <NasaPhoto/>
    
    </div>
            </div>
            </div>
        )
    
    }

        }



export default Ssearch