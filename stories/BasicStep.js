import React from 'react';
import SplitPane from '../src';
import './index.css';

export default {
  component: (
    <SplitPane
      split="vertical"
      step={50}
      minSize={200}
      maxSize={1000}
      onDragStarted={() => (document.body.style.cursor = 'col-resize')}
      onDragFinished={() => (document.body.style.cursor = 'auto')}
    >
      <div>min: 200px, max: 1000px, step size: 50px</div>
      <div />
    </SplitPane>
  ),
};
export const BasicStep = () => (
  <SplitPane
    split="vertical"
    step={50}
    minSize={200}
    maxSize={1000}
    onDragStarted={() => (document.body.style.cursor = 'col-resize')}
    onDragFinished={() => (document.body.style.cursor = 'auto')}
  >
    <div>min: 200px, max: 1000px, step size: 50px</div>
    <div />
  </SplitPane>
);
