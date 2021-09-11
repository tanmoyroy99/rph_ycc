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
                        <h1>{this.state.bannerTitle}</h1>
                        <p>Jatiya Yuva Computer Saksharta Mission (JYCSM) is a national programme of information technology education and development. A unit of Jatiya Yuva Computer Saksharta Mission, .Registered as Autonomous Body, Under Govt. Of West Bengal based on Central Govt. TR Act, 1882, Govt. Of India(Registration No- IV-06888). JYCSM is also registered Empanelled under NPS - Planning Commission , Govt. Of India (Registration No –WB/2014/0083736) & Empanelled Under CSW, Govt. Of India, .Registered Under Trade Mark Registry Act,1999, Govt. Of India, Registered Under MHRD (CR Act ) , Govt. Of India.</p>
                        </Column>
                    </Row>
                </Grid>
            </div>
        );
    }
}
 
export default banner;