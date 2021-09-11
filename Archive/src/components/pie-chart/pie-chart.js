import React, { Component } from 'react';
import { PieChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";

class pieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
        {
            "group": "Missing Privacy Link",
            "value": 20000
        },
        {
            "group": "Hardcoded tags",
            "value": 65000
        },
        {
            "group": "Unapproved cookies",
            "value": 75000
        },
        {
            "group": "Older Tealium script",
            "value": 1200
        },
        {
            "group": "Bespoke cookie",
            "value": 10000
        },
        {
            "group": "Exception cookie",
            "value": 25000
        }
    ],
            options: {
        "resizable": true,
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
                <PieChart
			data={this.state.data}
			options={this.state.options}>
		</PieChart>
            </div>
        );
    }
}
 
export default pieChart;