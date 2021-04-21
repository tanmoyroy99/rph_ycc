import react, { Component } from 'react';
import {Form, FormGroup, TextInput, Button } from 'carbon-components-react';
import './login.scss'

class Login extends Component{
    render(){
        return(
            <div>
                <h3>Login</h3>
                <div className="loginBox card cardContainer">
                    <Form className='some-class'>
                        <FormGroup >
                            <TextInput 
                                className="user-name"
                                labelText= "user Name"
                                placeholder= "User Name"
                            />
                            <TextInput 
                                type="password"
                                className="user-password"
                                labelText= "User Password"
                                placeholder= "User Password"
                            />
                            <Button className="login-submit-btn" >Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;