import React, { Component } from 'react';
import { Grid, Row, Column, Form, TextInput, Button } from 'carbon-components-react';
import './login.scss';
import ArrowRight20 from "@carbon/icons-react/lib/arrow--right/20";
import Help16 from "@carbon/icons-react/lib/help--filled/16";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
            <div className="login_wrapper">
                <p className="login_insights">Login</p>
                <Grid fullWidth>
                <Row>
                        <Column sm={4} md={8} lg={8} xlg={8}>
                            {/* <Row>
                                <Column sm={4} md={4} lg={8}>
                                    <div className="login_insights_inventory">
                                        <h2>2.7M</h2>
                                        <p>View inventory</p>
                                        <span><ArrowRight20 /></span>
                                    </div>
                                </Column>
                                <Column sm={4} md={4} lg={8}>
                                    <div className="login_insights_inventory">
                                        <h2>20K</h2>
                                        <p>Emails sent</p>
                                        <span><ArrowRight20 /></span>
                                    </div>
                                </Column>
                            </Row> */}
                            <Row>
                                <Column sm={4} md={8} lg={16}>
                                    <div className="login_wrap">
                                        <Row>
                                            <Column sm={3} md={4} lg={15}>
                                                <p className="faq">Login</p>
                                            </Column>
                                            <Column sm={1} md={4} lg={1}>
                                                <Help16 className="help_icon" />
                                            </Column>
                                        </Row>

                                        <Row>
                                            <div className="loginForm">
                                                <Form>
                                                    <div className="inputbox">
                                                    <TextInput
                                                        helperText=""
                                                        id="test2"
                                                        invalidText="Invalid error message."
                                                        labelText=""
                                                        placeholder="User Name/Email Id"
                                                        />
                                                    </div>
                                                    <div className="inputbox">
                                                    <TextInput
                                                        helperText=""
                                                        id="test2"
                                                        invalidText="Invalid error message."
                                                        labelText=""
                                                        placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="inputbox">
                                                    <Button
                                                        kind="primary"
                                                        tabIndex={0}
                                                        type="submit"
                                                    >
                                                        <div>
                                                        Continue
                                                        <span><ArrowRight20 /></span>
                                                        </div>
                                                    </Button>
                                                    </div>
                                                </Form>
                                            </div>
                                        </Row>

                                        <a href="javascript:void(0)">Forgot Password</a>
                                    </div>

                                </Column>
                            </Row>
                        </Column>
                    </Row>
                </Grid>
            </div>
            </>
        )
    }
}
export default Login;