import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useStore } from '@/stores';

const Containter = styled.div`
  background: #fff;
  text-align: center;
  padding: 100px;
  height: 100%;
`;

const Home: React.FC<IProps> = (props) => {
  const { common } = useStore();

  return (
    <Containter>
      <h1>repro-react-issues-20417</h1>
      {common.count}
      <button onClick={() => common.increase()}>+1</button>
    </Containter>
  );
};

export default observer(Home);
