import React from 'react';

import { Container, Wrapper, LeftMenuBar, RightSideBar } from './styles';
import { Main } from '../Main';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <LeftMenuBar></LeftMenuBar>
        <Main></Main>
        <RightSideBar></RightSideBar>
      </Wrapper>
    </Container>
  );
};

export default Layout;
