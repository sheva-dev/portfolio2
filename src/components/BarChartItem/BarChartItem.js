import React from 'react';
import './BarChartItem.css';

const BarChart = (props) => {
    return (
        <div className="bar-chart">
            <div className="bar-chart-title">
                <p>{props.title}</p>
            </div>

            <div className="bar-chart-div">
                <div className="bar-chart-width"
                    style={{
                        width: props.width
                    }}
                >
                </div>
            </div>

            <div className="bar-chart-procent">
                {props.width}
            </div>
        </div>
    );
}

export default BarChart;
