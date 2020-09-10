import React, { useState, useEffect } from 'react';
import './BarChartItem.css';
import CountUp from 'react-countup';

const BarChart = (props) => {
    const [scrollPosition, setSrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
        const bars = document.querySelectorAll('.bar-chart-width');

        bars.forEach(bar =>
            bar.classList.add('animated-bar-chart-width')
        );
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (
        <div className="bar-chart">
            <div className="bar-chart-title">
                <p>{props.title}</p>
            </div>
            <div className="bar-chart-div">
                <div className="bar-chart-width"
                    style={{
                        width: props.width
                    }}>
                </div>
            </div>

            <div className="bar-chart-procent" id="bar-chart-procent">
                <CountUp
                    start={1}
                    end={parseInt(props.width.substring(0, props.width.length - 1))}
                    duration={3}
                    delay={0}
                    prefix="%"
                />
            </div>
        </div>
    );
}

export default BarChart;
