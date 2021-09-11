import React, {  Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Row } from 'carbon-components-react';
import Login from './../components/login/Login'
import Banner from './../components/banner/banner';

class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bannerData:{
            "title":"Jatiya Yuva Computer Shaksharta Mission Login",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, arcu tincidunt porttitor efficitur, est eros euismod urna, sed faucibus neque purus eu ex. Pellentesque mollis nulla ac mauris condimentum iaculis. Vestibulum molestie tincidunt magna id laoreet. Proin interdum, massa at lobortis bibendum, elit ex volutpat enim, at ullamcorper urna ipsum in leo. Fusce vitae risus ac turpis viverra dapibus quis eu massa. Donec laoreet felis eget felis congue, et maximus erat pharetra. Integer pellentesque dictum ante ut efficitur. Sed nec felis vitae lorem auctor interdum sed auctor augue. Proin luctus bibendum nisi a placerat."
            }
        }
    }

    render(){
        return(
            <>
                <Banner banner={this.state.bannerData}/>
                <Login />
            </>
        )
    }

}
export default LoginPage;