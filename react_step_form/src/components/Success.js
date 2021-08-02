import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';



export class Success extends Component {
    render() {
    
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                 
                 <AppBar title="Success"/>
           <CheckCircleOutlineIcon style={styles.icon}/> <h1>Thank You for your submission</h1>
            <p>You will get an email with further instructions</p>

                </React.Fragment>

                </MuiThemeProvider>
        )
    }
}

const styles={
    icon : {
        margin : 15,
        color: "green",
        fontSize: 80
    }
}


export default Success
