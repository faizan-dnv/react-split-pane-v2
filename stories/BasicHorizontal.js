import React from 'react';
import SplitPane from '../src';
import './index.css';

export default {
  component: (
    <SplitPane split="horizontal">
      <div>default min: 50px</div>
      <div />
    </SplitPane>
  ),
};
export const BasicHorizontal = () => (
  <SplitPane split="horizontal">
    <div>default min: 50px</div> <div />
  </SplitPane>
);
