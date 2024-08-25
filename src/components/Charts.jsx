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

const Wrapper = styled.section`
  @media screen and (min-width: 800px) {
    .charts-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    
  }
`;

export default Charts;
