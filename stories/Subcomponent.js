import React from 'react';
import SplitPane from '../src';
import './index.css';

export default {
  component: (
    <div className="parent">
      <div className="header">Header</div>
      <div className="wrapper">
        <SplitPane split="horizontal" defaultSize="50%">
          <div />
          <div />
        </SplitPane>
      </div>
    </div>
  ),
};
export const Subcomponent = () => (
  <div className="parent">
    <div className="header">Header</div>
    <div className="wrapper">
      <SplitPane split="horizontal" defaultSize="50%">
        <div />
        <div />
      </SplitPane>
    </div>
  </div>
);
