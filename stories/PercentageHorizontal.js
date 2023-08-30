import React from 'react';
import SplitPane from '../src';
import './index.css';

export default {
  component: (
    <SplitPane defaultSize="50%" split="horizontal">
      <div>default percentage: 50%</div>
      <div />
    </SplitPane>
  ),
};
export const PercentageHorizontal = () => (
  <SplitPane defaultSize="50%" split="horizontal">
    <div>default percentage: 50%</div>
    <div />
  </SplitPane>
);
