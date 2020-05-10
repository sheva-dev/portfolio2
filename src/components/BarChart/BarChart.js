import React from 'react';
import BarChartItem from '../BarChartItem/BarChartItem';
import chartData from '../../data/chartData'

const BarChart = () => {
    return (
        chartData.map(item => (
            <BarChartItem
                key={item.id}
                title={item.title}
                width={item.width}
            />
        ))
    );
}

export default BarChart;
