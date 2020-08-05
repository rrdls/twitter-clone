import React from 'react';
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  ProfilePage,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Renato Ramos</strong>
          <span>100 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage></ProfilePage> */}
      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon></SearchIcon>
        <BellIcon></BellIcon>
        <EmailIcon></EmailIcon>
      </BottomMenu>
    </Container>
  );
};

export default Main;
