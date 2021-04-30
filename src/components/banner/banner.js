import React, { Component } from 'react';
import { Grid, Row, Column } from 'carbon-components-react';
 import "./banner.scss";
class banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerTitle: "",
            bannerBody: "",

        };
    }
    static getDerivedStateFromProps(props, state) {
        console.log("props",props)
        return {
            bannerTitle: props.banner.title,
            bannerBody: props.banner.body
        }
    }
    render() { 
        return (
            <div className="compliance-dashboard-banner">
                <Grid fullWidth>
                    <Row>
                        <Column sm={4} md={8} lg={12} xlg={12}>
                        <h1>Compliance Dashboard</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, arcu tincidunt porttitor efficitur, est eros euismod urna, sed faucibus neque purus eu ex. Pellentesque mollis nulla ac mauris condimentum iaculis. Vestibulum molestie tincidunt magna id laoreet. Proin interdum, massa at lobortis bibendum, elit ex volutpat enim, at ullamcorper urna ipsum in leo. Fusce vitae risus ac turpis viverra dapibus quis eu massa. Donec laoreet felis eget felis congue, et maximus erat pharetra. Integer pellentesque dictum ante ut efficitur. Sed nec felis vitae lorem auctor interdum sed auctor augue. Proin luctus bibendum nisi a placerat.</p>
                        </Column>
                    </Row>
                </Grid>
            </div>
        );
    }
}
 
export default banner;