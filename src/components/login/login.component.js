import React, { Component } from 'react';
import './login.scss';
import {
    Button,
    Form,
    TextInput
  } from "carbon-components-react";

  class LoginControl extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loginUserId:{
          name: "loginUserId",
          value:"",
          invalid:false,
          invalidText: "",
        },
        loginPassword:{
          name: "loginPassword",
          value:"",
          invalid:false,
          invalidText: "",
        },
        valueData:0
      }
    }
    onsubmitFormData(){
      console.log(this.state);
    }





    render() {
        return (
            <div className="loginComoinent">
                <div className="login-container">
                    <div className="login-wrapper">
                      <Form >
                      <TextInput
                          labelText="Uase Id"
                          id="loginUserId"
                          className="some-class"
                          invalid= {this.state.loginUserId.invalid}
                          invalidText="ErrorPassword"
                          onChange={(e) => this.setState({loginUserId:{ value:  e.target.value }}) }
                          value={this.state.loginUserId.value}
                        />
                        <TextInput
                          labelText="Password"
                          id="loginPassword"
                          className="some-class"
                          invalid= {false}
                          invalidText="ErrorPassword"
                          onChange={(e) => this.setState({loginPassword:{ value:  e.target.value }})}
                          value={this.state.loginPassword.value}
                        />
                        

                        <Button type="button" onClick={()=>this.onsubmitFormData()} className="some-class">Submit....</Button>
                      </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginControl;