import styled from 'styled-components';
import { LanguagesInfo, PopularRepos, StarsInfo, ForksInfo } from './index';

const Charts = () => {
  return (
    <Wrapper className='section'>
      <div className='charts-container'>
        <div className='charts-wrapper '>
          <LanguagesInfo />
        </div>
        <div className='charts-wrapper'>
          <PopularRepos />
        </div>
        <div className='charts-wrapper '>
          <StarsInfo />
        </div>
        <div className='charts-wrapper'>
          <ForksInfo />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Charts;
