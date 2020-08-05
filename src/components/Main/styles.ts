import styled, { css } from 'styled-components';
import {
  ArrowLeft,
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  ExitToApp,
  LocationOn,
  Search,
} from '../../styles/Icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);
  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;
const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    background-color: var(--primary);
    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;
const ProfileInfo = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;
const ProfilePage = styled.div``;
const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

const IconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var(--gray);
  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;
const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));
  @media (min-width: 500px) {
    display: none;
  }
`;
const HomeIcon = styled(Home)`
  ${IconCSS}
`;
const SearchIcon = styled(Search)`
  ${IconCSS}
`;
const BellIcon = styled(Notifications)`
  ${IconCSS}
`;
const EmailIcon = styled(Email)`
  ${IconCSS}
`;

export {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  ProfilePage,
  BellIcon,
  BottomMenu,
  HomeIcon,
  EmailIcon,
  SearchIcon,
};
