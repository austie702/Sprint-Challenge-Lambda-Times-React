import React from 'react';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
            {props.tabs.map(tab => (
              <Tab tab={tab} key={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />
            ))}
      </div>
    </div>
  );
};

export default Tabs;
