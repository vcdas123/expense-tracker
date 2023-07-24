import React from 'react';
import './ChartBar.css';

const ChartBar = props => {
  let barFillHeight = '0%';
  props.maxValue > 0 &&
    (barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%');

  // style attribute takes key value pair of css styles. If any attribute name contain dash then we need to qoute that key.
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
