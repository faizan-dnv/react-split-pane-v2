import React from 'react';
import SplitPane from '../src';
import './index.css';

export default {
  component: (
    <SplitPane
      split="vertical"
      minSize={50}
      maxSize={300}
      defaultSize={100}
      className="primary"
    >
      <div>min: 50px, max: 300px</div>
      <SplitPane split="horizontal">
        <div>default min: 50px</div>
        <div />
      </SplitPane>
    </SplitPane>
  ),
};
export const BasicNested = () => (
  <SplitPane
    split="vertical"
    minSize={50}
    maxSize={300}
    defaultSize={100}
    className="primary"
  >
    <div>min: 50px, max: 300px</div>
    <SplitPane split="horizontal">
      <div>default min: 50px</div>
      <div />
    </SplitPane>
  </SplitPane>
);
