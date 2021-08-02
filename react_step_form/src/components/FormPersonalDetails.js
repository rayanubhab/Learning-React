import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class FormPersonalDetails extends Component {
    continue = e=> {
        //Prevent default method prevents the default execution
        e.preventDefault();
        this.props.nextStep();
    };
    
    back = e=> {
        //Prevent default method prevents the default execution
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values,handleChange } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                 
                 <AppBar title="Enter your Personal details"/>
                 <TextField
                 hintText="Enter your Occupation"
                 floatingLabelText="occupation"
                 onChange={handleChange('occupation')}
                 defaultValue={values.occupation}
                 />
                 <br/>
                 <TextField
                 hintText="Enter your City"
                 floatingLabelText="city"
                 onChange={handleChange('city')}
                 defaultValue={values.city}
                 />

<br/>
                 <TextField
                 hintText="Enter your Bio"
                 floatingLabelText="Bio"
                 onChange={handleChange('bio')}
                 defaultValue={values.bio}
                 />
                 <br/>
                 <RaisedButton
                 label="continue"
                 primary={true}
                 style={styles.button}
                 onClick={this.continue}
                 />
                  <RaisedButton
                 label="Back"
                 primary={false}
                 style={styles.button}
                 onClick={this.back}
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

export default FormPersonalDetails
