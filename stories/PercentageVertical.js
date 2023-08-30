import React from 'react';
import SplitPane from '../src';
import './index.css';

export default {
  component: (
    <SplitPane defaultSize="50%">
      <div>default percentage: 50%</div>
      <div />
    </SplitPane>
  ),
};
export const PercentageVertical = () => (
  <SplitPane defaultSize="50%">
    <div>default percentage: 50%</div>
    <div />
  </SplitPane>
);
