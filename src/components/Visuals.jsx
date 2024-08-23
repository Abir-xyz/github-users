import styled from 'styled-components';
import {
  UserInfo,
  FollowersInfo,
  LanguagesInfo,
  PopularRepos,
  StarsInfo,
  ForksInfo,
} from './index';

const Visuals = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <UserInfo />
        <FollowersInfo />
        <LanguagesInfo />
        <PopularRepos />
        <StarsInfo />
        <ForksInfo />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Visuals;
