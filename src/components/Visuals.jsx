import styled from 'styled-components';
import { UserInfo, FollowersInfo, Charts } from './index';

const Visuals = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <UserInfo />
        <FollowersInfo />
        <Charts />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`



`;

export default Visuals;
