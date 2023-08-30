import React from 'react';
import SplitPane from '../src';
import styled from '@emotion/styled';
import './index.css';

const Wrapper = styled('div')`
  flex: 1;
  display: flex;
  height: 100%;
  width: : 100%;
  height: 70%;
  width: 70%;
  border: 1px solid red;
`;

export default {
  component: (
    <React.Fragment>
      outer container
      <Wrapper>
        <SplitPane defaultSize="40%" split="horizontal">
          <div>size: 40%</div>
          <div />
        </SplitPane>
      </Wrapper>
    </React.Fragment>
  ),
};
export const NestedHorizontal = () => (
  <React.Fragment>
    outer container
    <Wrapper>
      <SplitPane defaultSize="40%" split="horizontal">
        <div>size: 40%</div>
        <div />
      </SplitPane>
    </Wrapper>
  </React.Fragment>
);
