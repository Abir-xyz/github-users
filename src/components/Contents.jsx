import styled from 'styled-components';
import { UserInfo, Stats, FollowersInfo, Graphs } from './index';

const Visuals = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <Stats />
        <UserInfo />
        <FollowersInfo />
        <Graphs />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Visuals;
