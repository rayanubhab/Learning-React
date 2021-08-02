import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
   //state object 
    state={
         step: 1,
         //fields in state
         firstName: '',
         lastName: '',
         email: '',
         occupation:'',
         city:'',
         bio:''
    }

    //Proceed to next step
    nextStep = ()=>{
        //step taken out of the state
        const { step } = this.state; //destructuring
        this.setState({
            step: step+1
        });

    }

    //Go back to previous step
    prevStep = ()=>{
        //step taken out of the state
        const { step } = this.state; //destructuring
        this.setState({
            step: step-1
        });

    }

    //Handle fields change
    handleChange = input=> e =>{
        this.setState({[input]:e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName,lastName,email,occupation,city,bio } = this.state;
        const values = { firstName,lastName,email,occupation,city,bio }
        
        switch(step){

            case 1 : 
             return(
                 <FormUserDetails
                 nextStep={this.nextStep}
                 handleChange={this.handleChange}
                 values={values}
                 />
             );

             case 2:
                return(
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    
                    values={values}
                    />
                );
                  
             case 3:
                return(
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                      //No handle change required because there's no input
                    values={values}
                    />
                );
             case 4:
                 return <Success/>
        }

        

    }
}

export default UserForm
