import React, { Component } from 'react';
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
class donutGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
        {
            "group": "Compliant",
            "value": 20000
        },
        {
            "group": "Non Compliant",
            "value": 65000
        },
        {
            "group": "Not Scanned",
            "value": 75000
        }
    ],
            options: {
        "resizable": true,
        "donut": {
            "center": {
                "label": "URLS"
            }
        },
        "height": "300px",
        "legend": {
            "alignment": "center",
            "position" :"top"
        }
    }
        };
    }
    render() { 
        return (
            <div>
                <DonutChart
			data={this.state.data}
			options={this.state.options}>
		</DonutChart>
            </div>
        );
    }
}
 
export default donutGraph;