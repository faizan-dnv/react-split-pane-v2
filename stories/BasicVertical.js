import React from 'react';
import SplitPane from '../src';
import './index.css';

export default {
  component: (
    <SplitPane split="vertical">
      <div>default min: 50px</div>
      <div />
    </SplitPane>
  ),
};
export const BasicVertical = () => (
  <SplitPane split="vertical">
    <div>default min: 50px</div>
    <div />
  </SplitPane>
);
