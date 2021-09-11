import React, { Component } from 'react';
import { Grid, Row, Column } from 'carbon-components-react';
import './dashboard.scss';
import Banner from '../banner/banner';
import ArrowRight20 from "@carbon/icons-react/lib/arrow--right/20";
import Help16 from "@carbon/icons-react/lib/help--filled/16";
import PieChart from '../pie-chart/pie-chart';
import Donutgraph from '../donut-chart/donut-chart';
import Stackedbargraph from '../stackedbar-chart/stackedbar-chart';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerData:{
            "title":"Jatiya Yuva Computer Shaksharta Mission",
            "body": "JYCSM provides single source for quality assurance in computer education among the nation's non-formal institutes, After turning out competent IT professio."
        },
            data_by_bu: [
                {
                    "group": "Compliant",
                    "key": "Blockchain",
                    "value": 65000
                },
                {
                    "group": "Compliant",
                    "key": "Cognitive Applications",
                    "value": 29123
                },
                {
                    "group": "Compliant",
                    "key": "Cognitive Systems",
                    "value": 35213
                },
                {
                    "group": "Compliant",
                    "key": "Cloud & Cognitive Software",
                    "value": 51213
                },
                {
                    "group": "Compliant",
                    "key": "Communications",
                    "value": 16932
                },
                {
                    "group": "Compliant",
                    "key": "Corporate Marketing",
                    "value": 18932
                },
                {
                    "group": "Compliant",
                    "key": "Corporate Strategy",
                    "value": 16932
                },
                {
                    "group": "Compliant",
                    "key": "Cyber Security",
                    "value": 16932
                },
                {
                    "group": "Compliant",
                    "key": "Finance and Operations",
                    "value": 16932
                },
                {
                    "group": "Compliant",
                    "key": "Global Business Services",
                    "value": 16932
                },
                {
                    "group": "Compliant",
                    "key": "Global Markets",
                    "value": 16932
                },
                {
                    "group": "Compliant",
                    "key": "Global Technology Services",
                    "value": 16932
                },
                {
                    "group": "Compliant",
                    "key": "Human Resources",
                    "value": 16932
                },
                {
                    "group": "Compliant",
                    "key": "IGF (Global Financing)",
                    "value": 6932
                },
                {
                    "group": "Compliant",
                    "key": "IP (Intellectual Property)",
                    "value": 76932
                },
                {
                    "group": "Compliant",
                    "key": "Procurement",
                    "value": 86932
                },
                {
                    "group": "Compliant",
                    "key": "Regulatory & Environment",
                    "value": 96932
                },
                {
                    "group": "Compliant",
                    "key": "Research",
                    "value": 106932
                },
                {
                    "group": "Compliant",
                    "key": "Security",
                    "value": 100932
                },
                {
                    "group": "Compliant",
                    "key": "Security",
                    "value": 70932
                },
                {
                    "group": "Compliant",
                    "key": "Systems",
                    "value": 20932
                },
                {
                    "group": "Compliant",
                    "key": "TWC (The Weather Company)",
                    "value": 40932
                },
                {
                    "group": "Compliant",
                    "key": "Watson Data & AI",
                    "value": 30932
                },
                {
                    "group": "NonCompliant",
                    "key": "Blockchain",
                    "value": 80432
                },
                {
                    "group": "NonCompliant",
                    "key": "Cognitive Applications",
                    "value": 21312
                },
                {
                    "group": "NonCompliant",
                    "key": "Cognitive Systems",
                    "value": 56456
                },
                {
                    "group": "NonCompliant",
                    "key": "Cloud & Cognitive Software",
                    "value": 21312
                },
                {
                    "group": "NonCompliant",
                    "key": "Communications",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Corporate Marketing",
                    "value": 35234
                },
                {
                    "group": "NonCompliant",
                    "key": "Corporate Strategy",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Cyber Security",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Finance and Operations",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Global Business Services",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Global Markets",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Global Technology Services",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Human Resources",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "IGF (Global Financing)",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "IP (Intellectual Property)",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Procurement",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Regulatory & Environment",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Research",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Security",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Security",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Systems",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "TWC (The Weather Company)",
                    "value": 34234
                },
                {
                    "group": "NonCompliant",
                    "key": "Watson Data & AI",
                    "value": 34234
                }
            ], data_by_category: [
                {
                    "group": "Compliant",
                    "key": "App generated",
                    "value": 650
                },
                {
                    "group": "Compliant",
                    "key": "Cyclical / Shelf-life",
                    "value": 291
                },
                {
                    "group": "Compliant",
                    "key": "Evergreen/ Static",
                    "value": 352
                },
                {
                    "group": "Compliant",
                    "key": "Knowledge Center",
                    "value": 512
                },
                {
                    "group": "Compliant",
                    "key": "Other - 3rd Party",
                    "value": 169
                },
                {
                    "group": "Compliant",
                    "key": "Other - Acquisition",
                    "value": 189
                },
                {
                    "group": "Compliant",
                    "key": "Other - Assets",
                    "value": 169
                },
                {
                    "group": "Compliant",
                    "key": "Other - Dev / Staging / Test",
                    "value": 169
                },
                {
                    "group": "Compliant",
                    "key": "Other - Error",
                    "value": 169
                },
                {
                    "group": "Compliant",
                    "key": "Other - Internal IBM",
                    "value": 169
                },
                {
                    "group": "Compliant",
                    "key": "Other - SAAS/ Offering",
                    "value": 169
                },
                {
                    "group": "NonCompliant",
                    "key": "App generated",
                    "value": 804
                },
                {
                    "group": "NonCompliant",
                    "key": "Cyclical / Shelf-life",
                    "value": 213
                },
                {
                    "group": "NonCompliant",
                    "key": "Evergreen/ Static",
                    "value": 564
                },
                {
                    "group": "NonCompliant",
                    "key": "Knowledge Center",
                    "value": 213
                },
                {
                    "group": "NonCompliant",
                    "key": "Other - 3rd Party",
                    "value": 342
                },
                {
                    "group": "NonCompliant",
                    "key": "Other - Acquisition",
                    "value": 352
                },
                {
                    "group": "NonCompliant",
                    "key": "Other - Assets",
                    "value": 342
                },
                {
                    "group": "NonCompliant",
                    "key": "Other - Dev / Staging / Test",
                    "value": 342
                },
                {
                    "group": "NonCompliant",
                    "key": "Other - Error",
                    "value": 342
                },
                {
                    "group": "NonCompliant",
                    "key": "Other - Internal IBM",
                    "value": 342
                },
                {
                    "group": "NonCompliant",
                    "key": "Other - SAAS/ Offering",
                    "value": 342
                }
            ],
            options_by_bu: {
                "axes": {
                    "left": {
                        "mapsTo": "value",
                        "stacked": true,
                        "title": "Compliance",
                    },
                    "bottom": {
                        "mapsTo": "key",
                        "scaleType": "labels"
                    }
                },
                "height": "400px",
                "legend": {
                    "alignment": "center",
                    "position": "top"
                },
                "color": {
                    "scale": {
                        "Compliant": "#520408",
                        "NonCompliant": "#9F1853"

                    },
                    "toolbaroptions": {
                        "enabled": true
                    }
                }
            },
            options_by_category: {
                "axes": {
                    "left": {
                        "mapsTo": "value",
                        "stacked": true,
                        "title": "Compliance",
                    },
                    "bottom": {
                        "mapsTo": "key",
                        "scaleType": "labels"
                    }
                },
                "height": "400px",
                "legend": {
                    "alignment": "center",
                    "position": "top"
                },
                "color": {
                    "scale": {
                        "Compliant": "#8A3FFC",
                        "NonCompliant": "#FFA0C2"

                    },
                    "toolbaroptions": {
                        "enabled": true
                    }
                }
            }
        }

    }
    render() {
        return (
            <div className="dashboard_wrapper">
                <Banner banner={this.state.bannerData}/>
                <p className="dashboard_insights">Insights</p>
                <Grid fullWidth>
                    <Row>
                        <Column sm={4} md={8} lg={8} xlg={8}>
                            <Row>
                                <Column sm={4} md={4} lg={8}>
                                    <div className="dashboard_insights_inventory">
                                        <h2>1.2K</h2>
                                        <p>Year 2021</p>
                                        <span><ArrowRight20 /></span>
                                    </div>
                                </Column>
                                <Column sm={4} md={4} lg={8}>
                                    <div className="dashboard_insights_inventory">
                                        <h2>10K</h2>
                                        <p>Total Student</p>
                                        <span><ArrowRight20 /></span>
                                    </div>
                                </Column>
                            </Row>
                            <Row>
                                <Column sm={4} md={8} lg={16}>
                                    <div className="faq_wrap">
                                        <Row>
                                            <Column sm={3} md={4} lg={15}>
                                                <p className="faq">FAQ</p>
                                            </Column>
                                            <Column sm={1} md={4} lg={1}>
                                                <Help16 className="help_icon" />
                                            </Column>
                                        </Row>

                                        <a href="javascript:void(0)">How much does this school cost?</a>
                                        <a href="javascript:void(0)">Are you accepting new students? </a>
                                        <a href="javascript:void(0)">Where are you located?</a>
                                    </div>

                                </Column>
                            </Row>
                        </Column>
                        <Column sm={4} md={8} lg={8}>
                            <Row className="donut_pie_chart_wrap">
                                <Column sm={4} md={4} lg={8}>
                                    <div className="dashboard_pie_donut_chart">
                                        <p className="compliance-type">Compliance By Region</p>
                                        <PieChart />
                                    </div>

                                </Column>
                                <Column sm={4} md={4} lg={8}>
                                    <div className="dashboard_pie_donut_chart">
                                        <p className="compliance-type">Compliance By Status</p>
                                        <Donutgraph />
                                    </div>

                                </Column>
                            </Row>
                        </Column>
                    </Row>
                    <Row>
                        <Column sm={4} md={8} lg={16} xlg={16}>
                            <p className="complaint_vs_non_title">Compliant v/s Non-Compliant (By Business Unit)</p>
                            <Stackedbargraph compliant_data={this.state.data_by_bu} complaint_options={this.state.options_by_bu} />
                        </Column>
                    </Row>
                    <Row>
                        <Column sm={4} md={8} lg={8} xlg={8}>
                            <p className="complaint_vs_non_title">Compliance w.r.t. geo locations</p>
                            <div style={{ background: "#ffffff", textAlign: "center", height: "440px", paddingTop: "220px" }}>
                                <p>Content Coming Soon</p>
                            </div>
                        </Column>
                        <Column sm={4} md={8} lg={8} xlg={8}>
                            <p className="complaint_category">Compliant v/s Non-Compliant (By Business Unit)</p>
                            <Stackedbargraph compliant_data={this.state.data_by_category} complaint_options={this.state.options_by_category} />
                        </Column>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;