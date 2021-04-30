import React, { Component } from 'react';
import { StackedBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import "./stackedbar-chart.scss";
class stackedbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            options:{}
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {
            data: props.compliant_data,
            options: props.complaint_options
        }
    }
    render() { 
        return (
            <div className="stackedbar_wrap">
                <StackedBarChart
			data={this.state.data}
			options={this.state.options}>
		</StackedBarChart>
            </div>
        );
    }
}
 
export default stackedbar;