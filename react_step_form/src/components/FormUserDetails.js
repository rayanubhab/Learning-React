import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class FormUserDetails extends Component {
    continue = e=> {
        //Prevent default method prevents the default execution
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values,handleChange } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                 
                 <AppBar title="Enter User details"/>
                 <TextField
                 hintText="Enter your first name"
                 floatingLabelText="First Name"
                 onChange={handleChange('firstName')}
                 defaultValue={values.firstName}
                 />
                 <br/>
                 <TextField
                 hintText="Enter your last name"
                 floatingLabelText="Last Name"
                 onChange={handleChange('lastName')}
                 defaultValue={values.lastName}
                 />

<br/>
                 <TextField
                 hintText="Enter your email"
                 floatingLabelText="Email Id"
                 onChange={handleChange('email')}
                 defaultValue={values.email}
                 />
                 <br/>
                 <RaisedButton
                 label="continue"
                 primary={true}
                 style={styles.button}
                 onClick={this.continue}
                 />



                </React.Fragment>

                </MuiThemeProvider>
        )
    }
}

const styles={
    button : {
        margin : 15
    }
}

export default FormUserDetails
