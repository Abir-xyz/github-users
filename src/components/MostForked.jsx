import Chart from '../charts/Bars';
import styled from 'styled-components';

const MostForked = () => {
  return (
    <Wrapper className='section'>
      <div className='content'>
        <Chart />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content {
    text-align: center;
    margin: 2rem 0;
  }
`;

export default MostForked;
