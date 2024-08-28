import styled from 'styled-components';
import { UserInfo, Stats, FollowersInfo, Graphs } from './index';
import { useUserContext } from '../context/UserContext';

const Visuals = () => {
  const githubUser = true;

  return (
    <Wrapper className='section'>
      {githubUser && (
        <div className='container'>
          <Stats />
          <UserInfo />
          <FollowersInfo />
          <Graphs />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Visuals;
